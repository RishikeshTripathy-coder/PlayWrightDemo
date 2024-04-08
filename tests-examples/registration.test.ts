import { chromium, expect, test } from "@playwright/test"
test("Login test demo", async () => {
    const browser = await chromium.launch({
       
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    const singleCheckbox = await context.newPage();
    
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
    //await page.click("text=Login")

    await page.click("' Register'")


    await page.fill("input[name='firstname']", "mokshada3");//firstname
    await page.fill("input[name='lastname']", "mahajan3");//lastname
    await page.fill("input[name='email']", "mokshada3@gmail.com");//email
    await page.fill("input[name='telephone']", "0007654321");//telephone 

    const element = await page.locator("//input[@type='checkbox']");
    await element.scrollIntoViewIfNeeded();

    await page.fill("input[name='password']", "password@2");//pass
    await page.fill("input[name='confirm']", "password@2");//confirm pass
    


    await page.click("label[for='input-newsletter-yes']")//no radiobutton
    
   
    await page.click("//label[@for='input-agree']")

    await page.click("//input[@value='Continue']")//continue button
    //await page.waitForTimeout(50000);


})

