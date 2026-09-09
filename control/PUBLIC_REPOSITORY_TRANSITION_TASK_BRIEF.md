# Public repository transition — task brief

## Objective

Maintain a separately created public TriDente repository for an open,
read-only developer-facing technical preview while preserving a clean source,
content, privacy and operational boundary. The private Labs repository is not
the release repository.

## Constraints

- No credential, account identifier, private route, operational log or
  deployment-specific configuration is committed.
- No live-network action, wallet, signing, payment, swap, staking or deploy
  capability is added.
- Only original material and attributed, non-bundled references are included.

## Inputs

- The approved implementation and release-safe material extracted from private
  Labs after a separate public-release decision.
- SORA branding and Hyperledger Iroha upstream licence declarations recorded in
  `NOTICE`.
- Local For Agents SORA corpus project in JSD.

## Assumptions

- The hosted endpoint is a public read-only technical preview.
- The application does not log request bodies, queries, tool arguments or
  response content.

## Deliverables and acceptance tests

The public repository contains Apache-2.0, CC-BY-4.0 content terms,
provenance, trademark and privacy documents, a test-host operations contract,
and an executable foundation check. See
`tests/check_public_foundation.sh` and
`docs/control/PUBLIC_REPOSITORY_TRANSITION_REVIEW_CHECKLIST.md`.
