# Indexed topics

## Sovereign data spaces

**Status:** published. Policy-scoped spaces retain local authority, visibility, admission, privacy, and validator boundaries while approved value and evidence can coordinate across one logical ledger. Source: [sora.org](https://sora.org/).

## Cross-data-space atomic transactions

**Status:** published. AMX declares participant spaces and read/write sets; spaces prepare against a common snapshot; commit occurs only if every required result is valid; otherwise the exchange aborts without partial effects. Semantic visual equivalent: A prepares `A0 → A1` and QC A; B prepares `B0 → B1` and QC B; Nexus exposes `2/2 prepared`; payment A→B and delivery B→A lock together; all valid evidence commits both, any failure restores both roots. Source: [sora.org](https://sora.org/); diagram semantics additionally transcribed from supplied screenshot, 2026-09-08.

## Hyperledger Iroha 3 Core

**Status:** published. The SORA page presents Iroha 3 as the deterministic execution core, with Torii admission, Kotodama compilation, IVM execution, and canonical history through Sumeragi/Kura. Source: [sora.org](https://sora.org/). Canonical requested source repository: [hyperledger-iroha/iroha](https://github.com/hyperledger-iroha/iroha).

## Sumeragi consensus

**Status:** published. Prepare and Commit QCs bind finality to an exact block and frozen validator context; portable evidence can be checked against trusted context. Source: [sora.org](https://sora.org/).

## A shared economy for AI agents

**Status:** published future use case. SORA describes accounts, assets, permissions, automation, atomic delivery, receipts, and human-defined authority; it explicitly says Iroha does not run AI models or grant unrestricted autonomy. Source: [sora.org](https://sora.org/).
