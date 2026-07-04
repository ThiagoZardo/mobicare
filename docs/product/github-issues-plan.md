# GitHub Issues Plan

## Purpose

This file defines which backlog items should become GitHub issues and in what order.

## Issue Creation Strategy

Create issues in this order:

1. Epics
2. Stories
3. Tasks only when they are implementation-ready

Do not create every task as an issue immediately.

Use tasks inside story issues until the work is clear enough to split.

## Initial GitHub Labels

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
- V1
- V2
- V1 Alpha
- V1 Beta
- V1 Public

## GitHub Project Setup

Project name: Mobicare Roadmap

Custom fields:

- Release: V1 Alpha, V1 Beta, V1 Public, V2
- Type: Epic, Story, Task, Bug
- Priority: P0, P1, P2, P3
- Status: Todo, In Progress, Done

Initial issues created manually:

- [Epic] Product Definition And MVP
- [Story] Define V1 MVP Scope

## V1 Epic Creation Order

Create V1 epics in this order:

1. [Epic] Product Definition And MVP
2. [Epic] App Foundation
3. [Epic] Backend Foundation
4. [Epic] Authentication
5. [Epic] Vehicle Management
6. [Epic] Maintenance
7. [Epic] Costs And Fuel
8. [Epic] Media Uploads
9. [Epic] Notifications
10. [Epic] Dashboard And Insights

## V1 Phase Assignment

Use these phases to organize V1 work in the GitHub Project:

- V1 Alpha: minimum functional loop.
- V1 Beta: testable experience with real users.
- V1 Public: security, privacy, stability, and polish.

Epic phase guidance:

1. [Epic] Product Definition And MVP: V1 Alpha
2. [Epic] App Foundation: V1 Alpha
3. [Epic] Backend Foundation: V1 Alpha
4. [Epic] Authentication: V1 Alpha, with hardening in V1 Public
5. [Epic] Vehicle Management: V1 Alpha
6. [Epic] Maintenance: V1 Alpha for deterministic basics; V1 Beta for complete V1 maintenance; V1 Public for rule tests
7. [Epic] Costs And Fuel: V1 Alpha for simple fuel tracking; V1 Beta for general costs and financial dashboard support; V1 Public for financial calculation tests
8. [Epic] Media Uploads: V1 Beta, with privacy hardening in V1 Public
9. [Epic] Notifications: V1 Beta for first implementation; V1 Public for production readiness
10. [Epic] Dashboard And Insights: V1 Alpha for initial dashboard; V1 Beta for improved financial dashboard; V1 Public for polish

Do not update existing GitHub issues automatically from this document. Use it as planning guidance when creating or editing issues manually.

V2 epics should stay planned but should not be created as active execution issues until the V1 scope is stable:

- [Epic] AI Enrichment
- [Epic] Monetization
