import { Page } from "playwright/test";
export default class Productpage{

    constructor(public page:Page){}
    
    async addproducttoCart(){
        await this.page.hover("xpath=//div[@class='image']/a", {
            strict:false});
        await this.page.locator("(//button[@title='Add to Cart'])")
            .nth(0).click();
    }

    async isToastVisible(){
        const toast = this.page.locator("//a[.='View cart ']");
        await toast.waitFor({state: "visible"})
        return toast;
    }
}