# Privacy and observability

## Public test-host default

The public read-only test service records only operational metadata needed to
keep it reliable and detect abuse:

- timestamp;
- route and HTTP status;
- response latency and response-size bucket;
- rate-limit outcome;
- an aggregated or rotating pseudonymous network identifier where required for
  rate limiting.

The application does not emit or retain MCP request bodies, search text, tool
arguments, response content, credentials, cookies, wallet addresses,
transaction material or user profiles.

## Retention

Hosting providers may process technical metadata under their applicable terms
and configured retention settings. Before using a different host or enabling
additional observability, maintainers must publish the processor and retention
period here. Aggregated counters that cannot identify a visitor may be retained
for operational trend analysis.

## Purpose and contact

Data is processed solely for availability, security, abuse prevention and
capacity planning of the test service. Before a public endpoint is announced,
the release owner must add the applicable contact route and hosting processor
details.
