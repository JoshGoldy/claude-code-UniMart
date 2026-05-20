# User Acceptance Testing

## UAT Objective

The automated tests prove that the code behaves correctly in a controlled Jest environment. User Acceptance Testing is the next step for confirming that UniMart works from the perspective of the people who would actually use it: students, sellers, staff, and admins.

For university submission, this UAT section shows that I understand the difference between automated testing and real user acceptance.

## Suggested UAT Participants

- Student buyer
- Student seller
- Staff member managing the trade facility
- Admin or moderator

## UAT Scenarios

| ID | Role | Scenario | Acceptance criteria | Suggested evidence |
| --- | --- | --- | --- | --- |
| UAT-001 | Student buyer | Create an account and verify it. | Student can sign up, verify, and log in. | Screenshot of verified account or login state. |
| UAT-002 | Student buyer | Browse the marketplace. | Listings load and can be filtered by category/search. | Screenshot of filtered marketplace. |
| UAT-003 | Student buyer | Save a listing. | Listing remains saved for the student. | Screenshot of saved/hearted listing. |
| UAT-004 | Student buyer | Message a seller. | Message appears in the correct conversation. | Screenshot of conversation thread. |
| UAT-005 | Student seller | Create a listing. | Listing appears in seller dashboard and marketplace. | Screenshot of listing and dashboard. |
| UAT-006 | Student seller | Edit or delete a listing. | Changes are reflected without errors. | Before/after screenshot. |
| UAT-007 | Student buyer/seller | Submit and accept an offer. | Transaction state updates correctly for both users. | Screenshot of accepted offer. |
| UAT-008 | Staff | View facility bookings. | Staff can see the booking schedule. | Screenshot of facility page. |
| UAT-009 | Staff | Confirm handover or collection. | Booking and transaction status update correctly. | Screenshot of updated status. |
| UAT-010 | Admin | Review reported content. | Admin can dismiss or resolve report. | Screenshot of moderation action. |
| UAT-011 | Admin | Change role permissions. | Affected role sees correct access afterwards. | Screenshot of role settings. |
| UAT-012 | All roles | Attempt restricted page access. | User is redirected or denied access. | Screenshot of access denied page. |

## UAT Sign-Off Criteria

- The main student buyer journey works from signup to marketplace browsing.
- The seller journey works from listing creation to dashboard review.
- Messaging and offers are understandable to both users.
- Staff and admin pages are only available to the correct roles.
- Error messages are clear enough for normal student users.
- No critical issue blocks the project handover.
