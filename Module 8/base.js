
import { Builder, By } from "selenium-webdriver";

class Base {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
    }

    async openBrowser(url) {
        console.log("Opening browser and navigating to:", url);
        await this.driver.get(url);
    }

    async findElement(locator) {
        console.log("Finding element with locator:", locator);
        return await this.driver.findElement(locator);
    }

    async closeBrowser() {
        console.log("Closing browser");
        await this.driver.quit();
    }
}

export { Base, By };
