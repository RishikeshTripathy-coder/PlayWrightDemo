import {test, Browser, Page, expect, Locator} from '@playwright/test'
import { chromium, webkit, firefox } from '@playwright/test'

test('Unsuccesslogin test', async()=>{
    const browser:Browser = await webkit.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    
    const emailId:Locator = page.locator('#input-email');
    const passwrd:Locator = page.locator('#input-password');
    const loginbtn:Locator = page.locator("[value='Login']");

    await emailId.fill("cusat.sk7@gmail.com");
    await passwrd.fill("sourya@1996");
    await loginbtn.click();

    const error:Locator = page.locator('text=Warning: No match for E-Mail Address and/or Password.');
    const errorExist = await error.isEnabled();
    //console.log(errorExist);

    expect(errorExist).toBe(true);
    
    await page.waitForTimeout(3000);
    await browser.close();
    //await new Promise(() => {});  //prevents script from exiting
});