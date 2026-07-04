# ADR-0001: Initial Project Structure

## Status

Accepted

## Context

Mobicare is starting from an empty repository. Before choosing frameworks or implementing features, the project needs a small structure that helps Codex and human developers share durable context.

## Decision

Create a minimal context-first project structure:

- `AGENTS.md` for persistent Codex instructions.
- `docs/product/` for product context.
- `docs/architecture/` for technical architecture.
- `docs/decisions/` for architectural decision records.
- `.agents/skills/` for repository-scoped Codex skills.

## Consequences

Benefits:

- Reduces repeated explanation in prompts.
- Keeps product and architecture assumptions visible.
- Gives Codex stable project guidance.
- Creates a foundation for future skills and agents.

Trade-offs:

- Requires discipline to keep documents updated.
- Early documents may contain assumptions that must be revised.
- Too many context files would create fragmentation, so the initial set is intentionally small.
