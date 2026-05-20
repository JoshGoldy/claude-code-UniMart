# Testing Plan

## Purpose

As the testing lead for UniMart, my responsibility was to show that the application was tested in a structured and repeatable way before being handed in. The goal of the testing plan is to prove that the main student marketplace features work as intended and that important error cases are handled safely.

The testing evidence in this document is based on the actual test files from my main GitHub handover repository:

`C:\Users\joshu\Desktop\UniMart---Campus-Marketplace\tests`

## Project Areas Tested

- Student authentication and account handling.
- Student buyer and seller role behaviour.
- Staff and admin access control.
- Marketplace listing retrieval, creation, editing, deletion, saving, and image upload.
- Seller dashboard metrics.
- Messaging between users.
- Reviews, reports, moderation actions, and admin role management.
- Trade facility configuration and booking validation.
- Frontend validators, formatters, navigation, UI components, and page structure.

## Test Environment

| Item | Details |
| --- | --- |
| Repository tested | `C:\Users\joshu\Desktop\UniMart---Campus-Marketplace` |
| Test framework | Jest |
| Browser/DOM environment | `jest-environment-jsdom` |
| Main command | `npm test -- --runInBand` |
| Coverage command | `npm run test:coverage -- --runInBand` |
| Test setup file | `tests/setup.js` |
| Date tested | 20 May 2026 |

## Entry Criteria

- The latest GitHub handover repository is available locally.
- Project dependencies are installed with `npm install`.
- The Jest configuration file is present.
- Test files exist under `tests/unit/Backend` and `tests/unit/Frontend`.

## Exit Criteria

- The full automated suite passes.
- Coverage results are generated.
- The test cases and expected results are documented.
- Remaining quality gaps are clearly explained for the marker.

## Final Test Result

The authoritative handover repository passed all automated tests:

```text
Test Suites: 10 passed, 10 total
Tests:       300 passed, 300 total
Snapshots:   0 total
Time:        4.233 s
Ran all test suites.
```
