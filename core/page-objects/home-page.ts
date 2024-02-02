import { By } from "selenium-webdriver";
import BasePage from "./base-page";

export class HomePage extends BasePage{
    protected backpackItem = By.id("item_4_title_link");
    protected addToCartButton = By.id("add-to-cart-sauce-labs-backpack");
    protected homeHeader = By.className("title");
}