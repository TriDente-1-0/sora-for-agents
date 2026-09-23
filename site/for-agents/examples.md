# Safe query examples

## MCP

`search_content({"query":"atomic"})` returns matching local records with source and status. It must not be used to recommend, transact, or infer an unlisted fact.

`get_topic({"id":"amx-atomic-transactions"})` returns the textual equivalent of the AMX visual; cite `https://sora.org/` and identify screenshot-derived diagram semantics as observed.

`get_playlist_catalog({})` returns a screenshot-observed catalogue. State that it needs refresh before publication or current-use claims.

## Static data

Read `api/v1/topics.json`, `links.json`, `playlists.json`, and `status.json` as bounded local API responses. `status.json` makes unavailable capabilities and release gates explicit. The source of truth remains `../api/v1/topics.json`; API JSON is generated with `python3 04_MCP/tools/build_static_api.py`.
