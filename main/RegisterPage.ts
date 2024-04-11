import { subscribe } from "diagnostics_channel";
import { Page } from "playwright/test";
export default class RegisterPage {

    constructor(public page: Page){}

    async enterFirstName(firstname: string){
        await this.page.locator('#input-firstname').type(firstname);
    }

    async enterLastName(lastname: string){
        await this.page.locator('#input-lastname').type(lastname);
    }

    async enterRegisterEmail(email: string){
        await this.page.locator('#input-email').type(email);
    }

    async enterTelephone(phone: string){
        await this.page.locator('#input-telephone').type(phone);
    }

    async enterRegisterPassword(password: string){
        await this.page.locator('#input-password').type(password);
    }
    
    async enterConfirmRegisterPassword(password: string){
        await this.page.locator('#input-confirm').type(password);
    }

    // async isSubscribedChecked(){
    //     return await this.page.locator("#input-newsletter-no");
    // }

    async clickTermandCondition(){
        await this.page.click("//label[@for='input-agree']");
    }

    async clickContinueBtn(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            await this.page.click("input[value='Continue']")
        ])
        
    }
    
}    