import { type} from "os";
//import {Page} from 'playwright/test';
export default class RegisterPage{
   
   
   constructor(public page: Page){

   }
   async  enterFirstName(firstname: string) {

       await this.page.locator("#input-firstname")
        .type(firstname);
    }

    async  enterLasttName(firstname: string) {

        await this.page.locator("#input-lastname")
         .type(LastName);
     }

     async  enterEmail(firstname: string) {

        await this.page.locator("#input-email")
         .type(email);
     }


     async  enterTelephone(firstname: string) {

        await this.page.locator("#input-telephone")
         .type(telephone);
     }


     async  entermpassword(firstname: string) {

        await this.page.locator("#input-password")
         .type(password);
     }

     
     async  enterConfirmpassword(firstname: string) {

        await this.page.locator("#input-confirm")
         .type(confirm);
     }
}