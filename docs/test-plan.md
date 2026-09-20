# Authentication Test Plan

## Application

Practice Software Testing - Toolshop

## Feature

Authentication / Login

## Objective

Validate that users can successfully authenticate with valid
credentials and that the application correctly handles invalid
and missing login information.

---

## Test Scenarios

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| TC-AUTH-001 | Login with valid admin credentials | User is successfully logged in and redirected to Admin Dashboard | High |
| TC-AUTH-002 | Login with valid user credentials | User is successfully logged in and redirected to the user area | High |
| TC-AUTH-003 | Login with invalid email | "Invalid email or password" message is displayed | High |
| TC-AUTH-004 | Login with invalid password | "Invalid email or password" message is displayed | High |
| TC-AUTH-005 | Login with both fields empty | Email and password required validation messages are displayed | High |
| TC-AUTH-006 | Login with empty email | "Email is required" validation is displayed | Medium |
| TC-AUTH-007 | Login with empty password | "Password is required" validation is displayed | Medium |
| TC-AUTH-008 | Logout after successful login | User is logged out and returned to the login page | High |
| TC-AUTH-009 | Verify password visibility toggle | Password visibility changes when the eye icon is clicked | Medium |
| TC-AUTH-010 | Verify registration navigation | Register link opens the account registration page | Medium |
| TC-AUTH-011 | Verify forgot password navigation | Forgot Password link opens the password recovery page | Medium |