# Testing Strategy

## Strategy Overview

The UniMart testing strategy uses automated Jest tests to prove the most important behaviour of the application. Since UniMart is a student marketplace, the most important risks are account access, student/seller permissions, listing reliability, safe messaging, moderation, and facility handover workflows.

The tests were written to cover both successful actions and failure paths. This is important because a marketplace does not only need to work when users enter perfect data; it must also reject invalid data, protect restricted pages, and return clear errors when database actions fail.

## Test Levels Used

| Level | What it checks | Actual examples from the test suite |
| --- | --- | --- |
| Unit tests | Individual functions and utilities. | Validators, formatters, role helpers, notification helpers. |
| Service-level tests | Application logic around mocked Supabase responses. | Signup, login, listings, saved listings, reviews, reports, facility booking. |
| DOM structure tests | Important frontend page elements. | Login form, signup form, search form, profile forms. |
| Regression tests | Full suite run after changes. | `npm test -- --runInBand`. |
| Coverage testing | Which files are well tested and which need more work. | `npm run test:coverage -- --runInBand`. |

## Why Mocked Supabase Was Used

The tests use mocked Supabase clients so that the project can be tested consistently without needing a live database connection during marking. This allows the test suite to check how the app responds to successful database calls, database failures, missing rows, duplicate records, and invalid inputs.

## Risk-Based Testing Focus

| Risk area | Why it matters | Test focus |
| --- | --- | --- |
| Authentication | Students must log in securely. | Signup, OTP, login, OAuth, password reset, profile update. |
| Permissions | Users must not access the wrong pages. | Student, seller, staff, admin access rules. |
| Listings | Marketplace data must be reliable. | Listing query fallback, create, update, delete, save, image upload. |
| Messaging and reviews | Trust and communication are core marketplace features. | Send messages, validate ratings, report content. |
| Admin and moderation | Unsafe content must be manageable. | Remove listing/review, update reports, role permissions. |
| Facility handover | Transactions must connect to real bookings. | Booking validation and collection confirmation checks. |

## Strategy Limitations

This strategy gives strong local automated evidence, but it does not fully replace live testing. Before real production release, the project should also be tested with a deployed Supabase instance, Paystack sandbox webhooks, and browser-based end-to-end tests.
