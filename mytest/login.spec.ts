//import { describe } from "node:test"
import { Browser, BrowserContext, Page, test, expect, chromium, webkit, firefox } from "playwright/test";
//describe('launch browser', () => {
    
test('open Stack Demo', async () => {

   
    const browser = await chromium.launch({
           headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://bstackdemo.com/");


       // Header elements
    const headerValues = await Promise.all([
    page.textContent('text=Offers'),
    page.textContent('text=Orders'),
    page.textContent('text=Favourites')
  ]);

    //  Header values
    const expectedHeaderValues = ["Offers", "Orders", "Favourites"];
    const missingValue = expectedHeaderValues.some(value => !headerValues.includes(value));
    console.assert(!missingValue, 'Not all header values are present.');

    //SIGNIN

    await page.locator("a#signin").click();
       //await page.click("id = signin");
      //await page.click('text=Sign In');
      //await page.click('button[data-test="signin"]');
       //await page.fill('input[id = "username"], 'demouser');
     await page.fill('input[name="loginusername"]', 'demouser');
     await page.fill('input[name="loginpassword"]', 'testingisfun99');
     await page.click('login-btn');
     console.log(page.fill);
  
     
  await browser.close();

  
    })
//})
