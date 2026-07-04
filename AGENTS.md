# AGENTS.md

## Project

Mobicare is an application project in the initial discovery and architecture phase.

Important: when information is missing, ask for clarification or mark it as an assumption. Do not invent product requirements, business rules, compliance obligations, or integrations.

## Working Agreements

- Prefer small, incremental changes.
- Explain architectural trade-offs before implementing broad changes.
- Keep context files concise and update them when decisions become stable.
- Use English for code, filenames, commits, and technical documentation unless product copy requires Portuguese.
- Avoid adding production dependencies without explaining why they are needed.
- Do not introduce external services, paid APIs, or cloud resources without explicit approval.

## Context Rules

- Treat `docs/product/` as product context.
- Treat `docs/architecture/` as technical architecture context.
- Treat `docs/decisions/` as durable decision history.
- Keep facts, assumptions, and open questions separate.
- Prefer updating existing context documents over creating many overlapping files.

## Development Expectations

When code exists:

- Inspect the existing structure before proposing changes.
- Follow the project's established framework and conventions.
- Add or update tests for behavior changes.
- Run the narrowest relevant verification command before finalizing.
- If a verification step cannot be run, explain why.

## Review Expectations

When reviewing code, prioritize:

- correctness
- security
- data integrity
- privacy
- maintainability
- test coverage
- performance risks

Summaries should be secondary to concrete findings.
