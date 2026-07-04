---
name: feature-planning
description: Use when planning a new Mobicare feature before implementation. Produces a concise feature brief, assumptions, risks, affected files or modules, test strategy, and implementation plan. Do not use for direct code implementation unless the user explicitly asks to continue into coding.
---

# Feature Planning

Use this skill to turn a feature idea into an implementation-ready plan.

## Inputs

- Feature request or product idea.
- Relevant product context from `docs/product/`.
- Relevant architecture context from `docs/architecture/`.
- Existing code structure, if implementation has already started.

## Workflow

1. Restate the feature in plain language.
2. Separate facts, assumptions, and open questions.
3. Identify affected product flows.
4. Identify affected technical areas.
5. List security, privacy, data, and reliability risks.
6. Propose a small implementation plan.
7. Propose a focused test strategy.
8. Ask for clarification only when a missing answer would materially change the plan.

## Output Format

```md
## Feature Brief

## Facts

## Assumptions

## Open Questions

## Affected Areas

## Risks

## Implementation Plan

## Test Strategy

## Recommended Next Step
```

## Boundaries

This skill should not:

- invent business rules
- choose paid services without approval
- create broad architecture rewrites
- implement code unless explicitly asked
- replace product discovery
