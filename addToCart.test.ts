import { expect, test } from "@playwright/test";
import RegisterPage from "../mytests/pages/registerPage"
import LoginPage from "../mytests/pages/loginPage"
import HomePage from "../mytests/pages/homePage"
import SpecialHotPage from "../mytests/pages/specialHotPage"

const email = "123@123.com";
const password = "123@123";
test ("Register test_01", async ({page, baseURL})=> {
    const register = new RegisterPage(page);
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await register.enterFirstName("Abhi");
    await register.enterLastName("Sir")
    await register.enterEmail("123@123.com");
    await register.enterTelephone("1234567890")
    await register.enterPassword("123@123");
    await register.enterConfirmPassword("123@123");
    expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermandConditon();
    await register.clickContinueToRegister();   

    test("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

})