# Product Roadmap

## V1: Personal Vehicle Care MVP

Goal: prove that everyday drivers will register their vehicles, maintain history, track costs, and act on reminders.

V1 is split into three release phases:

- V1 Alpha: minimum functional loop.
- V1 Beta: testable experience with real users.
- V1 Public: security, privacy, stability, and polish.

### V1 Alpha

Goal: prove the minimum loop from account and vehicle registration to basic maintenance, fuel records, and an initial dashboard.

Scope:

- app foundation
- backend foundation
- basic authentication
- basic vehicle management
- basic maintenance with deterministic rules
- simple fuel tracking
- initial dashboard

### V1 Beta

Goal: make the core experience complete enough for real user testing.

Scope:

- complete mobile flows
- V1-complete maintenance
- mileage history
- general cost tracking
- improved financial dashboard
- media uploads
- first notification implementation
- PT-BR and dark theme on main screens

### V1 Public

Goal: prepare the product for public launch with a trustworthy baseline.

Scope:

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

Original V1 product capabilities remain:

- account creation and login
- multiple vehicle registration
- main vehicle
- simple dashboard
- automatic maintenance plan
- maintenance alerts
- maintenance history
- fuel tracking
- general cost tracking
- mileage history
- receipt/photo upload
- push notifications
- PT-BR
- dark theme
- backend-only AI enrichment, only if it does not block deterministic V1 flows

Recommended cuts if the MVP needs to be smaller:

- make plate optional
- postpone email alerts
- postpone sponsored recommendations
- postpone highly specific part images
- postpone payments and subscriptions
- start with maintenance rules for common vehicles and generic fallback rules

## V2: Trust, Monetization, And Data Quality

Goal: improve recommendation quality and start monetization without damaging user trust.

Candidate scope:

- reviewed vehicle maintenance catalog
- admin review flow for AI-enriched maintenance data
- better graphs and cost insights
- subscription experiment
- clearly labeled sponsored recommendations
- email reminders
- part catalog with licensed images
- referral or affiliate experiments
- privacy and data export flows

## V3: Automotive Ecosystem

Goal: expand from personal tracking into assistance, marketplace, and integrations.

Candidate scope:

- user-facing AI assistant
- basic diagnostic guidance
- workshop integrations
- marketplace or partner offers
- fuel price comparison
- vehicle sharing with another user
- motorcycle support
- OBD2/Bluetooth integration
- recommendation of nearby workshops

## Roadmap Risks

- Too much V1 scope can delay the first user test.
- AI-generated maintenance recommendations can create trust and liability risks.
- Specific part and vehicle images require licensing discipline.
- Sponsored recommendations can reduce trust if mixed with maintenance advice.
- Push notification quality depends on accurate mileage updates.
