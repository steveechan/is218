import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('navigation').getByRole('link', { name: 'Agile & Lean principles' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Agile & Lean principles' }).click();
  await page.getByRole('heading', { name: 'Agile and Lean Principles in Education' }).click();
  await page.getByRole('heading', { name: 'Agile Methodology' }).click();
  await page.locator('[id="__next"] div').filter({ hasText: 'Value: Define what is valuable in education, such as student learning outcomes, ' }).nth(3).click();
  await page.getByText('Perfection: Continuously improve the education process by identifying areas of w').click();
});