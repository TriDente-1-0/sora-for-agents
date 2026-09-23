# Safe query examples

## MCP

`search_content({"query":"atomic"})` returns matching local records with source and status. It must not be used to recommend, transact, or infer an unlisted fact.

`get_topic({"id":"amx-atomic-transactions"})` returns the textual equivalent of the AMX visual; cite `https://sora.org/` and identify screenshot-derived diagram semantics as observed.

`get_playlist_catalog({})` returns a screenshot-observed catalogue. Treat it as
an observed historical record, not a current-use claim.

## Static data

Read `api/v1/topics.json`, `links.json`, `playlists.json`, and `status.json` as
bounded local API responses. `status.json` identifies unavailable capabilities;
each record preserves its source and scope.
