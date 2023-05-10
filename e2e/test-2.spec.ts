import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
  await page.getByText('Learn how to create visually appealing and user-friendly websites that adapt to ').click();
  await page.getByRole('article').filter({ hasText: 'Responsive Web DesignLearn how to create visually appealing and user-friendly we' }).getByRole('link', { name: 'Read blog' }).click();
  
});