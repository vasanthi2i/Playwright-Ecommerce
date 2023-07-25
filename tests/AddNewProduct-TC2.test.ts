import { expect, chromium, test } from "@playwright/test";

test("Verify adding a new product to cart from mega menu",async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]");
    await page.click("//span[contains(text(),'Login')]");
    await page.fill("//input[@name='email']", "vasanth.k0722@gmail.com");
    await page.fill("//input[@name='password']", "test@1234");
    await page.click("//input[@type='submit']");
    await expect(page).toHaveTitle("My Account");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(), 'Mega Menu')]");
    await page.click("//a[@title='Headphones']");
    await expect(page).toHaveTitle("Components");
    await page.waitForTimeout(5000);
    await page.hover("//a[@id='mz-product-grid-image-28-212408']");
    await page.click("//div[@class='product-action']//button[@class='btn btn-cart cart-28']");
    const productName = await page.locator("//a[@id='mz-product-grid-image-28-212408']/../../following-sibling::div//a[contains(text(),'HTC Touch HD')]").innerText();
    console.log("Product name is:",productName);
    const productPrice = await page.locator("//a[@id='mz-product-grid-image-28-212408']/../../following-sibling::div//div//span").innerText();
    console.log("Price of ",productName ,"is:",productPrice);
    await page.click("//div[@id='entry_217825']//div[@class='cart-icon']");
    await page.click("//div[@id='notification-box-top']//a[contains(text(),'View Cart ')]");
    await expect(page).toHaveTitle("Shopping Cart");
    await page.waitForTimeout(3000);

} )