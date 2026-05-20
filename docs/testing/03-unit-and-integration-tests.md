# Unit and Integration Test Documentation

## Actual Test Files Used

These are the actual Jest test files from the main GitHub handover repository.

| Test file | Main responsibility | Student submission explanation |
| --- | --- | --- |
| `tests/unit/Backend/auth.test.js` | Authentication and profile logic. | Proves that signup, login, OTP, OAuth, profile updates, campus info, password changes, and password recovery behave correctly. |
| `tests/unit/Backend/listings.test.js` | Marketplace listing service logic. | Proves that students can retrieve, save, create, update, delete, and upload images for listings, and that seller dashboard metrics are calculated. |
| `tests/unit/Backend/messaging-admin.test.js` | Messaging, reviews, reports, admin, and facility workflows. | Proves that messages, review validation, report creation, role updates, moderation actions, facility config, bookings, and collection checks are handled. |
| `tests/unit/Backend/app-utilities.test.js` | Shared app logic. | Proves that roles, page permissions, feature access, formatting, local storage, debouncing, notifications, image URLs, and page detection work. |
| `tests/unit/Frontend/components.test.js` | UI component helpers. | Proves that icons, toast messages, dropdowns, and mobile sidebar behaviour work and fail gracefully when elements are missing. |
| `tests/unit/Frontend/comprehensive.test.js` | Page structure checks. | Proves that the login, signup, search, and profile pages contain the required form elements and basic interactions. |
| `tests/unit/Frontend/formatters.test.js` | Formatting helpers. | Proves that prices, dates, status labels, and escaped HTML are formatted safely. |
| `tests/unit/Frontend/navigation.test.js` | Dynamic navigation. | Proves that navigation changes correctly for buyer, seller, staff, and admin users, including unread message badges. |
| `tests/unit/Frontend/rolePermissions.test.js` | Frontend role permissions. | Proves that allowed pages, landing pages, and features match each user role. |
| `tests/unit/Frontend/validators.test.js` | Form validation. | Proves that invalid emails, passwords, prices, required fields, and student numbers are rejected. |

## Unit Testing Coverage

The unit tests check individual functions such as `validateEmail`, `validatePassword`, `formatPrice`, `getAllowedPages`, `hasFeature`, `showToast`, and `renderNavItem`. These tests are fast and repeatable, which makes them useful for proving that core functions still work after code changes.

## Integration-Style Coverage

The backend service tests act as integration-style tests because they check how several pieces of logic behave together around mocked Supabase responses. For example, the listing tests do not only check a single line of code; they check full service behaviours such as fallback queries, image upload responses, and dashboard metric calculations.

## Final Automated Result

```text
Test Suites: 10 passed, 10 total
Tests:       300 passed, 300 total
Snapshots:   0 total
Time:        4.233 s
Ran all test suites.
```
