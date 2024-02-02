import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { CartPage } from "../page-objects/cart-page";

export class CartPageSteps extends CartPage{
    constructor(driver: WebDriver) {
        super(driver);
    }

    async viewCart() {
        const cart = await this.driver.wait(until.elementLocated(this.viewCartButton), 10000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", cart);
        await cart.click();
    }

    async findElement(selector: By): Promise<WebElement> {
        return await this.driver.findElement(selector);
    }

    async isMatching(selector: By, matchingItem: string): Promise<void> {
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }

    async compareText() {
        await this.driver.wait(until.elementLocated(this.cartItem), 10000);
        await this.isMatching(this.cartItem, this.testData.text.item);
        await this.driver.wait(until.elementLocated(this.itemDescription), 10000);
        await this.isMatching(this.itemDescription, this.testData.text.description);
    }

    async proceedToCheckout() {
        const proceed = await this.driver.findElement(this.proceedToCheckoutButton);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", proceed);
        await proceed.click();
    }

    async proceedWithOrder() {
        const continueOrder = await this.driver.wait(until.elementLocated(this.continueButton), 10000)
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", continueOrder);
        await continueOrder.click();
    }

    async submitOrder() {
        const submitOrder = await this.driver.wait(until.elementLocated(this.finishButton), 10000)
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
        await firstNameInput.sendKeys(this.testData.credentials.first_name);

        const lastNameInput = await this.driver.wait(until.elementLocated(this.lastNameInput), 10000);
        await lastNameInput.sendKeys(this.testData.credentials.last_name);

        const zipInput = await this.driver.wait(until.elementLocated(this.zipInput), 10000);
        await zipInput.sendKeys(this.testData.credentials.zip);
    }
}