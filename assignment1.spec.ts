import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {

      // Navigate to the website
    await page.goto('https://bstackdemo.com/');
    
    });
test.describe('Demo Test', () => {

            test('test examples', async ({ page , browser }) => {




    //Verify Headers
    const header1 = await page.locator('#offers').textContent();
    const header2 = await page.locator('#orders').textContent();
    const header3 = await page.locator('#favourites').textContent();

    if (header1 === "Offers") {
        console.log("First header is Offers")
    } else {
        console.log("Headers 1 did not matched")
    }

    if (header2 === "Orders") {
        console.log("First header is Orders")
    } else {
        console.log("Headers 2 did not matched")
    }

    if (header3 === "Favourites") {
        console.log("First header is Favourites")
    } else {
        console.log("Headers 3 did not matched")
    }

    // Click on Sign In
    await page.locator("#signin").click()

    // Print placeholder values in username and password fields
    const usernamePlaceholder = await page.locator('div#username div.css-1hwfws3').textContent();
    const passwordPlaceholder = await page.locator('div#password div.css-1hwfws3').textContent();
    console.log('Username Placeholder:', usernamePlaceholder);
    console.log('Password Placeholder:', passwordPlaceholder);

    // Enter Username and Password
    const usernameDropdown = await page.locator("svg.css-19bqh2r").first();
    await usernameDropdown.click();
    const usernameDropdownOption = await page.locator("div#react-select-2-option-0-2");
    await usernameDropdownOption.click();

    const passwordDropdown = await page.locator("svg.css-19bqh2r").last();
    await passwordDropdown.click();
    const passWordDropdownOption = await page.locator("div.css-1n7v3ny-option");
    await passWordDropdownOption.click();

    await page.locator("button#login-btn").click();


    const btnLogin = await page.locator("button#login-btn");
    await btnLogin.click(); 

    // Click on login 
    await page.click('#login-btn');

    // Verify username
   // const actualUserName = await page.locator('.username').textContent();
    //if (actualUserName === userName) {
       // console.log("Username verified!")
    //}

    // Click Logout
    await page.click('#logout');

    // Close the browser
    await browser.close();
  });


});



// Run the test
//runTest().catch(err => console.error(err));
