
class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators for Sauce Demo login elements
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Opens the login page
  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  // Enters credentials and clicks Login
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Returns the visible error message or an empty string
  async getErrorMessage() {
    if (await this.errorMessage.isVisible()) {
      return (await this.errorMessage.textContent()).trim();
    }
    return '';
  }
}

module.exports = LoginPage;
