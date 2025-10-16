import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('banner')).toContainText('Admin');
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Jane A Smith');
  await page.getByRole('option', {name: 'Jane A Smith' }).click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Enabled' }).click();

  const d = new Date();
  let ms = d.getTime();
  const ExpUserName = 'Aarya' + ms;
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill(ExpUserName);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(10000)
  await expect(page.locator(`text=${ExpUserName}`)).toBeVisible(); 
  console.log(`Successfully created user: ${ExpUserName}`);

//   const newuser = await page.locator('//div[text() = "'+ExpUserName+'"]')
//   await expect(newuser).toContainText(ExpUserName)

//delete





});