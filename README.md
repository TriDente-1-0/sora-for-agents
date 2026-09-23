# SORA For Agents

An open, read-only source-aware SORA corpus and Streamable HTTP MCP service.

## Scope

- Seven read-only MCP tools and one read-only corpus resource.
- A static reading site in [`site/`](site/) served from the same origin as the
  MCP endpoint at `/mcp`.
- No credentials, wallets, transactions, signing, remote browsing, writing or
  operational tooling.
- Original code is Apache-2.0; original editorial material and structured
  records are CC-BY-4.0. See [NOTICE](NOTICE),
  [CONTENT_LICENSE.md](CONTENT_LICENSE.md), and [TRADEMARKS.md](TRADEMARKS.md).

## Local verification

```bash
cd mcp-worker
npm ci
npm run check
```

Read [mcp-worker/README.md](mcp-worker/README.md) before deploying your own
test instance. Contributions require provenance and review as described in
[CONTRIBUTING.md](CONTRIBUTING.md).
