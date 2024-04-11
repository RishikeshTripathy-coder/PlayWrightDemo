import { Page } from "playwright/test";
export default class Homepage{

    constructor(public page: Page){}

    async clickSmartWatchMenu(){
        await this.page.hover('text=Mega Menu', {strict:false});
        await this.page.hover('#entry281_216481 > div > div > ul > li:nth-child(1) > a', {strict:false});
        await this.page.click('#entry281_216481 > div > div > ul > li:nth-child(1) > a');
    }
}