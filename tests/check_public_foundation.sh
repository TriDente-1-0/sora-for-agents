#!/usr/bin/env bash
set -euo pipefail

template_root=$(cd "$(dirname "$0")/.." && pwd)
cd "$template_root"

required_files=(
  LICENSE.apache-2.0 CONTENT_LICENSE.md NOTICE TRADEMARKS.md PRIVACY.md
  operations/TEST_HOST_OPERATIONS.md
  control/PUBLIC_REPOSITORY_TRANSITION_TASK_BRIEF.md
  control/PUBLIC_REPOSITORY_TRANSITION_REVIEW_CHECKLIST.md
)

for file in "${required_files[@]}"; do
  test -f "$file"
done

grep -q 'Apache License' LICENSE.apache-2.0
grep -q 'CC-BY-4.0' CONTENT_LICENSE.md
grep -q '10 requests/minute/IP' operations/TEST_HOST_OPERATIONS.md
grep -q 'does not emit or retain MCP request bodies' PRIVACY.md
echo 'Public repository foundation check passed.'
