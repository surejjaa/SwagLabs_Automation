import { By } from "selenium-webdriver";
import BasePage from "./base-page";

export class LoginPage extends BasePage{
    protected usernameInput = By.id("user-name");
    protected passwordInput = By.id("password");
    protected loginButton = By.id("login-button");
}