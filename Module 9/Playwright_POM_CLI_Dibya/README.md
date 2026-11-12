
# Building a Playwright POM Framework with Claude Web and CLI

## 1. Objective

The objective of this assignment was to build a Playwright automation framework using the Page Object Model (POM) design pattern, with assistance from Claude Web and Claude CLI.

The project demonstrates:
- Setting up a Playwright Test project.
- Implementing the Page Object Model.
- Identifying and verifying web element locators.
- Creating automated login tests.
- Implementing data-driven testing using JSON test data.
- Executing tests through the Playwright CLI.

## 2. Project Structure

The project follows a modular structure to separate page objects, test cases, test data, and reports.

```text
Playwright_POM_CLI_Dibya/
│
├── data/
│   └── users.json
│
├── pages/
│   ├── InventoryPage.js
│   └── LoginPage.js
│
├── report/
│   ├── Assignment_Report.pdf
│   ├── CLI_Test_Results.png
│   └── Project_Structure.png
│
├── tests/
│   └── login.spec.js
│
├── test-results/
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## 3. Page Object Model Implementation

The Page Object Model (POM) design pattern was implemented to separate page-specific locators and actions from test logic.

### LoginPage.js

The `LoginPage` class contains:
- Username input locator.
- Password input locator.
- Login button locator.
- Error message locator.
- Navigation and login methods.
- Error message retrieval method.

The locators were verified using Chrome DevTools on the Sauce Demo application.

### InventoryPage.js

The `InventoryPage` class contains:
- Products page title locator.
- Inventory list locator.
- `isLoaded()` method to wait for the inventory page title to become visible.

This structure improves code reusability and maintainability.

## 4. Data-Driven Testing

Data-driven testing was implemented using `data/users.json`.

Three login scenarios were included:

| Username | Password | Expected Result |
|---|---|---|
| standard_user | secret_sauce | Success |
| locked_out_user | secret_sauce | Error |
| standard_user | wrong_password | Error |

The test script reads the JSON data and dynamically generates a separate test for each user scenario.

For successful login, the test verifies navigation to the inventory page and checks that the page has loaded.

For unsuccessful login, the test verifies that an error message is displayed.

## 5. CLI Test Execution

The test suite was executed using the following command:

```bash
npm run test:login
```

### Test Results

All three test cases passed successfully.

| Test Scenario | Status |
|---|---|
| Standard user login | PASS |
| Locked-out user login | PASS |
| Invalid password login | PASS |
| **Total** | **3 Passed, 0 Failed** |

### CLI Execution Screenshot

<img width="1470" height="747" alt="CLI_Test_Results" src="https://github.com/user-attachments/assets/25d38733-a4cd-439d-a6b0-c134dda8f7a0" />


## 6. Project Structure Screenshot

<img width="202" height="567" alt="Project_Structure" src="https://github.com/user-attachments/assets/c4b7189b-5c06-40f1-af72-1acd92357ee5" />


## 7. Claude Assistance and Manual Improvements

Claude Web was used to assist with generating the initial Playwright configuration, Page Object Model classes, and test scripts.

The generated code was reviewed and adapted during implementation.

The following manual improvements were made:
- Verified the Sauce Demo element locators using Chrome DevTools.
- Added `.trim()` to the error message retrieval method to remove surrounding whitespace.
- Improved the inventory page loading check by waiting for the page title to become visible.
- Reviewed and verified the data-driven test logic.

## 8. Conclusion

The assignment successfully demonstrated the implementation of a Playwright automation framework using the Page Object Model and JSON-based data-driven testing.

All three automated login test scenarios passed through CLI execution.

The project provides a modular and reusable foundation for future Playwright automation testing.
