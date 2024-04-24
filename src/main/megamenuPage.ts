import { Page, expect } from "@playwright/test";
export default class megamenuPage {
    private searchStatusTextLocator ="#content > h1 > i";

    constructor(public page: Page) { }


    async clickFirstProduct() {
        await this.page.click(`(//*[@class="product-thumb"])[1]`)
    }
    // async enterFirstName(firstname: string) {
    //     await this.page.locator("input[name='firstname']")
    //         .type(firstname);
    // }
    async clickBuyNow() {
        await this.page.click("button[title='Buy now']")

    }
    async loginRadiobutton() {
        await this.page.click("label[for='input-account-login']")

    }

    async enterEmail(email: string) {
        await this.page.locator("input[name='login_email']").type(email)

    }

    async enterPassword(password: string) {
        await this.page.locator("input[id='input-login-password']")
            .type(password);
    }

    async clickLoginButton() {
        await this.page.click("button[id='button-login']")

    }

    async firstname(firstname: string) {
        await this.page.locator("input[name='firstname']").type(firstname);

    }

    async lastname(lastname: string) {
        await this.page.locator("input[name='lastname']").type(lastname);

    }

    async address1(address1: string) {
        await this.page.locator("input[name='address_1']").type(address1);

    }

    async city(city: string) {
        await this.page.locator("input[name='city']").type(city);

    }

    async postcode(postcode: string) {
        await this.page.locator("input[name='postcode']").type(postcode);

    }

    async country() {
        await this.page.locator("#input-payment-country").selectOption({ label: "India" });

    }



    async region() {
        await this.page.locator("#input-payment-zone").selectOption({ label: "Maharashtra" });

    }

    async checkbox() {
        // await scrollTo()
        // await this.page.check("(//div[@class='custom-control custom-checkbox'])[4]")

        const element = await this.page.locator("//label[@for='input-agree']");
        //await element.scrollIntoViewIfNeeded();
        await element.click();
       

        //await element.scrollIntoViewIfNeeded();
       // await this.page.waitForTimeout(5000);

    }

    async continueButton() {
    
        
        await this.page.waitForLoadState('networkidle');

        const cntbtn=await this.page.locator("(//button[@type ='submit'])[3]");
     // waits for 2 seconds // <-  until there are no network connections for at least 500 ms.await page.getByRole('link', { name: 'Log in' }).waitFor();  // <- wait for elementawait page.getByRole('link', { name: 'Log in' }).click();
        //
 
        // scrollBy(0,250)
        
        await cntbtn.click();
        await expect(this.page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/confirm');
        //await this.page.waitForTimeout(5000);
    
    //await this.page.click("#button-save");


    // await Promise.all([
    //     this.page.waitForNavigation({waitUntil:"networkidle"}),

    // ])

    }

    async confirmOrder() {
        await this.page.locator("button[id='button-confirm']").click();
        // const textToPrint = 'confirm button clicked';
        // console.log(textToPrint);
    }


    public async verifyProductNameDisplayed(productName:string){
        const element = await this.page.locator(this.searchStatusTextLocator);
        await expect(element).toContainText(productName);
 
    }


    // async clickContinueToRegister() { 
    //     await Promise.all([
    //         this.page.waitForNavigation({waitUntil:"networkidle"}),
    //         this.page.click("input[value='Continue']")
    //     ])
    // }

}