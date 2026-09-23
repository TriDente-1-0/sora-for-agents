#!/usr/bin/env bash
set -euo pipefail
root=$(cd "$(dirname "$0")/.." && pwd)
cd "$root"
baseline=$(tr -d '[:space:]' < control/SIGNED_COMMIT_BASELINE)
git rev-parse --verify "$baseline^{commit}" >/dev/null

while IFS= read -r sha; do
  git cat-file -p "$sha" | grep -q '^gpgsig '
  git log -1 --format=%B "$sha" | grep -qE '^Signed-off-by: .+ <.+>$'
done < <(git rev-list "$baseline..HEAD")
