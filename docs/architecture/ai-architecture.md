# AI Architecture

## Status

AI may be used for internal backend workflows, but it is not required for V1 Alpha, V1 Beta, or V1 Public. The end user should not interact directly with AI in V1.

## Principle

Use AI to assist data enrichment, not to replace deterministic maintenance logic or expert-reviewed rules.

AI-generated content must be stored with provenance, confidence, and review status before it influences user-facing recommendations.

## Possible AI Use Cases

Possible backend-only use cases after deterministic V1 flows are working:

- enrich initial maintenance plans for a vehicle
- summarize public maintenance information into structured candidate rules
- suggest compatible parts for a make/model/year/version after source and licensing rules are clear
- help classify uploaded receipts later, if approved after V1
- help enrich a vehicle and parts image catalog after V1

Future product-side possibilities:

- user-facing automotive assistant
- light diagnostic support
- workshop recommendation
- marketplace assistance
- personalized cost insights

Development-side workflows:

- feature planning skill
- code review skill
- test strategy skill
- architecture review workflow
- documentation generation workflow

## When To Use RAG

Use RAG if the app needs to answer questions from a controlled knowledge base that changes over time, such as policies, manuals, customer records, or operational procedures.

Avoid RAG if:

- the knowledge fits in a small static prompt
- the task is deterministic and should be implemented as normal code
- the source material is low quality or not maintained
- retrieval quality cannot be evaluated

For Mobicare, RAG may become relevant if the team builds a curated knowledge base of manuals, maintenance tables, supplier catalogs, or reviewed automotive articles.

Do not use open-web retrieval directly in user-facing recommendations without source validation and licensing review.

## When To Use Agents

Use agents when the system needs to reason through multi-step tasks, call tools, inspect state, or choose among actions.

Avoid agents when:

- a regular API endpoint is enough
- the flow must be fully deterministic
- the business rule is simple
- the cost or latency would be unjustified

For V1, avoid user-facing agents. Prefer deterministic rules. Backend jobs that produce candidate maintenance data may be explored only if they do not block the V1 release phases.

## When To Use MCP

Use MCP when Codex or an AI agent needs controlled access to external tools or private systems, such as GitHub, Sentry, Figma, internal docs, or databases.

MCP integrations must define:

- allowed tools
- authentication model
- approval requirements
- data exposure risks
- audit expectations

For Mobicare development, MCP may be useful for:

- GitHub issue/PR workflows
- Sentry production diagnostics
- Figma design inspection
- documentation lookup
- database inspection in controlled environments

For the product backend, MCP should not be introduced unless there is a clear need for tool access and a security model.

## Possible Future AI Flow

```txt
Vehicle registered
  -> Normalize vehicle data
  -> Look up curated vehicle/maintenance data
  -> If data is incomplete, run AI enrichment job
  -> Produce candidate maintenance plan
  -> Attach sources, confidence, and review status
  -> Publish safe reminders to the user
```

## AI Safety Rules

- Never present AI output as guaranteed mechanical advice.
- Prefer conservative maintenance intervals when uncertainty is high.
- Show generic maintenance reminders when model-specific data is missing.
- Keep a human-review path for generated rules before using them broadly.
- Keep sponsored recommendations separate from AI-generated maintenance advice.

## Explicitly Out Of V1

- user-facing AI chat
- AI-based mechanical diagnosis
- RAG or user-facing knowledge base
- receipt OCR or automatic receipt classification
- complete parts catalog
- specific or licensed part images
- scraping vehicle, part, or image data without clear licensing
- AI enrichment as a launch blocker

## Open Questions

- Which sources can legally and reliably provide vehicle and maintenance data?
- Will generated maintenance plans require manual approval before reaching users after V1?
- What confidence threshold is acceptable for user-facing reminders after V1?
- Should AI-generated part images be avoided in favor of licensed supplier images?
- What evaluation dataset will be used to test recommendation quality?
