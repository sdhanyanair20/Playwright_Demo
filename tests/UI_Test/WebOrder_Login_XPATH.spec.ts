import { test, expect } from '@playwright/test';

test('Verify login functionality of WebOrders with xpath ', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.locator("//input[@type = 'text']").fill('Tester')
  await page.locator("//input[@type = 'password']").fill('test')
  await page.locator("//input[@type = 'submit']").click()
  await expect(page.locator("//h2[text()='List of All Orders']")).toBeVisible();
});