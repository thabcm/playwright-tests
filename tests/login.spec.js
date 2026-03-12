// @ts-check
import { test, expect } from '@playwright/test';

test('test login', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login');
  await page.getByTestId('email').fill('test@test.com');
  await page.getByTestId('senha').fill('123456');
  await page.getByTestId('entrar').click();

  await expect(page.getByRole('alert')).toBeVisible();
});

