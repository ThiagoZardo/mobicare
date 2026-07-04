# Data And Compliance Notes

## Status

Draft. This is not legal advice. It identifies product and engineering risks that must be reviewed before launch.

## Personal Data

Mobicare will process personal data because it stores user accounts and vehicle-related records.

Vehicle plate should be treated as personal or potentially identifying data when associated with a user account, vehicle, location-like behavior, costs, receipts, or maintenance history.

## Sensitive Data Risks

The app is not a healthcare or financial app, but it may still store data that users consider sensitive:

- vehicle plate
- home/work-like usage patterns inferred from mileage and expenses
- receipts with names, addresses, tax IDs, or payment data
- insurance, fines, taxes, and licensing records
- uploaded images
- notification tokens

## Engineering Requirements

- Use least-privilege access to user records and S3 objects.
- Store uploads with private access by default.
- Use signed URLs for private files.
- Avoid storing unnecessary payment details.
- Encrypt secrets and never commit credentials.
- Log operational events without leaking personal data.
- Define retention and deletion behavior.
- Add data export and account deletion flows before public launch if feasible.

## V1 Public Compliance Baseline

V1 Public should not launch until these baseline items are addressed or explicitly documented as accepted limitations:

- Authentication and authorization are hardened for user-owned resources.
- Vehicle plate remains optional unless a product decision changes that.
- Receipts, photos, and uploaded files are private by default.
- Private files use signed URLs.
- Logs avoid personal data, vehicle plate, receipt contents, private URLs, and notification tokens.
- Retention and deletion behavior is defined.
- Account deletion and data export behavior is decided before public launch.
- Notification payloads avoid sensitive personal or vehicle data.
- Main API, maintenance rule, and financial calculation tests exist for critical flows.
- Minimum production observability is defined without leaking personal data.

## Image And Copyright Risks

Part and vehicle images must come from licensed, owned, partner-provided, or clearly permitted sources.

Avoid scraping images from search engines, marketplaces, manufacturer websites, or social networks unless the license and terms explicitly allow the intended commercial use.

Specific or licensed part images, a complete parts catalog, and scraping vehicle, part, or image data without clear licensing are out of V1.

For each stored image, keep metadata:

- source URL or provider
- license type
- attribution requirement
- commercial-use permission
- date imported
- related vehicle or part
- review status

## Sponsored Recommendations

Sponsored recommendations must be clearly labeled and separated from maintenance safety recommendations.

The app should avoid implying that a sponsored part is mechanically required unless that claim is supported by trusted compatibility data.

Sponsored recommendations, marketplace flows, affiliate links, payments, and subscriptions are out of V1.

## Open Questions

- What is the privacy policy scope for V1?
- Will the app use third-party analytics?
- What account deletion and data export behavior is required before V1 Public?
- Which minimum observability tooling is acceptable for V1 Public?
