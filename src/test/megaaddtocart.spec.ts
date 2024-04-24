import { expect, test } from "@playwright/test";
import megamenuaddtocartPage from "../main/megaaddtocartPage";
import * as testData from "../main/testData/testData.json";


test.describe("Page object test demo", async () => {


    test("buy product1", async ({ page, baseURL }) => {


        const megamenu = new megamenuaddtocartPage(page);
        await page.goto(`${baseURL}route=product/manufacturer/info&manufacturer_id=8`);
      
        await megamenu.clickFirstProduct();
        await megamenu.clickAddToCart();
        await megamenu.clickViewCart();
        await megamenu.clickCheckout();
        await megamenu.loginRadiobutton();
        await megamenu.enterEmail(testData.Email);
        await megamenu.enterPassword(testData.Password);
        await megamenu.clickLoginButton();
        await page.waitForTimeout(3000);
        await megamenu.firstname(testData.firstname);
        await megamenu.lastname(testData.lastname);
        await megamenu.address1(testData.address1);
        await megamenu.city(testData.city);
        await megamenu.postcode(testData.postcode);
        await megamenu.country();
        await megamenu.region();
        await megamenu.checkbox();
        await megamenu.continueButton();
        
        await megamenu.confirmOrder();
        await megamenu.verifyProductNameDisplayed(" Your order has been placed!");

        


    })
})