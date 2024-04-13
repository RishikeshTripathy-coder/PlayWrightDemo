
import {test, expect,Browser,Page,Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'
import { register } from 'module';

test('Opening',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();



    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');


    //opening the pagegjkgkjgkhjgk
})
test('Register',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();



    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    //await page.locator('css=button').click
    await page.locator('.btn btn-primary').click();
    await page.locator('id=input-firstname').fill("Sumit");
    await page.locator('id=input-lastname').fill("Yadav");
    await page.locator('.form-control').fill("xyz@gmail.com");
    await page.locator('id=input-telephone').fill("1234567890");
    await page.locator('id=input-password').fill("India@123");
    await page.locator('id=Password Confirm').fill("India@123");
    await page.locator('id=btn btn-primary').click();
    //hello

    
})

//sumit





