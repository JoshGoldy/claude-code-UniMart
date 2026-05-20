# Bugs Found and Fixed

## Purpose

This section explains the types of bugs and quality risks that were checked during testing. Some of these were direct defects, while others were risk areas that the tests protect against so that the app does not regress later.

| ID | Bug or risk covered | Why it mattered for UniMart | Fix or protection | Verified by |
| --- | --- | --- | --- | --- |
| BF-001 | Dependencies were missing in the handover repo before testing. | The test suite could not run until packages were installed. | Ran `npm install` in the main repo. | Dependency install reported 0 vulnerabilities. |
| BF-002 | Invalid emails or weak passwords could be accepted. | Signup and login forms need basic data quality. | Validator functions reject bad email and short password values. | `validators.test.js` and `app-utilities.test.js`. |
| BF-003 | Invalid prices or student numbers could be accepted. | Listings and student identity fields need validation. | Price and student number validators reject invalid input. | `validators.test.js`. |
| BF-004 | Student users could access staff/admin pages if permissions failed. | This would break role separation. | Role permission helpers restrict pages and features by role. | `rolePermissions.test.js` and `app-utilities.test.js`. |
| BF-005 | Sellers and buyers could receive wrong navigation items. | Users need a clear interface for their role. | Dynamic navigation is built from role and account type. | `navigation.test.js`. |
| BF-006 | Marketplace listing query could fail if a joined query failed. | A database query issue could make the marketplace appear broken. | Listing service falls back to a simpler query. | `listings.test.js`. |
| BF-007 | Listing save/create/update/delete failures could crash or hide errors. | Sellers and buyers need clear feedback. | Service functions return success or user-facing errors. | `listings.test.js`. |
| BF-008 | Image upload could fail silently. | Listings often need images. | Upload success, no-file, and failure paths are tested. | `listings.test.js`. |
| BF-009 | Ratings outside 1 to 5 could be stored. | Reviews need consistent rating values. | Review creation validates integer ratings from 1 to 5. | `messaging-admin.test.js`. |
| BF-010 | Reports could be created with missing or unknown target details. | Moderation records must stay consistent. | Missing details return errors; unknown target type is sanitised. | `messaging-admin.test.js`. |
| BF-011 | Facility bookings could be created without accepted transaction context. | Handover workflow must connect to real marketplace transactions. | Missing transaction/listing/buyer/booking details are rejected. | `messaging-admin.test.js`. |
| BF-012 | UI helpers could throw errors when optional elements are missing. | Some pages may not include every dropdown or sidebar element. | Component initialisers handle missing elements safely. | `components.test.js`. |

## Remaining Risks

- Live Supabase testing is still required before a public release.
- Paystack payment callbacks should be tested with sandbox webhook events.
- End-to-end browser testing should be added for complete student journeys.
- `messagingService.js` and `adminService.js` have lower coverage and should be improved in future work.
