import { By, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

export default class BasePage{
    protected driver: WebDriver;
    protected dataFilePath = path.resolve(__dirname, "../data/data.json");
    protected testData = JSON.parse(readFileSync(this.dataFilePath, "utf8"));

    constructor(driver: WebDriver) {
        this.driver = driver;
    }
}