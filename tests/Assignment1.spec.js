const { test, expect } = require('@playwright/test');
const { use } = require('../playwright.config');

test('Playwright assignment', async ({ page }) => {
    //  Navigating to the webpage
    await page.goto("https://bstackdemo.com/")

    // Visibility of  'Offers' ,'Orders' & 'Favourites'
    await expect(page.locator("nav.space-x-4")).toBeVisible();
    const Header1 = await page.locator("a#offers").textContent();
    console.log(Header1);
    await expect(page.locator("a#offers")).toContainText("Offers");

    const Header2 = await expect(page.locator("a#orders")).toContainText("Orders");
    expect(Header2).toBeTruthy();

    await expect(page.locator("a#favourites")).toContainText("Favourites");
    //   Signin action
    await page.locator("a#signin").click();
    // Print placeholder value in Username & Password
    await expect(page.locator(".flex.justify-center.pb-12")).toBeVisible();
    const username = await page.locator("div#username div.css-1hwfws3").textContent();
    console.log(username);
    const passWord = await page.locator("div#password div.css-1hwfws3").textContent();
    console.log(passWord);
    // Enter Username & Password
    const usernameDropdown = await page.locator("svg.css-19bqh2r").first();
    await usernameDropdown.click();
    const usernameDropdownOption = await page.locator("div#react-select-2-option-0-2");
    await usernameDropdownOption.click();

    const passwordDropdown = await page.locator("svg.css-19bqh2r").last();
    await passwordDropdown.click();
    const passWordDropdownOption = await page.locator("div.css-1n7v3ny-option");
    await passWordDropdownOption.click();

    await page.locator("button#login-btn").click();


    const Validate = await expect(page.locator("span.username")).toBeVisible();
    expect(Validate).toBeTruthy;
    await page.locator("a#logout").click();

});
