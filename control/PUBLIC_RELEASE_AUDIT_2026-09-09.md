# Public release audit — 2026-09-09

## Included

- Read-only Streamable HTTP MCP implementation and checked-in corpus.
- Original code, documentation, structured records and release policies.
- Apache-2.0 code licence, CC-BY-4.0 content terms, NOTICE, trademark,
  privacy, security and contribution policies.

## Excluded

- Private Labs history, Cloudflare account details, live deployment config,
  credentials, local dependency directories, operating-system metadata and
  internal operational notes.

## Verification

- `npm audit`: 0 known vulnerabilities.
- `npm run check`: TypeScript and corpus-sync pass.
- `npm run smoke`: MCP tools, resource and search pass.
- Public foundation policy check: required governance files present.

## Hosted endpoint boundary

The hosted technical preview is read-only. It exposes five tools and one
corpus resource, has a 32 KiB body ceiling, and applies an edge rate limit of
10 requests per minute per client IP. It accepts no credentials or operational
actions.
