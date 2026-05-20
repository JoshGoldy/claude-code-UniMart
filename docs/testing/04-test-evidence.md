# Test Evidence

## Repository Tested

The evidence below was collected from the main GitHub handover repository:

`C:\Users\joshu\Desktop\UniMart---Campus-Marketplace`

## Commands Run

```bash
npm install
npm test -- --runInBand
npm run test:coverage -- --runInBand
```

## Dependency Installation Evidence

```text
added 367 packages, and audited 368 packages in 27s
51 packages are looking for funding
found 0 vulnerabilities
```

## Successful Automated Test Run

```text
Test Suites: 10 passed, 10 total
Tests:       300 passed, 300 total
Snapshots:   0 total
Time:        4.233 s
Ran all test suites.
```

## Coverage Evidence

```text
All files: 39.1% statements, 32.04% branches, 41.15% functions, 40.4% lines
app.js: 88.11% statements, 86.74% branches, 92.59% functions, 88.5% lines
auth.js: 100% statements, 100% branches, 100% functions, 100% lines
authService.js: 72.39% statements, 59.34% branches, 80% functions, 73.68% lines
listingService.js: 79.31% statements, 65.48% branches, 77.14% functions, 79.13% lines
rolePermissions.js: 87.17% statements, 79.66% branches, 77.77% functions, 87.09% lines
navigation.js: 100% statements, 96.77% branches, 100% functions, 100% lines
components.js: 86.36% statements, 93.33% branches, 78.57% functions, 87.5% lines
formatters.js: 100% statements, 100% branches, 100% functions, 100% lines
validators.js: 93.75% statements, 91.66% branches, 100% functions, 100% lines
```

## Interpretation for Submission

The test evidence shows that the full suite passes in the actual handover repository. The coverage report also shows that the project has particularly strong coverage for utility modules, formatters, validators, navigation, role permissions, listing service logic, and the authentication facade.

The lower coverage in `messagingService.js` and `adminService.js` is recorded as a future improvement area rather than hidden. This is important for honest QA reporting.
