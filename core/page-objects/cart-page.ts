import { By, WebDriver, until } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CartPage {
    protected driver: WebDriver;
    private viewCartButton = By.className("shopping_cart_link");
    private proceedToCheckoutButton = By.id("checkout");
    private firstNameInput = By.id('first-name');
    private lastNameInput = By.id('last-name');
    private zipInput = By.id('postal-code');
    private finishButton = By.id('finish');
    private backHomeButton = By.id('back-to-products');

    async viewCart() {
        const cart = await this.driver.wait(until.elementLocated(this.viewCartButton), 10000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", cart);
        await cart.click();
    }

    async proceedToCheckout() {
        const proceed = await this.driver.findElement(this.proceedToCheckoutButton);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", proceed);
        await proceed.click();
    }

    async submitOrder() {
        const submitOrder = await this.driver.findElement(this.finishButton);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", submitOrder);
        await submitOrder.click();
    }

    async returnToHomePage() {
        const backHome = await this.driver.findElement(this.backHomeButton);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", backHome);
        await backHome.click();
    }

    async fillOutInformation(): Promise<void> {
        const firstNameInput = await this.driver.wait(until.elementLocated(this.firstNameInput), 10000);
        await firstNameInput.sendKeys(testData.credentials.first_name);

        const lastNameInput = await this.driver.wait(until.elementLocated(this.lastNameInput), 10000);
        await lastNameInput.sendKeys(testData.credentials.last_name);

        const zipInput = await this.driver.wait(until.elementLocated(this.zipInput), 20000);
        await zipInput.sendKeys(testData.credentials.zip);
    }
}