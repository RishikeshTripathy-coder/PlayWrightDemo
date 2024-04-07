const { test, expect } = require('@playwright/test');

const FirName = "Rohit";
const LtName = "Sharma";
const TelePhone = "75460416060";
const Pass = "Rohit@45";
const email = "sharma.rohit.3@gmail.com";

test.beforeEach(async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
});

test('Lambdatest Assignment', async ({ page }) => {
  const MyAccount = await page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
  await MyAccount.hover();
  await page.locator("a.dropdown-item div.info span.title").nth(4).click();
  // Assertion on header
  const RegAcc = await page.locator("h3 : has-text('Register Account')");
  expect(RegAcc).toBeTruthy();

  const firstName = await page.locator("//input[@name='firstname']");
  const lastName = await page.locator("//input[@name='lastname']");
  const RegEmail = await page.getByPlaceholder("E-Mail");
  const Phone = await page.getByPlaceholder("Telephone");
  const RegPassword = await page.locator("[name = 'password']");
  const CnfPassword = await page.locator("[name = 'confirm']");
  const Privacypolicy = await page.locator("//div[@class='custom-control custom-checkbox custom-control-inline']");
  const Submit = await page.locator("input[value='Continue']");

  const LoginEmail = await page.getByPlaceholder("E-Mail Address");
  const LoginPass = await page.locator("input#input-password");

  // Entering values in fields
  await firstName.fill(FirName);
  await lastName.fill(LtName);
  await RegEmail.fill(email);
  await Phone.fill(TelePhone);
  await RegPassword.fill(Pass);
  await CnfPassword.fill(Pass);
  await Submit.click();

  // Assertion on Warning
  const Warning = await page.locator("div.alert-danger");
  await Warning.isVisible();
  await expect(Warning).toContainText(" Warning: You must agree to the Privacy Policy!");


  await Privacypolicy.click();
  await Submit.click();
  
  const Success = await page.locator("h1.page-title").first();
  // await Success.isVisible();
  await expect(Success).toContainText(" Your Account Has Been Created!");

  const continueBtn = await page.locator("div.buttons");
  await continueBtn.click();

  const Header = await page.locator("p[class='m-0 font-size-sm'] strong");
  await expect(Header).toBeVisible();
  // await page.pause();
  const MyAccdropDown = await page.locator("a[class='icon-left both nav-link dropdown-toggle active'] span[class='title']");
  await MyAccdropDown.hover();

  const logOut = await page.locator("//span[normalize-space()='Logout']");
  await logOut.click();
  
  const logOutmsg = await page.locator("h1.page-title.my-3");
  await expect(logOutmsg).toContainText(" Account Logout");
  await continueBtn.click();

  await MyAccount.hover();
  const LogInbtn = await page.locator("a[href*='https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
  await LogInbtn.click();
  
  await LoginEmail.fill(email);
  await LoginPass.fill(pass);

  await page.locator("input[value='Login']").click();
  await MyAccdropDown.isVisible();
  await expect(Header).toBeVisible();
});
// test.afterEach(async ({ page }) => {

//   await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
// });

