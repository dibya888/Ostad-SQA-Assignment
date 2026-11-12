// tests/login.spec.js

const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

// Load the test data. Each user is expected to have:
// { "username": "...", "password": "...", "expected": "success" | "error" }
const users = require('../data/users.json');

// Create one separate test for each user in the JSON file
users.forEach((user) => {
  test(`login as "${user.username}" should result in ${user.expected}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Open the login page and log in with this user's credentials
    await loginPage.goto();
    await loginPage.login(user.username, user.password);

    if (user.expected === 'success') {
      // Wait for navigation to the inventory page
      await page.waitForURL('**/inventory.html');

      // Verify the inventory page is loaded
      expect(await inventoryPage.isLoaded()).toBe(true);
    } else if (user.expected === 'error') {
      // Wait for the error message to appear (getErrorMessage() does not wait on its own)
      await expect(loginPage.errorMessage).toBeVisible();

      // Verify the error message text is not empty
      const message = await loginPage.getErrorMessage();
      expect(message.trim()).not.toBe('');
    } else {
      // Fail clearly if the data file contains an unknown expected value
      throw new Error(`Unknown expected value "${user.expected}" for user "${user.username}"`);
    }
  });
});