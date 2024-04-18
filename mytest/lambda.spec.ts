//import puppeteer from 'puppeteer';
import { Browser, BrowserContext, webkit, firefox, expect, Page} from "playwright/test";
import{chromium, test} from "playwright/test";

test ('Open lambda website', async () => {

    const browser = await chromium.launch({
        headless: false
     });
    
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
//await page.waitForTimeout(5000);


//My Account dropdown 

//await Promise.all([
  //this.page.waitForNavigation{waitUntil".networkidle}
//])
await page.hover('text=My Account');  
await page.click('a[href*="account/login"]');
//await page.click('text="My Account"', { timeout: 10000 });
//await page.waitForSelector('text="My Account"');

//await page.click('text=My Account');
await page.click('text=Register');


//Register
//await page.click('a[href*="account/register"]');
await page.fill('[id ="input-firstname"]', 'sal');
await page.fill('[id = "input-lastname"]', 'kum');
await page.fill('[id = "input-email"]', 'kumsal@abc.com');
await page.fill('[id = "input-telephone"]', '9100000000');
await page.fill('[id = "input-password"]','abcd');
await page.fill('[id = "input-confirm"]','abcd');
await page.click('button[type="submit"]')
await page.waitForTimeout(5000);

//Alert
//const Warning = await page.innerText('//div[@class='alert alert-danger alert-dismissible']');
const warning = await page.innerText('.alert-danger');
console.log('Warning Message:', warning);
await page.waitForTimeout(5000);


await page.check('input[name="agree"]');
await page.click('button[type="submit"]');
await page.waitForTimeout(5000);

//verifying success message

//const headerValues = await Promise.all([
 // page.click('input[type="submit"][value="Continue"]')
  //  page.textContent('Your Account Has Been Created!')
   // const expectedValues = ["Your Account Has Been Created!"];
   //await expect(locator).toHaveClass('page-title my-3')
   const success =await page.waitForSelector('.alert-successs');
   console.log(await success.textContent());

   await page.click('text="Continue');
   await page.waitForTimeout(5000);


//logout
//await page.click(i[@class='fas fa-user-edit fa-fw mr-1']);
await page.click('button[type="Logout"]');

await page.click('a[href*="account/login"]');
await page.click('button[type="Logout"]');
await page.waitForTimeout(5000);


//Login
await page.fill('[id ="input-email"]', 'kumsal@abc.com');
await page.fill('[id ="input-password"]', 'abcd');
await page.waitForTimeout(5000);


//Logout
await page.click('button[type="submit"]');

await browser.close();


  //]);


});