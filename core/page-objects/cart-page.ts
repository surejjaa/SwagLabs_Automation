import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import BasePageSteps from "../steps/base-page-steps";

export class CartPage extends BasePage {
    protected viewCartButton = By.className("shopping_cart_link");
    protected cartItem = By.id("item_4_title_link");
    protected itemDescription = By.className("inventory_item_desc");
    protected proceedToCheckoutButton = By.id("checkout");
    protected continueButton = By.id("continue");
    protected firstNameInput = By.id('first-name');
    protected lastNameInput = By.id('last-name');
    protected zipInput = By.id('postal-code');
    protected finishButton = By.id('finish');
    protected backHomeButton = By.id('back-to-products');
    protected baseMethods: BasePageSteps;
}