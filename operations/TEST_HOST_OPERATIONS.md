# Public test host: operations contract

## Objective

Expose a public, read-only technical preview for developer testing without
exposing repository files, credentials, queries, live-network actions or
unbounded infrastructure resources.

## Request controls

Apply these controls at the public reverse proxy or WAF, before application
code:

| Control | Initial value | Applies to |
| --- | --- | --- |
| Request rate | 10 requests/minute/IP | `/mcp` and `/api/` |
| Burst | 5 requests | `/mcp` and `/api/` |
| Request body | 32 KB maximum | `/mcp` and `/api/` |
| Query length | 120 characters maximum | MCP search tool |
| Methods | GET for static API; MCP protocol methods only at `/mcp` | all public routes |
| Egress | No application crawling or outbound fetches | MCP runtime |

Rate limits apply to requests, not to the lifetime of a Streamable HTTP
session. Tune them only from aggregated error and capacity evidence.

## Monitoring

Publish no query or response content to logs. Collect only the metadata listed
in [PRIVACY.md](../PRIVACY.md), retain it for 30 days, and monitor:

- request volume, 4xx/5xx rate and rate-limit denials;
- p50/p95 latency and response-size buckets;
- MCP initialization, resource-read and tool-call success/failure counts;
- corpus version and content-hash served;
- process health and disk/CPU/memory saturation.

## Application boundary

The public server is a Cloudflare Worker using Streamable HTTP. It exposes
read-only resources and search/fetch tools over a checked-in corpus; it does
not crawl, fetch linked sites, or write state. No wallet, signing, payment,
swap, staking, deployment or write capability belongs in this package.

## Release checklist

1. Domain, TLS and host/origin allowlist are configured.
2. Public routes are an explicit allowlist: web, static API, `/mcp`, health.
3. Proxy/WAF limits above are enabled and verified with 429 tests.
4. Logs redact request content and carry a 30-day deletion rule.
5. Health, error and abuse alerts have a named technical owner.
6. A dated MCP client test matrix records initialization, resources, tools and
   rejection behavior.
