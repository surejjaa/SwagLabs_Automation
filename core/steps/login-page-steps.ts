import { By, WebDriver, until } from "selenium-webdriver";
import { LoginPage } from "../page-objects/login-page";
import BasePageSteps from "./base-page-steps";

export class LoginPageSteps extends LoginPage{
    constructor(driver: WebDriver) {
        super(driver);
        this.baseMethods = new BasePageSteps(driver);
    }

    async login(): Promise<void> {
        const usernameInput = await this.driver.wait(until.elementLocated(this.usernameInput), 10000);
        await usernameInput.sendKeys(this.testData.credentials.username);
    
        const passwordInput = await this.driver.wait(until.elementLocated(this.passwordInput), 10000);
        await passwordInput.sendKeys(this.testData.credentials.password);
    
        const loginButton = await this.driver.wait(until.elementLocated(this.loginButton), 10000);
        await loginButton.click();
    }
}