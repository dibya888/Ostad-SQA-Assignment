class InventoryPage {
  constructor(page) {
    this.page = page;

    // Locators for inventory page elements
    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
  }

  // Checks whether the Products title is visible
  async isLoaded() {
    await this.pageTitle.waitFor({ state: 'visible' });
    return true;
    }
}

module.exports = InventoryPage;