# Mobicare Backlog

## Status

Draft. This backlog will be refined before creating GitHub issues.

## Labels

Suggested labels:

- epic
- story
- task
- bug
- tech-debt
- product
- frontend
- backend
- mobile
- api
- database
- ai
- notifications
- security
- privacy
- monetization

## V1 Release Phases

V1 is split into:

- V1 Alpha: minimum functional loop.
- V1 Beta: testable experience with real users.
- V1 Public: security, privacy, stability, and polish.

Phase scope:

- V1 Alpha: app foundation, backend foundation, basic authentication, basic vehicle management, basic maintenance with deterministic rules, simple fuel tracking, and initial dashboard.
- V1 Beta: complete mobile flows, V1-complete maintenance, mileage history, general cost tracking, improved financial dashboard, media uploads, first notification implementation, PT-BR, and dark theme on main screens.
- V1 Public: authentication and authorization hardening, privacy and compliance baseline, production notifications, main API tests, maintenance rule tests, financial calculation tests, minimum observability, initial setup and deployment documentation, and product polish.

Explicitly out of V1:

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

## Epic 1: Product Definition And MVP

Goal: define what V1 must include and what should be postponed.

Release: V1
Phase: V1 Alpha

### Stories

#### Story 1.1: Define V1 MVP Scope

As a product owner,
I want to define the required and postponed features for V1,
so that implementation starts with a realistic scope.

Tasks:
- Review product vision.
- Define must-have features.
- Define should-have features.
- Define out-of-scope features.
- Document MVP decision.

#### Story 1.2: Define User Journeys

As a product owner,
I want to define the main user journeys,
so that design and engineering can align around real app flows.

Tasks:
- Define first-use journey.
- Define vehicle registration journey.
- Define maintenance alert journey.
- Define fuel/cost tracking journey.
- Define maintenance completion journey.

## Epic 2: App Foundation

Goal: create the initial React Native app structure.

Release: V1
Phase: V1 Alpha

### Stories

#### Story 2.1: Create React Native Project

As a developer,
I want to create the initial React Native project,
so that the mobile app has a working foundation.

Tasks:
- Decide Expo vs Expo Dev Client.
- Create React Native TypeScript app.
- Configure linting and formatting.
- Configure base navigation.
- Configure theme foundation.

#### Story 2.2: Create Initial App Screens

As a user,
I want to access the first app screens,
so that the product flow can be validated early.

Tasks:
- Create welcome screen.
- Create login screen placeholder.
- Create signup screen placeholder.
- Create dashboard placeholder.
- Create vehicle registration placeholder.

## Epic 3: Backend Foundation

Goal: create the initial backend API structure.

Release: V1
Phase: V1 Alpha

### Stories

#### Story 3.1: Create Node.js API

As a developer,
I want to create the initial backend API,
so that the mobile app can communicate with a structured backend.

Tasks:
- Create Node.js TypeScript project.
- Configure API framework.
- Configure environment variables.
- Configure health check endpoint.
- Configure Swagger/OpenAPI.

#### Story 3.2: Configure Database

As a developer,
I want to configure the initial database connection,
so that app data can be persisted.

Tasks:
- Confirm MySQL vs PostgreSQL.
- Configure database client/ORM.
- Create migration setup.
- Create local development database setup.
- Document database commands.

## Epic 4: Authentication

Goal: allow users to create accounts and log in.

Release: V1
Phase: V1 Alpha, with hardening in V1 Public

### Stories

#### Story 4.1: User Signup

As a driver,
I want to create an account,
so that I can save my vehicles and maintenance data.

Tasks:
- Create users table.
- Create signup endpoint.
- Validate name, email, and password.
- Hash password securely.
- Add API tests.

#### Story 4.2: User Login

As a driver,
I want to log in,
so that I can access my saved data.

Tasks:
- Create login endpoint.
- Validate credentials.
- Generate access token.
- Define refresh token strategy.
- Add API tests.

## Epic 5: Vehicle Management

Goal: allow users to register and manage vehicles.

Release: V1
Phase: V1 Alpha

### Stories

#### Story 5.1: Register Vehicle

As a driver,
I want to register my vehicle,
so that Mobicare can create maintenance reminders.

Tasks:
- Create vehicles table.
- Create vehicle creation endpoint.
- Add vehicle registration screen.
- Validate make, model, year, fuel type, and mileage.
- Decide whether plate is optional in V1.

#### Story 5.2: Main Vehicle

As a driver with multiple vehicles,
I want to choose my main vehicle,
so that my dashboard opens with the most relevant car.

Tasks:
- Add main vehicle field or relation.
- Create endpoint to set main vehicle.
- Update dashboard logic.
- Add UI state for main vehicle.

## Epic 6: Maintenance

Goal: create maintenance plans, reminders, and history.

Release: V1
Phase: V1 Alpha for deterministic basics; V1 Beta for complete V1 maintenance; V1 Public for rule tests

### Stories

#### Story 6.1: Initial Maintenance Plan

As a driver,
I want Mobicare to generate an initial maintenance plan,
so that I know what needs attention.

