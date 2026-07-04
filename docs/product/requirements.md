# Product Requirements

## Status

Draft. Requirements are based on the initial Mobicare product idea and must be validated before implementation.

## Functional Requirements

### V1 Scope

V1 is split into:

- V1 Alpha: minimum functional loop.
- V1 Beta: testable experience with real users.
- V1 Public: security, privacy, stability, and polish.

#### V1 Alpha

- app foundation
- backend foundation
- basic authentication
- basic vehicle management
- basic maintenance with deterministic rules
- simple fuel tracking
- initial dashboard

V1 Alpha must support the minimum user journey from first access to a useful initial dashboard:

1. First access.
2. Signup or login.
3. First vehicle registration.
4. Initial maintenance plan generation.
5. Simple fuel record creation.
6. Initial dashboard view.

Detailed V1 Alpha user journeys are documented in `docs/product/user-journeys.md`.

#### V1 Beta

- complete mobile flows
- V1-complete maintenance
- mileage history
- general cost tracking
- improved financial dashboard
- media uploads
- first notification implementation
- PT-BR and dark theme on main screens

#### V1 Public

- authentication and authorization hardening
- privacy and compliance baseline
- production notifications
- main API tests
- maintenance rule tests
- financial calculation tests
- minimum observability
- initial setup and deployment documentation
- product polish

### Functional Requirements

FR-001: User account
As a driver, I want to create an account and sign in, so that my vehicles and records are saved.

FR-002: Vehicle registration
As a driver, I want to register one or more vehicles, so that Mobicare can track maintenance and costs per vehicle.

V1 Alpha required vehicle fields:

- make
- model
- year
- current mileage
- fuel type

V1 Alpha optional vehicle fields:

- version
- engine
- plate

The data model may support optional version, engine, and plate fields, but the V1 Alpha vehicle registration flow must not block users who do not know these details.

FR-003: Main vehicle
As a driver with multiple vehicles, I want to choose a main vehicle, so that the dashboard starts with the most relevant car.

FR-004: Maintenance plan
As a driver, I want Mobicare to generate an initial maintenance plan, so that I know what to check and when.

The plan should consider:

- mileage
- time since last service
- vehicle characteristics
- confidence level of the recommendation
- source or rule used when available

For V1 Alpha, the initial maintenance plan must be based on deterministic rules. When maintenance history is missing, the app must use honest copy and avoid false precision. The plan should communicate that recommendations are an initial estimate based on available vehicle data and may need user review.

FR-005: Maintenance alerts
As a driver, I want to receive alerts before a maintenance deadline, so that I can act before the item is overdue.

Default alert thresholds:

- 2 months before due date
- or 2,000 km before due mileage

FR-006: Maintenance history
As a driver, I want to record completed maintenance, so that the app can update future reminders.

FR-007: Fuel tracking
As a driver, I want to record fuel fill-ups, so that I can calculate average consumption and fuel costs.

FR-008: General cost tracking
As a driver, I want to record costs such as insurance, IPVA, licensing, fines, parking, tolls, car wash, and other expenses, so that I can understand the real cost of ownership.

FR-009: Receipts and photos
As a driver, I want to upload photos and receipts, so that I can keep evidence of maintenance and expenses.

FR-010: Simple dashboard
As a driver, I want a dashboard with upcoming maintenance and financial summary, so that I can quickly understand my vehicle status.

FR-011: Push notifications
As a driver, I want maintenance reminders through push notifications, so that I do not need to open the app to remember deadlines.

FR-012: PT-BR and dark theme
As a Brazilian driver, I want the app in Portuguese with dark theme support, so that the experience feels familiar and comfortable.

## Non-Functional Requirements

Initial baseline:

- Security: authentication and authorization must be explicit.
- Privacy: personal data, vehicle plate, receipts, and uploaded images must be classified before implementation.
- Reliability: critical flows should have clear error states.
- Observability: production workflows should be traceable.
- Maintainability: business rules should not be hidden inside UI components.
- Explainability: maintenance recommendations should be traceable to a rule, source, or confidence level.
- Safety: the app should not present AI-generated automotive advice as guaranteed mechanical truth.
- Localization: user-facing copy should use clear Brazilian Portuguese.

## Out Of Scope

- Payments.
- Subscriptions.
- Sponsored recommendations.
- Marketplace.
- Affiliate links.
- User-facing AI chat.
- Diagnostic AI for mechanical problems.
- OBD2/Bluetooth integration.
- Fuel price comparison.
- Motorcycle support.
- Professional fleet management.
- Specific or licensed part images.
- Complete parts catalog.
- Receipt OCR or automatic receipt classification.
- Email alerts.
- Complete admin console.
- Advanced analytics pipeline.
- RAG or user-facing knowledge base.
- Scraping vehicle, part, or image data without clear licensing.

## Open Questions

- What account deletion and data export behavior is required before V1 Public?
- Should maintenance plans be manually curated for common vehicles before AI enrichment?
- Which vehicle catalog source will be used?
