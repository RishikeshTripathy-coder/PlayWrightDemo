import {test, Browser, Page, expect, Locator} from '@playwright/test'
import { chromium, webkit, firefox } from '@playwright/test'

test('registration test', async()=>{
    const browser:Browser = await firefox.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    
    const fName:Locator = page.locator('#input-firstname');
    const lName:Locator = page.locator('#input-lastname');
    const emailId:Locator = page.locator('#input-email');
    const phone:Locator = page.locator('#input-telephone');
    const passwrd:Locator = page.locator('#input-password');
    const cpasswrd:Locator = page.locator('#input-confirm');
    const agree:Locator = page.locator("//label[@for='input-agree']");
    const regbtn:Locator = page.locator("[value='Continue']");


    await fName.fill("Surya");
    await lName.fill("Raja");
    await emailId.fill("cusats7@gmail.com");
    await phone.fill("7850416504");
    await passwrd.fill("souryaa.1894");
    await cpasswrd.fill("souryaa.1894");
    await agree.click();
    await regbtn.click();

    const msg:Locator = page.locator('text= Your Account Has Been Created!');
    const msgExist = await msg.isEnabled();

    expect(msgExist).toBe(true);

    await page.waitForTimeout(3000);

    //await new Promise(() => {});  //prevents script from exiting

    await browser.close();
});