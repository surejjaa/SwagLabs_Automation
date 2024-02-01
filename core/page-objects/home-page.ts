import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage{
    protected driver: WebDriver; 
    private backpackItem = By.id("search_query_top");
    private addToCartButton = By.id("add-to-cart-sauce-labs-backpack");
    private homeHeader = By.className("title");

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

    async checkHeader() {
        await this.driver.wait(until.elementLocated(this.homeHeader), 10000);
        await this.isMatching(this.homeHeader, testData.headers.home_page);
    }
}