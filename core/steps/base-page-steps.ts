import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import BasePage from "../page-objects/base-page";

export default class BasePageSteps extends BasePage{
    constructor(driver: WebDriver) {
        super(driver);
    }

    async getTitle(): Promise<string> {
        return await this.driver.getTitle();
    }

    async checkTitle(page: { getTitle: () => Promise<string> }, page_title: string) {
        let title = await page.getTitle();
        expect(title).toMatch(page_title);
    }

    async findElement(selector: By): Promise<WebElement> {
        return await this.driver.findElement(selector);
    }

    async isMatching(selector: By, matchingItem: string): Promise<void> {
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }
}