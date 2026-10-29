import { Base, By } from "./base.js";

const result = new Base();

await result.openBrowser("https://demoqa.com/buttons");
await result.driver.manage().window().maximize();

const doubleClickButton = await result.findElement(By.id("doubleClickBtn"));

await result.driver.actions().doubleClick(doubleClickButton).perform();

const message = await result.findElement(By.id("doubleClickMessage"));

console.log("Result:", await message.getText());

await result.driver.sleep(50000);
await result.closeBrowser();