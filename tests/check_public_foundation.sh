#!/usr/bin/env bash
set -euo pipefail

template_root=$(cd "$(dirname "$0")/.." && pwd)
cd "$template_root"

required_files=(
  LICENSE CONTENT_LICENSE.md NOTICE TRADEMARKS.md PRIVACY.md CONTRIBUTING.md SECURITY.md
  control/SIGNED_COMMIT_BASELINE
  .github/CODEOWNERS .github/workflows/ci.yml .githooks/pre-push
  tests/check_release_attribution.sh
  site/index.html site/api/openapi.yaml site/for-agents/mcp.md
)

for file in "${required_files[@]}"; do
  test -f "$file"
done

grep -q 'Apache License' LICENSE
grep -q 'CC-BY-4.0' CONTENT_LICENSE.md
grep -q 'does not emit or retain MCP request bodies' PRIVACY.md
grep -q 'Signed-off-by:' CONTRIBUTING.md
grep -q 'same origin' site/for-agents/mcp.md
! rg -ni 'workers\.dev|tridente-preview|javitoarroba|wrangler|cloudflare' site
echo 'Public repository foundation check passed.'
