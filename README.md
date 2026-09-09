# SORA For Agents

An open, read-only technical preview for locating source-aware SORA material
through a static corpus and a Streamable HTTP MCP server.

## Scope

- Five read-only MCP tools and one read-only corpus resource.
- No credentials, wallets, transactions, signing, remote browsing, writing or
  operational tooling.
- Original code is Apache-2.0; original editorial material and structured
  records are CC-BY-4.0. See [NOTICE](NOTICE),
  [CONTENT_LICENSE.md](CONTENT_LICENSE.md), and [TRADEMARKS.md](TRADEMARKS.md).

## Hosted technical preview

- Human interface: https://tridente-preview.pages.dev/
- MCP endpoint: https://sora-for-agents-mcp.javitoarroba.workers.dev/mcp
- Health check: https://sora-for-agents-mcp.javitoarroba.workers.dev/health

The hosted preview is public and read-only. It is not a production service,
wallet, exchange, operational control plane, or endorsement by SORA or Iroha.

## Local verification

```bash
cd mcp-worker
npm install
npm run check
npm run smoke
```

Read [mcp-worker/README.md](mcp-worker/README.md) before deploying your own
test instance. Contributions require provenance and review as described in
[CONTRIBUTING.md](CONTRIBUTING.md).

## Release gate

Run [the release gates](control/RELEASE_GATES.md) before testing, committing,
or publishing any change.
