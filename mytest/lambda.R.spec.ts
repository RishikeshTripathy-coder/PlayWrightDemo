import { chromium, test, expect } from "@playwright/test";

test("Register and Login on LambdaTest website", async ({ page }) => {
  // Open the LambdaTest website
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");

  // Click on the 'My Account' link and then on 'Register'
  await page.click('text="My Account"');
  await page.click('text="Register"');

  // Fill in the registration form
  await page.fill('[id="input-firstname"]', 'John');
  await page.fill('[id="input-lastname"]', 'Doe');
  await page.fill('[id="input-email"]', 'john.doe@example.com');
  await page.fill('[id="input-telephone"]', '1234567890');
  await page.fill('[id="input-password"]', 'password');
  await page.fill('[id="input-confirm"]', 'password');

  // Submit the registration form
  await page.click('button[type="submit"]');

  // Verify the warning message for not selecting privacy policy
  const warning = await page.textContent('.alert-danger');
  console.log("Warning Message:", warning);

  // Check the privacy policy checkbox and submit again
  await page.check('input[name="agree"]');
  await page.click('button[type="submit"]');

  // Verify the success message for registration
  const success = await page.textContent('.alert-success');
  console.log("Success Message:", success);

  // Click on 'Continue'
  await page.click('text="Continue"');

  // Click on 'Logout' if logged in (if not logged in, this step can be skipped)
  await page.click('text="Logout"', { timeout: 5000 });

  // Click on 'Login'
  await page.click('text="My Account"');
  await page.click('text="Login"');

  // Fill in the login form
  await page.fill('[id="input-email"]', 'john.doe@example.com');
  await page.fill('[id="input-password"]', 'password');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Verify successful login (you may need to add more checks here depending on the behavior of the website)
  const loggedInMessage = await page.textContent('text="My Account"');
  console.log("Logged in message:", loggedInMessage);

  // Optionally, you can perform more actions here like navigating to different pages or logging out again
});
