import { chromium, test } from "@playwright/test"
test("converter" ,async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
 
    await page.goto("https://www.unitconverters.net/time/milliseconds-to-seconds.htm");
    const mili = page.locator("//input[@name='ucfrom']");
    const res = page.locator("//input[@name='ucto']");
    const btn = page.locator("//input[@value='Convert']")


    await mili.fill("3000");
    await btn.click();

    console.log(await res.textContent());
})