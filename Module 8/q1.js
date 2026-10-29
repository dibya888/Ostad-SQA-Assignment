import {Base, By} from "./base.js";

const result = new Base();
await result.openBrowser("https://demoqa.com/text-box");
await result.driver.manage().window().maximize();
const nameBox = await result.findElement(By.id("userName"));
await nameBox.sendKeys("Dibya Jyoti Dhar");
const emailBox = await result.findElement(By.id("userEmail"));
await emailBox.sendKeys("engr.dibya@gmail.com");
const currentAddressBox = await result.findElement(By.id("currentAddress"));
await currentAddressBox.sendKeys("Uttara, Dhaka, Bangladesh");
const permanentAddressBox = await result.findElement(By.id("permanentAddress"));
await permanentAddressBox.sendKeys("Tangail, Dhaka, Bangladesh");
const submitButton = await result.findElement(By.id("submit"));
await result.driver.executeScript(
    "window.scrollTo(0, document.body.scrollHeight);"
);

await result.driver.sleep(1000);

await result.driver.executeScript(
    "arguments[0].click();",
    submitButton
);
await result.driver.sleep(20000); // Wait for 2 seconds to see the result
console.log("Q1 completed: Form submitted successfully.");
await result.closeBrowser();
