# ADR-0002: Initial Product Direction

## Status

Accepted

## Context

Mobicare is intended to be a React Native mobile app for Android and iOS focused on everyday drivers in Brazil.

The product helps users manage preventive maintenance, reminders, vehicle history, fuel records, and vehicle ownership costs. AI is planned for backend-only enrichment in the first version, not direct user interaction.

## Decision

The initial product direction is a B2C mobile app for personal vehicle care.

V1 will focus on:

- user accounts
- vehicle registration
- maintenance planning
- maintenance alerts
- maintenance and mileage history
- fuel and cost tracking
- uploads for receipts and photos
- push notifications
- PT-BR
- dark theme
- backend-only AI enrichment

## Consequences

Benefits:

- Clear initial audience.
- Strong practical daily-use problem.
- Good fit for mobile notifications and quick records.
- AI can improve internal data quality without increasing user-facing risk too early.

Trade-offs:

- Maintenance recommendation quality is hard and requires source control.
- Specific part images create copyright and licensing risks.
- Monetization through sponsorship requires strong trust boundaries.
- A large V1 scope may delay validation.
