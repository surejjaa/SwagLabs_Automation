import { LoginPage } from "../core/page-objects/login-page";
import { HomePage } from "../core/page-objects/home-page";
import { CartPage } from "../core/page-objects/cart-page";
import { createDriver, deleteCookies, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver, loginPage, homePage, cartPage; 

beforeAll(async () => {
    driver = await createDriver(testData.url.login_page);
    loginPage = new LoginPage(driver);
    homePage = new HomePage(driver);
    cartPage = new CartPage(driver);
});

describe("Checkout process", () => {
    test("Login and purchase product", async () => {

        await loginPage.login();
        await homePage.selectItem();

        await cartPage.viewCart();
        await cartPage.proceedToCheckout();
        await cartPage.fillOutInformation();
        await cartPage.submitOrder();
        await cartPage.returnToHomePage();

    }, 30000);

    afterEach(async () => {
        await deleteCookies(driver);
    });
});

afterAll(async () => {
    await quitDriver(driver);
});