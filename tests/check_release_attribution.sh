#!/usr/bin/env bash
set -euo pipefail

root=$(cd "$(dirname "$0")/.." && pwd)
cd "$root"

expected='javitoarroba <javitoarroba@users.noreply.github.com>'

while IFS='|' read -r author committer sha; do
  test "$author" = "$expected"
  test "$committer" = "$expected"
  git cat-file -p "$sha" | grep -q '^gpgsig '
done < <(git log --format='%an <%ae>|%cn <%ce>|%H')

forbidden_pattern="(co""dex|open""ai|chat""gpt|anthro""pic|clau""de|cur""sor|github cop""ilot)"
if git grep -niE "$forbidden_pattern" -- . ':!mcp-worker/package-lock.json'; then
  echo 'Unexpected tool-attribution marker found in versioned files.' >&2
  exit 1
fi

echo 'Release attribution check passed.'
