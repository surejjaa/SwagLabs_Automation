import { By, WebDriver, until } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage {
    protected driver: WebDriver;
    private usernameInput = By.id("user-name");
    private passwordInput = By.id("password");
    private loginButton = By.id("login-button");

    async login(): Promise<void> {
        const usernameInput = await this.driver.wait(until.elementLocated(this.usernameInput), 10000);
        await usernameInput.sendKeys(testData.credentials.username);

        const passwordInput = await this.driver.wait(until.elementLocated(this.passwordInput), 10000);
        await passwordInput.sendKeys(testData.credentials.password);

        const loginButton = await this.driver.wait(until.elementLocated(this.loginButton), 10000);
        await loginButton.click();
    }
}