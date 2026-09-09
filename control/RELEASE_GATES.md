# Release gates

Before running a test, committing, creating a repository, or pushing a public
change, run:

```bash
tests/check_release_attribution.sh
tests/check_public_foundation.sh
cd mcp-worker && npm run check && npm run smoke
```

The attribution check requires every commit author and committer to be
`javitoarroba <javitoarroba@users.noreply.github.com>`, requires an SSH
signature in every commit, and rejects unapproved tool-attribution markers in
versioned files.

Enable the checked-in local push gate after cloning:

```bash
git config core.hooksPath .githooks
```

GitHub must then confirm the pushed signature as `valid` before a public
release is announced.
