import { chromium, test } from "@playwright/test"
test("dialogbox demo", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");


    
    page.on("dialog", async (alert) => {
        await page.waitForTimeout(2000);
        await alert.accept();
    })
    // page.on("dialog", async (alert) => {
    //     const text = alert.defaultValue();
    //     console.log(text);
    //     await page.waitForTimeout(2000);
    //     await alert.accept();
    // })

    await page.locator("button[type='button']").nth(2).click();
    browser.close();
})