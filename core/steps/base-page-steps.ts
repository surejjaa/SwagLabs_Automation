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

    async locateElement(selector: By): Promise<WebElement> {
        return await this.driver.wait(until.elementLocated(selector), 10000);
    }

    async isMatching(selector: By, matchingItem: string): Promise<void> {
        const element = await this.locateElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    } 

    async findElementAndClick(selector: WebElement): Promise<void>{
        const element = await this.locateElement(selector);
        await element.click();
    }

    async scrollToElementAndClick(selector: WebElement): Promise<void>{
        const element = await this.locateElement(selector);
        await this.scrollToElement(element)
        await element.click();
    }

    async scrollToElement(selector: By): Promise<void>{
        return await this.driver.executeScript("arguments[0].scrollIntoView(true);", selector, 10000);
    }
}