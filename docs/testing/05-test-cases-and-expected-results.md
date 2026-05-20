# Test Cases and Expected Results

The following table summarises the main test cases represented in the actual Jest suite.

| ID | Area | Actual test focus | Expected result | Result |
| --- | --- | --- | --- | --- |
| TC-001 | Auth constants | Supabase URL, anon key, image bucket, and max image size. | Configuration values are valid. | Passed |
| TC-002 | Supabase setup | `initializeSupabase` and `getSupabaseClient`. | Client is created and returned. | Passed |
| TC-003 | Signup | Valid signup without immediate session. | Signup succeeds and email verification is required. | Passed |
| TC-004 | Signup validation | Invalid `userRole` and staff account type handling. | Invalid role becomes student; staff account type is forced to buyer. | Passed |
| TC-005 | Login | Correct and incorrect credentials. | Success returns profile; wrong details return error. | Passed |
| TC-006 | OTP | Valid and invalid OTP verification. | Valid token succeeds; expired or invalid token returns error. | Passed |
| TC-007 | Password | Update and reset password flows. | Correct current password updates; failures return errors. | Passed |
| TC-008 | Role permissions | Student, seller, staff, and admin allowed pages. | Each role receives only its correct pages. | Passed |
| TC-009 | Feature access | Marketplace, messages, listing management, trade facility, admin config. | Features match user role and account type. | Passed |
| TC-010 | Navigation | Dynamic navigation for buyer, seller, staff, admin. | Correct navigation items are generated. | Passed |
| TC-011 | Message badge | Counts of 0, normal counts, invalid counts, and counts above 99. | Badge hides, shows count, or shows `99+` correctly. | Passed |
| TC-012 | Marketplace listings | Primary listing query succeeds. | Listings array is returned. | Passed |
| TC-013 | Marketplace fallback | Join query fails but simple query works. | Fallback query prevents a broken marketplace. | Passed |
| TC-014 | Saved listings | Missing user/listing ID and valid save/unsave. | Missing data returns errors; valid actions succeed. | Passed |
| TC-015 | Seller listings | Seller retrieves own listings. | Listing array is returned for valid seller. | Passed |
| TC-016 | Create listing | Valid listing payload. | New listing is created and returned. | Passed |
| TC-017 | Update/delete listing | Valid and failing database responses. | Success or user-facing error is returned. | Passed |
| TC-018 | Image upload | No file, successful upload, failed upload. | Empty URL, public URL, or error is returned. | Passed |
| TC-019 | Dashboard metrics | Active/sold listings and monthly/recent data. | Metrics and dashboard arrays are calculated. | Passed |
| TC-020 | Messaging | Send message success and insert failure. | Message is returned or error is shown. | Passed |
| TC-021 | Reviews | Missing details and ratings outside 1-5. | Validation errors are returned. | Passed |
| TC-022 | Reviews | Valid integer ratings 1 through 5. | Review is accepted. | Passed |
| TC-023 | Reports | Missing report details and valid listing report. | Errors or valid report data are returned. | Passed |
| TC-024 | Reports | Unknown target type. | Target type is sanitised to `listing`. | Passed |
| TC-025 | Admin roles | Get and update role permissions. | Permissions load, update, or fail safely. | Passed |
| TC-026 | Moderation | Remove listing/review and update report status. | Moderation actions succeed or return clear errors. | Passed |
| TC-027 | Facility config | Defaults and valid operating-hour config. | Facility configuration saves successfully. | Passed |
| TC-028 | Facility booking | Missing transaction/listing or missing booking/buyer. | Validation errors are returned. | Passed |
| TC-029 | Frontend forms | Login, signup, search, profile structures. | Required forms and fields exist. | Passed |
| TC-030 | Validators | Email, password, price, required value, student number. | Valid input passes and invalid input fails. | Passed |
| TC-031 | Formatters | Prices, dates, status labels, escaped HTML. | Output is user-friendly and safe. | Passed |
| TC-032 | UI components | Toasts, dropdowns, mobile sidebar. | Components work and handle missing elements safely. | Passed |

## Overall Result

All listed automated test areas passed in the main GitHub handover repository.
