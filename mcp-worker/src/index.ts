import { McpServer } from "@modelcontextprotocol/server";
import { createMcpHandler } from "agents/mcp/server";
import { z } from "zod";
import corpus from "./corpus.generated.json";

type Corpus = typeof corpus;

interface Env {
  ASSETS: Fetcher;
  MCP_RATE_LIMITER?: {
    limit(input: { key: string }): Promise<{ success: boolean }>;
  };
}

const MAX_BODY_BYTES = 32 * 1024;
const CORPUS_RESOURCE_URI = "https://github.com/TriDente-1-0/sora-for-agents/blob/main/corpus/review-corpus.json";
const json = (value: unknown) => JSON.stringify(value, null, 2);
const text = (value: unknown) => ({ content: [{ type: "text" as const, text: json(value) }] });
const failure = (message: string) => ({ content: [{ type: "text" as const, text: message }], isError: true });

function createServer() {
  const server = new McpServer({ name: "sora-for-agents", version: "0.2.0" });

  server.registerTool(
    "search_content",
    {
      description: "Search the checked-in SORA corpus. Results preserve source status and never browse, infer, write, or operate external systems.",
      inputSchema: { query: z.string().trim().min(2).max(120) }
    },
    async ({ query }) => {
      const needle = query.toLocaleLowerCase();
      const matches = <T>(items: T[]) => items.filter((item) => json(item).toLocaleLowerCase().includes(needle));
      return text({
        query,
        topics: matches(corpus.topics),
        atlas: matches(corpus.atlas),
        documents: matches(corpus.documents),
        ecosystem_access: matches(corpus.ecosystem_access),
        scope: "checked-in corpus",
        network: "not used"
      });
    }
  );

  server.registerTool(
    "get_topic",
    {
      description: "Return one indexed topic, including its source and publication status.",
      inputSchema: { id: z.string().min(1).max(160) }
    },
    async ({ id }) => {
      const topic = corpus.topics.find((item) => item.id === id);
      return topic ? text(topic) : failure("topic not found in the checked-in corpus.");
    }
  );

  server.registerTool(
    "get_document",
    {
      description: "Return one source-bound document record, including JSON-only whitepaper and legacy source material where applicable.",
      inputSchema: { id: z.string().min(1).max(160) }
    },
    async ({ id }) => {
      const document = corpus.documents.find((item) => item.id === id)
        ?? (corpus.whitepaper.id === id ? corpus.whitepaper : undefined)
        ?? (corpus.case_for_xor.id === id ? corpus.case_for_xor : undefined);
      return document ? text(document) : failure("document not found in the checked-in corpus.");
    }
  );

  server.registerTool(
    "list_atlas_diagrams",
    {
      description: "List the checked-in Atlas diagram records and their source boundaries. This does not assert implementation or deployment.",
      inputSchema: { section: z.string().max(80).optional() }
    },
    async ({ section }) => text({
      atlas: corpus.atlas.filter((item) => !section || item.section === section),
      scope: "visual and semantic Atlas index",
      network: "not used"
    })
  );

  server.registerTool(
    "list_links",
    {
      description: "List canonical outbound links checked into the corpus. This tool does not open them.",
      inputSchema: { kind: z.string().max(80).optional() }
    },
    async ({ kind }) => text({ links: corpus.links.filter((item) => !kind || item.kind === kind), scope: "canonical outbound registry", network: "not used" })
  );

  server.registerTool(
    "list_ecosystem_access",
    {
      description: "List direct ecosystem destinations and source-boundary notes. This tool never opens or operates a destination.",
      inputSchema: { category: z.string().max(80).optional() }
    },
    async ({ category }) => text({
      access: corpus.ecosystem_access.filter((item) => !category || item.category === category),
      scope: "direct-source ecosystem registry",
      network: "not used"
    })
  );

  server.registerTool(
    "get_playlist_catalog",
    {
      description: "Return the checked-in SORA video playlist catalog. Verify current availability before publication or reuse.",
      inputSchema: {}
    },
    async () => text({ catalog: corpus.playlists, meta: corpus.playlists_meta })
  );

  server.registerResource(
    "sora-review-corpus",
    CORPUS_RESOURCE_URI,
    { mimeType: "application/json", description: "Checked-in, source-aware SORA review corpus." },
    async () => ({ contents: [{ uri: CORPUS_RESOURCE_URI, mimeType: "application/json", text: json(corpus) }] })
  );

  return server;
}

// Keep the stateless handler's compatibility lane enabled: it accepts current
// Streamable HTTP clients while remaining sessionless and read-only.
const mcp = createMcpHandler(createServer);

function securityHeaders(headers = new Headers()) {
  headers.set("Cache-Control", "no-store");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("Referrer-Policy", "no-referrer");
  // This is a deliberately unauthenticated public read-only service. It never
  // accepts credentials, so browser-based MCP inspectors may use it without
  // gaining access to any user-specific state.
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Accept, Content-Type, Mcp-Session-Id, MCP-Protocol-Version");
  headers.set("Access-Control-Max-Age", "600");
  return headers;
}

function response(body: string, status: number, contentType = "text/plain; charset=utf-8") {
  const headers = securityHeaders();
  headers.set("Content-Type", contentType);
  return new Response(body, { status, headers });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return request.method === "GET"
        ? response(JSON.stringify({ status: "ok", service: "sora-for-agents-mcp", mode: "read-only" }), 200, "application/json; charset=utf-8")
        : methodNotAllowed("GET");
    }

    if (url.pathname !== "/mcp") {
      if (url.pathname === "/health") return response("not found", 404);
      return env.ASSETS.fetch(request);
    }
    if (request.method === "OPTIONS") return optionsResponse();
    if (request.method !== "POST") return methodNotAllowed("POST, OPTIONS");

    const length = Number(request.headers.get("content-length") ?? "0");
    if (!Number.isFinite(length) || length > MAX_BODY_BYTES) return response("request body too large", 413);

    if (env.MCP_RATE_LIMITER) {
      const ip = request.headers.get("cf-connecting-ip") ?? "unattributed";
      const { success } = await env.MCP_RATE_LIMITER.limit({ key: ip });
      if (!success) return response("rate limit exceeded", 429);
    }

    try {
      const upstream = await mcp(request, env, ctx);
      const headers = securityHeaders(new Headers(upstream.headers));
      return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers });
    } catch {
      return response("internal server error", 500);
    }
  }
} satisfies ExportedHandler<Env>;

function methodNotAllowed(allow: string) {
  const headers = securityHeaders();
  headers.set("Allow", allow);
  return new Response("method not allowed", { status: 405, headers });
}

function optionsResponse() {
  return new Response(null, { status: 204, headers: securityHeaders() });
}
