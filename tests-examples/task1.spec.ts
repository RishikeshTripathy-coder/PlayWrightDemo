import {test, expect,Browser,Page,Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

test('Opening',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();



    await page.goto('https://bstackdemo.com');


    //opening the page
})
test('Header 1',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto('https://bstackdemo.com');


    await expect(page.locator('#offers')).toHaveText('Offers');

   
})
test('Header2',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto('https://bstackdemo.com');


   
    await expect(page.locator('#orders')).toHaveText('Orders');



})
test('Header 3',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto('https://bstackdemo.com');

//sumit 2
   
    await expect(page.locator('#favourites')).toHaveText('Favourites');
 

})
 test('Sign In',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto('https://bstackdemo.com');
    await page.locator('#signin').click();
    page.locator('#css-1wa3eu0-placeholder');




 

 })











