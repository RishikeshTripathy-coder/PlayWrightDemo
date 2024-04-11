import { expect, test } from "@playwright/test";
import RegisterPage from "../main/RegisterPage";
import LoginPage from "../main/LoginPage";
import Homepage from "../main/Homepage";
import Productpage from "../main/Productpage";

const email="souya123@gmail.com";
const password = "Sk@123";

test("Register Test_01", async({page, baseURL}) =>{
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Sourya");
    await register.enterLastName("Singh");
    await register.enterRegisterEmail(email);
    await register.enterTelephone("1234567890");
    await register.enterRegisterPassword(password);
    await register.enterConfirmRegisterPassword(password);
    //expect(register.isSubscribedChecked()).;
    await register.clickTermandCondition();
    await register.clickContinueBtn();
})

