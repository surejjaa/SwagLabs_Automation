import { createDriver, deleteCookies, quitDriver } from "../core/config/driver-setup";
import { LoginPageSteps } from "../core/steps/login-page-steps";
import { HomePageSteps } from "../core/steps/home-page-steps";
import { CartPageSteps } from "../core/steps/cart-page-steps";
import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver, loginPage, homePage, cartPage; 

beforeAll(async () => {
    driver = await createDriver(testData.url.login_page);
    loginPage = new LoginPageSteps(driver);
    homePage = new HomePageSteps(driver);
    cartPage = new CartPageSteps(driver);
}, 10000);

describe("Checkout process", () => {
    test("Login and purchase product", async () => {

        await loginPage.login();
        await homePage.selectItem();
        await homePage.compareText();

        await cartPage.viewCart();
        await cartPage.compareText();
        await cartPage.proceedToCheckout();
        await cartPage.fillOutInformation();
        await cartPage.proceedWithOrder();
        await cartPage.submitOrder();
        await cartPage.returnToHomePage();

    }, 25000);

    afterEach(async () => {
        await deleteCookies(driver);
    });
});

afterAll(async () => {
    await quitDriver(driver);
});