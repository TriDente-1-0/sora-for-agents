import { Client, StreamableHTTPClientTransport } from "@modelcontextprotocol/client";

const client = new Client({ name: "sora-mcp-smoke", version: "0.2.0" });
const transport = new StreamableHTTPClientTransport(new URL(process.env.MCP_URL ?? "http://127.0.0.1:8788/mcp"));

await client.connect(transport);
const { tools } = await client.listTools();
if (tools.length !== 7) throw new Error(`expected 7 tools, received ${tools.length}`);
const { resources } = await client.listResources();
if (resources.length !== 1) throw new Error(`expected 1 resource, received ${resources.length}`);
const result = await client.callTool({ name: "search_content", arguments: { query: "Nexus" } });
if (result.isError) throw new Error("search_content returned an error");
const atlas = await client.callTool({ name: "list_atlas_diagrams", arguments: {} });
if (atlas.isError) throw new Error("list_atlas_diagrams returned an error");
const whitepaper = await client.callTool({ name: "get_document", arguments: { id: "sora-nexus-whitepaper" } });
if (whitepaper.isError) throw new Error("get_document did not retrieve the indexed whitepaper");
console.log(JSON.stringify({ tools: tools.map((tool) => tool.name), resources: resources.map((resource) => resource.uri), search: "ok" }, null, 2));
await client.close();
