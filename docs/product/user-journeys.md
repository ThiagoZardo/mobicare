# User Journeys

## Status

Draft. These journeys define the approved V1 Alpha product flow before implementation.

## V1 Alpha Journey Principles

- Keep the first usable loop small: account, first vehicle, initial maintenance plan, simple fuel record, and initial dashboard.
- Do not block everyday drivers with details they may not know.
- Use deterministic maintenance rules in V1 Alpha.
- Use honest copy when maintenance history is missing. Do not imply false precision.
- Keep AI, media uploads, push notifications, general costs, and advanced dashboard insights outside the V1 Alpha journey.

## V1 Alpha Flow Summary

```txt
First access
  -> Signup or login
  -> First vehicle registration
  -> Initial maintenance plan generation
  -> Initial dashboard
  -> Simple fuel record
  -> Updated initial dashboard
```

## 1. First Access

### User Goal

Understand what Mobicare does and start using the app without friction.

### Screens

- Splash or loading screen.
- Welcome screen.
- Login screen.
- Signup screen.

### Required Data

- No user-entered data before login or signup.
- Local session state, if available.
- Default user-facing language: Brazilian Portuguese.

### Empty States

- No active session: show Welcome with actions to sign up or log in.
- Authenticated user without vehicle: send user to first vehicle registration.
- Authenticated user with vehicle: send user to the initial dashboard.

### Main Errors

- Session check failed.
- API unavailable.
- Invalid or expired token.
- Network timeout.

### Pending Decisions

- Whether V1 Alpha needs a Welcome screen or can start directly with login and signup.
- Whether expired sessions should show an explanation before returning to login.

## 2. Signup And Login

### User Goal

Create an account or sign in so vehicles, records, and maintenance plans are saved.

### Screens

- Signup screen.
- Login screen.
- Authentication loading state.
- Authentication error state.

Password recovery is out of the V1 Alpha flow unless explicitly added later.

### Required Data

Signup:

- name
- email
- password

Login:

- email
- password

System data:

- authenticated user id
- access token
- refresh token strategy, if implemented in Alpha

### Empty States

- Blank signup fields.
- Blank login fields.
- Newly created account without a vehicle.

### Main Errors

- Invalid email.
- Missing password.
- Weak password, depending on the approved password rules.
- Email already registered.
- Invalid credentials.
- Network or server failure.

### Pending Decisions

- Minimum password rules for V1 Alpha.
- Whether signup automatically signs the user in.
- Whether refresh tokens are fully implemented in Alpha or hardened later.

## 3. First Vehicle Registration

### User Goal

Register the first car so Mobicare can create an initial maintenance plan and dashboard.

### Screens

- First vehicle onboarding screen.
- Vehicle registration form.
- Vehicle creation loading state.
- Vehicle registration error state.

### Required Data

V1 Alpha required fields:

- make
- model
- year
- fuelType
- currentMileage

V1 Alpha optional fields:

- version
- engine
- plate

The data model may support optional version, engine, and plate fields, but the V1 Alpha UX must not block users who do not know those details.

### Empty States

- Authenticated user has no vehicle: show a clear action to register the first vehicle.
- Optional vehicle fields are blank: allow the user to continue.
- Vehicle catalog is not available: allow manual entry or a simple fallback input.

### Main Errors

- Missing required field.
- Invalid year.
- Invalid or negative mileage.
- Vehicle creation failed.
- User is not authenticated.

### Pending Decisions

- Whether make and model use manual input, a small catalog, or both in V1 Alpha.
- Which fuel type values are supported in V1 Alpha.
- Whether optional fields are shown inline or behind an additional details section.

## 4. Initial Maintenance Plan Generation

### User Goal

Receive an initial list of maintenance items to monitor without needing mechanical expertise.

### Screens

- Maintenance plan generation loading state.
- Initial maintenance plan summary.
- Initial maintenance list.
- Initial maintenance item detail, if included in Alpha.
- Dashboard maintenance section.

### Required Data

Inputs:

- vehicle id
- make
- model
- year
- fuelType
- currentMileage
- optional version
- optional engine

Plan data:

- maintenance item
- rule or source used
- confidence level
- due mileage, when available
- due date or interval, when available
- status: ok, upcoming, or overdue

### Empty States

- No vehicle: user must register a vehicle first.
- No specific rule for vehicle: use deterministic generic fallback rules.
- No maintenance history: show honest copy that the plan is an initial estimate based on available data and may need user review.
- Plan cannot be generated: show a recoverable error and allow retry.

### Main Errors

- Missing required vehicle data.
- Maintenance rule unavailable.
- Plan generation failed.
- Inconsistent mileage or date calculation.
- API unavailable.

### Pending Decisions

- Minimum maintenance items included in V1 Alpha.
- Whether Alpha asks for last service date or last maintenance history.
- How much source, rule, and confidence information is visible to the user in Alpha.

## 5. Simple Fuel Record

### User Goal

Record a fuel fill-up with low effort so Mobicare can start tracking fuel spending and consumption.

### Screens

- Add fuel record form.
- Fuel record success state.
- Fuel record error state.
- Initial dashboard fuel section.

### Required Data

- vehicle id
- date
- mileage
- liters
- total amount
- fuelType

Derived data:

- price per liter, if liters and total amount are available
- average consumption, when enough mileage and fuel data exists
- latest vehicle mileage, if the fuel record mileage is newer

### Empty States

- No fuel records: show a clear action to add the first fuel record.
- One fuel record only: explain that average consumption may require more records.
- Missing previous mileage: save the record but avoid overconfident consumption copy.

### Main Errors

- Liters are zero or invalid.
- Total amount is zero or invalid.
- Mileage is invalid or lower than the latest known mileage.
- Date is invalid.
- Vehicle does not exist or does not belong to the user.
- Save failed.

### Pending Decisions

- Whether fuel records automatically update the vehicle current mileage.
- Whether V1 Alpha supports partial fill-ups.
- Whether price per liter is manually entered or always calculated.

## 6. Initial Dashboard

### User Goal

Quickly understand the current state of the main vehicle after registration and first records.

### Screens

- Initial dashboard.
- Main vehicle summary section.
- Maintenance summary section.
- Fuel summary section.
- Contextual calls to action.

### Required Data

- authenticated user
- main vehicle
- current mileage
- initial maintenance plan
- upcoming or overdue maintenance status
- fuel records, if any
- simple fuel summary, if enough data exists

### Empty States

- No vehicle: show action to register the first vehicle.
- Vehicle exists but no maintenance plan: show action to generate or retry the plan.
- No upcoming maintenance: show a clear "no urgent maintenance" state without overpromising.
- No fuel records: show action to add first fuel record.
- Not enough fuel data for average consumption: explain that more records are needed.

### Main Errors

- Dashboard load failed.
- Main vehicle is missing or inconsistent.
- Maintenance plan is missing or failed to load.
- Fuel summary calculation failed.
- Partial data load: show available sections instead of blocking the whole dashboard.

### Pending Decisions

- Whether Alpha uses a dedicated dashboard API endpoint or app-side composition from existing endpoints.
- Whether Alpha includes vehicle switching or only the main vehicle.
- Exact dashboard cards for the first build.
- Maintenance ordering rule. Recommended default: overdue first, then upcoming by nearest due date or mileage.