Tasks:
- Define maintenance item model.
- Define default maintenance rules.
- Create maintenance plan generation service.
- Store recommendation source and confidence.
- Add tests for rule generation.

#### Story 6.2: Maintenance Alerts

As a driver,
I want to receive alerts before maintenance is due,
so that I can act before it becomes overdue.

Tasks:
- Define alert thresholds.
- Create reminder calculation service.
- Create notification scheduling model.
- Add push notification integration later.
- Add tests for date and mileage thresholds.

#### Story 6.3: Maintenance History

As a driver,
I want to record completed maintenance,
so that future reminders stay accurate.

Tasks:
- Create maintenance history table.
- Create endpoint to mark maintenance as completed.
- Allow photo/receipt attachment later.
- Update next due date and mileage.
- Add tests.

## Epic 7: Costs And Fuel

Goal: help users understand how much their car costs.

Release: V1
Phase: V1 Alpha for simple fuel tracking; V1 Beta for general costs and financial dashboard support; V1 Public for financial calculation tests

### Stories

#### Story 7.1: Fuel Records

As a driver,
I want to record fuel fill-ups,
so that I can track consumption and fuel spending.

Tasks:
- Create fuel records table.
- Create fuel record endpoint.
- Add fuel form screen.
- Calculate average consumption.
- Add tests.

#### Story 7.2: General Costs

As a driver,
I want to record general vehicle costs,
so that I understand my monthly cost of ownership.

Tasks:
- Define cost categories.
- Create costs table.
- Create cost record endpoint.
- Add cost form screen.
- Add monthly summary calculation.

## Epic 8: Media Uploads

Goal: allow users to upload receipts and photos.

Release: V1
Phase: V1 Beta, with privacy hardening in V1 Public

### Stories

#### Story 8.1: Receipt Upload

As a driver,
I want to upload receipts and photos,
so that I can keep proof of maintenance and expenses.

Tasks:
- Configure S3 bucket strategy.
- Create signed upload URL endpoint.
- Store file metadata.
- Attach files to maintenance or cost records.
- Ensure private access by default.

## Epic 9: Notifications

Goal: remind users about upcoming maintenance.

Release: V1
Phase: V1 Beta for first implementation; V1 Public for production readiness

### Stories

#### Story 9.1: Push Notifications

As a driver,
I want to receive push notifications,
so that I remember upcoming maintenance.

Tasks:
- Choose push notification provider.
- Store device tokens.
- Create notification preferences.
- Send test notification.
- Schedule maintenance reminders.

## Epic 10: Dashboard And Insights

Goal: show the user the most important vehicle maintenance and cost information in one simple place.

Release: V1
Phase: V1 Alpha for initial dashboard; V1 Beta for improved financial dashboard; V1 Public for polish

### Stories

#### Story 10.1: Main Vehicle Dashboard

As a driver,
I want to see a dashboard for my main vehicle,
so that I can quickly understand what needs attention.

Tasks:
- Define dashboard summary fields.
- Show main vehicle information.
- Show upcoming maintenance.
- Show overdue maintenance.
- Show latest mileage.

#### Story 10.2: Financial Summary

As a driver,
I want to see a simple financial summary,
so that I can understand my vehicle costs.

Tasks:
- Show monthly cost summary.
- Show cost by category.
- Show cost per kilometer.
- Show fuel spending summary.
- Add empty states for missing data.

#### Story 10.3: Consumption Summary

As a driver,
I want to see my average fuel consumption,
so that I can understand how efficiently my car is running.

Tasks:
- Calculate average consumption.
- Show latest consumption trend.
- Handle incomplete fuel records.
- Add simple explanatory copy in PT-BR.

## Epic 11: AI Enrichment

Goal: use AI internally to improve maintenance and vehicle data.

Release: V2

### Stories

#### Story 11.1: AI-Assisted Maintenance Enrichment

As the system,
I want to use AI to suggest maintenance data,
so that Mobicare can improve initial plans while preserving traceability.

Tasks:
- Define AI enrichment input schema.
- Define AI enrichment output schema.
- Store source, confidence, and review status.
- Prevent unreviewed high-risk recommendations.
- Add evaluation examples.

#### Story 11.2: Parts And Images Research

As the system,
I want to research compatible parts and images,
so that users can better understand maintenance items.

Tasks:
- Define allowed image sources.
- Define license metadata fields.
- Store image source and license.
- Avoid unlicensed scraping.
- Add review status for image records.

## Epic 12: Monetization

Goal: define a monetization model without reducing user trust.

Release: V2

### Stories

#### Story 12.1: Subscription Strategy

As a product owner,
I want to define subscription options,
so that Mobicare can become sustainable.

Tasks:
- Define free trial rules.
- Define monthly, quarterly, and annual plan hypotheses.
- Decide if payments are in V1 or V2.
- Define premium features.

#### Story 12.2: Sponsored Recommendations

As a product owner,
I want sponsored recommendations to be clearly labeled,
so that monetization does not break user trust.

Tasks:
- Define sponsored recommendation rules.
- Define visual labeling requirements.
- Separate sponsored offers from maintenance warnings.
- Define tracking events.
