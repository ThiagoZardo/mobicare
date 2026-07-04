# System Overview

## Status

Draft. Initial stack direction is based on the product idea.

## Architecture Goals

- Keep the initial architecture simple.
- Separate product rules from presentation code.
- Make authentication, authorization, and data boundaries explicit.
- Avoid premature microservices.
- Prefer boring, well-understood infrastructure until scale requires otherwise.

## Candidate Architecture

The initial architecture should be a modular monolith backend plus a React Native mobile app.

```txt
React Native App
  -> REST API
    -> Auth Module
    -> Vehicles Module
    -> Maintenance Module
    -> Costs Module
    -> Notifications Module
    -> Media Module
    -> AI Enrichment Module (optional, backend-only)
      -> Database
      -> S3
      -> Push Provider
      -> OpenAI / External Data Sources (only if explicitly approved)
```

Optional later layers:

```txt
Background Workers
External Integrations
Notification Service
Analytics Pipeline
AI/RAG Service
Admin Console
```

## Initial Stack

- Frontend: React Native with TypeScript.
- App runtime: Expo or Expo Dev Client; decide after native notification, upload, and build requirements are clearer.
- Backend: Node.js with TypeScript.
- API: REST with Swagger/OpenAPI.
- Database: MySQL on RDS for the initial plan.
- Auth: JWT-based auth, with refresh-token strategy defined before implementation.
- Storage: S3 for vehicle images, part images, receipts, and user uploads.
- V1 storage should focus on private receipts, photos, and user uploads. Specific part images are out of V1.
- Infrastructure: AWS EC2, PM2, RDS MySQL, S3.
- Deployment: manual at first, but scripts should be created early to reduce production risk.

## V1 Architecture Phases

V1 Alpha should establish the minimum functional loop:

- app foundation
- backend foundation
- basic authentication
- basic vehicle management
- basic maintenance with deterministic rules
- simple fuel tracking
- initial dashboard

V1 Beta should make the app testable with real users:

- complete mobile flows
- V1-complete maintenance
- mileage history
- general cost tracking
- improved financial dashboard
- media uploads
- first notification implementation
- PT-BR and dark theme on main screens

V1 Public should harden the product for launch:

- authentication and authorization hardening
- privacy and compliance baseline
- production notifications
- main API tests
- maintenance rule tests
- financial calculation tests
- minimum observability
- initial setup and deployment documentation
- product polish

## Data Boundaries

Important data categories:

- user identity data
- vehicle data
- vehicle plate
- mileage history
- fuel and cost history
- maintenance records
- receipts and uploaded images
- notification tokens
- AI enrichment source data
- sponsored recommendation interaction data, if added after V1

## Backend Module Boundaries

- Auth: account, login, tokens, password reset.
- Users: profile, preferences, notification settings.
- Vehicles: vehicle records, main vehicle, mileage updates.
- Maintenance: maintenance items, plans, reminders, completed services.
- Costs: fuel, insurance, taxes, fines, tolls, parking, washing, other costs.
- Media: upload, storage, metadata, signed URLs.
- Notifications: push scheduling, retries, email fallback if added.
- AI Enrichment: optional internal workflows to enrich vehicle maintenance data and part metadata after deterministic rules are working.
- Sponsorships: sponsored placements, labeling, tracking, and rules. Out of V1.

## Initial Architecture Decisions

- Start with a modular monolith, not microservices.
- Keep AI enrichment asynchronous where possible.
- Do not rely on AI output as the only source of maintenance truth.
- Do not make AI enrichment a blocker for V1 Alpha, V1 Beta, or V1 Public.
- Store recommendation provenance: source, confidence, generated date, and review status.
- Keep sponsored recommendations separated from maintenance rules.
- Keep sponsored recommendations out of V1.

## Open Questions

- Should Expo be enough, or will Expo Dev Client be required?
- Should MySQL remain the database choice, or would PostgreSQL be preferable for future analytics/search?
- Which push provider will be used?
- Which minimum observability tooling is enough for V1 Public?
