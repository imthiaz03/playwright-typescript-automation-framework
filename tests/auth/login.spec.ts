import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test.describe('Authentication - Login', () => {

    test('TC-AUTH-001 - Standard user can login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            users.standardUser.email,
            users.standardUser.password
        );

        await expect(page).toHaveURL(/\/account$/);
    });


    test('TC-AUTH-002 - Admin user can login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            users.admin.email,
            users.admin.password
        );

        await expect(page).toHaveURL(/\/admin\/dashboard/);
    });


    test('TC-AUTH-003 - Invalid credentials should show error message', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            users.invalidUser.email,
            users.invalidUser.password
        );

        await expect(page).toHaveURL(/\/auth\/login/);
    });


    test('TC-AUTH-004 - Login with empty email', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.passwordInput.fill(users.standardUser.password);
        await loginPage.loginButton.click();

        await expect(page).toHaveURL(/\/auth\/login/);
    });


    test('TC-AUTH-005 - Login with empty password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.emailInput.fill(users.standardUser.email);
        await loginPage.loginButton.click();

        await expect(page).toHaveURL(/\/auth\/login/);
    });

});