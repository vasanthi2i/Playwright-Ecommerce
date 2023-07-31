import { chromium, expect, test } from "@playwright/test";

test("Verify user is able to login successfully with valid credentials", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']//span[contains(text(),' My account')]");
    await page.click("//span[contains(text(),'Login')]");
    await page.fill("//input[@name='email']", "vasanth.k0722@gmail.com");
    await page.fill("//input[@name='password']", "test@1234");
    await page.click("//input[@type='submit']");
    await expect(page).toHaveTitle("My Account1");
    //test.setTimeout(5000);
    await page.waitForTimeout(5000);
    context.close();
})

test("Verify user is able to login successfully with invalid credentials", async () => {
  
    const browser1 = await chromium.launch();
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    await page1.goto("https://ecommerce-playground.lambdatest.io/");
    await page1.hover("//a[@class='icon-left both nav-link dropdown-toggle']//span[contains(text(),' My account')]");
    await page1.click("//span[contains(text(),'Login')]");
    await page1.fill("//input[@name='email']", "vasanth.k0722@gmail.com");
    await page1.fill("//input[@name='password']", "test@12345");
    await page1.click("//input[@type='submit']");
    await expect(page1).toHaveTitle("Account Login");
    context1.close();
    

})