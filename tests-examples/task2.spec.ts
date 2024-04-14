
import {test, expect,Browser,Page,Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'
import { register } from 'module';

test('Opening',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
})

test('Register without agree',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await page.locator('//div[@id="entry_217834"]//span[@class="title" and contains(text(),"My account")]').click();
    await page.locator('//a[@class="btn btn-primary"]').click();
    await page.locator('//input[@id="input-firstname"]').fill("Sumit");
    await page.locator('id=input-lastname').fill("Yadav");
    const a = Math.random()*(10-1)+1;
    await page.locator('//input[@id="input-email"]').fill(a+"xyz@gmail.com");
    await page.locator('id=input-telephone').fill("1234567890");
    await page.locator('id=input-password').fill("India@123");
    await page.locator('//input[@id="input-confirm"]').fill("India@123");
    // await page.locator('//label[@class="custom-control-label" and @for="input-agree"]').click();
    await page.locator('//input[@class="btn btn-primary"]').click();
    await page.locator('//div[@class="alert alert-danger alert-dismissible"]').isEnabled()==true;
    
    

    
})



test('Register',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await page.locator('//div[@id="entry_217834"]//span[@class="title" and contains(text(),"My account")]').click();
    await page.locator('//a[@class="btn btn-primary"]').click();
    await page.locator('//input[@id="input-firstname"]').fill("Sumit");
    await page.locator('id=input-lastname').fill("Yadav");
    const a = Math.random()*(10-1)+1;
    await page.locator('//input[@id="input-email"]').fill(a+"xyz@gmail.com");
    await page.locator('id=input-telephone').fill("1234567890");
    await page.locator('id=input-password').fill("India@123");
    await page.locator('//input[@id="input-confirm"]').fill("India@123");
    await page.locator('//label[@class="custom-control-label" and @for="input-agree"]').click();
    await page.locator('//input[@class="btn btn-primary"]').click();
    await expect(page).toHaveTitle(/Your Account Has Been Created!/);

    
    
    
    

})

test('Login',async()=>{
    const br:Browser=await firefox.launch({headless:false});
    const page:Page = await br.newPage();
    await page.goto(' https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await page.locator('//div[@id="entry_217834"]//span[@class="title" and contains(text(),"My account")]').click();
    await page.locator('//input[@placeholder="E-Mail Address"]').fill("sdcsds@gmail.com");
    await page.locator('//input[@placeholder="Password"]').fill("India@123");
    await page.locator('//input[@class="btn btn-primary" and @type = "submit"]').click();
    await expect(page).toHaveTitle(/My Account/);

})






