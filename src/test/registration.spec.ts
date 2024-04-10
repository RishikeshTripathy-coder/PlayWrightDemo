import { expect, test } from "@playwright/test";
import RegisterPage from "../main/registrationPage"

const email = "kkc@gmail.com";
const password = "kkcc123";
test.describe("Page object test demo", async () => {

   
    test("Register test_01", async ({ page, baseURL }) => {
       

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Koushikkk");
        await register.enterLastName("Chatterjeeee")
        await register.enterEmail(email);
        await register.enterTelephone("1234567889")
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        

    })
})