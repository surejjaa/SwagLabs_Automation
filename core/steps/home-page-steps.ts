import { By, WebElement, WebDriver, until } from "selenium-webdriver";
import { HomePage } from "../page-objects/home-page";

export class HomePageSteps extends HomePage{
    constructor(driver: WebDriver) {
        super(driver);
    }

    async selectItem() {
        const item = await this.driver.findElement(this.backpackItem);
        await this.driver.findElement(this.addToCartButton).click();
    }
    
    async isMatching(selector: By, matchingItem: string): Promise<void> {
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }

    async findElement(selector: By): Promise<WebElement> {
        return await this.driver.findElement(selector);
    }

    async compareText() {
        await this.driver.wait(until.elementLocated(this.homeHeader), 10000);
        await this.isMatching(this.homeHeader, this.testData.text.home_page);
    }
}