# ADR-0003: V1 Release Scope

## Status

Accepted

## Context

Mobicare V1 needs a clear release structure so implementation can start incrementally without turning the first version into an oversized launch.

The product goal for V1 is to prove that everyday drivers will register vehicles, maintain history, track costs, and act on reminders.

## Decision

Split V1 into three phases:

- V1 Alpha: minimum functional loop.
- V1 Beta: testable experience with real users.
- V1 Public: security, privacy, stability, and polish.

### V1 Alpha

V1 Alpha includes:

- app foundation
- backend foundation
- basic authentication
- basic vehicle management
- basic maintenance with deterministic rules
- simple fuel tracking
- initial dashboard

### V1 Beta

V1 Beta includes:

- complete mobile flows
- V1-complete maintenance
- mileage history
- general cost tracking
- improved financial dashboard
- media uploads
- first notification implementation
- PT-BR and dark theme on main screens

### V1 Public

V1 Public includes:

- authentication and authorization hardening
- privacy and compliance baseline
- production notifications
- main API tests
- maintenance rule tests
- financial calculation tests
- minimum observability
- initial setup and deployment documentation
- product polish

### Explicitly Out Of V1

- payments
- subscriptions
- sponsored recommendations
- marketplace
- affiliate links
- user-facing AI chat
- AI-based mechanical diagnosis
- OBD2/Bluetooth integration
- fuel price comparison
- motorcycle support
- fleet management
- specific or licensed part images
- complete parts catalog
- receipt OCR or automatic receipt classification
- email alerts
- complete admin console
- advanced analytics pipeline
- RAG or user-facing knowledge base
- scraping vehicle, part, or image data without clear licensing

## Consequences

Benefits:

- Keeps V1 focused on the core user value loop.
- Lets the team validate product behavior before investing in monetization, marketplace, or advanced AI.
- Makes privacy, security, tests, observability, and polish explicit launch criteria for V1 Public.
- Reduces copyright and trust risks by keeping parts images, scraping, sponsored recommendations, and AI diagnosis out of V1.

Trade-offs:

- V1 will not test monetization directly.
- Users will not receive AI chat, diagnosis, marketplace, or email alerts in the first public release.
- Some operational workflows may remain manual until after V1.
- Deterministic maintenance rules must be good enough for initial value before AI enrichment is considered.
