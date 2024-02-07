import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { CartPage } from "../page-objects/cart-page";
import BasePageSteps from "./base-page-steps";

export class CartPageSteps extends CartPage{
    constructor(driver: WebDriver) {
        super(driver);
        this.baseMethods = new BasePageSteps(driver);
    }

    async viewCart() {
        await this.baseMethods.scrollToElementAndClick(this.viewCartButton);
    }

    async compareText() {
        await this.baseMethods.locateElement(this.cartItem);
        await this.baseMethods.isMatching(this.cartItem, this.testData.text.item);
        await this.baseMethods.locateElement(this.itemDescription);
        await this.baseMethods.isMatching(this.itemDescription, this.testData.text.description);
    }

    async proceedToCheckout() {
        await this.baseMethods.scrollToElementAndClick(this.proceedToCheckoutButton);
    }

    async proceedWithOrder() {
        await this.baseMethods.scrollToElementAndClick(this.continueButton);
    }

    async submitOrder() {
        await this.baseMethods.scrollToElementAndClick(this.finishButton);    
    }

    async returnToHomePage() {
        await this.baseMethods.scrollToElementAndClick(this.backHomeButton);    
    }

    async fillOutInformation(): Promise<void> {
        const firstNameInput = await this.baseMethods.locateElement(this.firstNameInput);
        await firstNameInput.sendKeys(this.testData.credentials.first_name);

        const lastNameInput = await this.baseMethods.locateElement(this.lastNameInput);
        await lastNameInput.sendKeys(this.testData.credentials.last_name);

        const zipInput = await this.baseMethods.locateElement(this.zipInput);
        await zipInput.sendKeys(this.testData.credentials.zip);
    }
}