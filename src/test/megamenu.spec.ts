import { expect, test } from "@playwright/test";
import megamenPage from "../main/megamenuPage"

const email = "rishi@gmail.com";
const password = "rishi";
const firstname = "rishi";
const lastname = "rishi";
const address1 = "qwertyuiop";
const city = "pune";
const postcode = "411057";


test.describe("Page object test demo", async () => {


    test("buy product1", async ({ page, baseURL }) => {


        const megamenu = new megamenPage(page);
        await page.goto(`${baseURL}route=product/manufacturer/info&manufacturer_id=8`);
        await megamenu.clickFirstProduct();
        await megamenu.clickBuyNow();
        await megamenu.loginRadiobutton();
        await megamenu.enterEmail(email);
        await megamenu.enterPassword(password);
        await megamenu.clickLoginButton();
        await page.waitForTimeout(3000);
        await megamenu.firstname(firstname);
        await megamenu.lastname(lastname);
        await megamenu.address1(address1);
        await megamenu.city(city);
        await megamenu.postcode(postcode);
        await megamenu.country();
        await megamenu.region();
        await megamenu.checkbox();
        await megamenu.continueButton();
        
        await megamenu.confirmOrder();
        await megamenu.verifyProductNameDisplayed(" Your order has been placed!");

        // await register.enterLastName("Chatterjeeee")
        // await register.enterEmail(email);
        // await register.enterTelephone("1234567889")
        // await register.enterPassword(password);
        // await register.enterConfirmPassword(password);
        // expect(register.isSubscribeChecked()).toBeChecked();
        // await register.clickTermandConditon();
        // await register.clickContinueToRegister();


    })
})