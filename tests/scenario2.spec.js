const { test, expect } = require('@playwright/test');
const { goToHomePage, selectCategory, verifySearchCondition } = require('./helpers/actions');

test.describe('Mercari Scenario 2: Search History Conditions', () => {
  test.beforeEach(async ({ page }) => {
    await goToHomePage(page);
  });

  test('should verify search conditions from browsing history', async ({ page }) => {
    // Create browsing history
    await selectCategory(page);
    await page.goBack(); // Go back to create another browsing history

    // Verify browsing history count
    const historyItems = await page.locator('.browsing-history-item');
    expect(await historyItems.count()).toBe(2);

    // Verify the latest browsing history is correct
    const latestHistory = await page.locator('.browsing-history-item .history-text').innerText();
    expect(latestHistory).toContain('コンピュータ/IT');

    // Input a search query and create a new browsing history
    await page.fill('input[placeholder="なにをお探しですか？"]', 'javascript');
    await page.press('input[placeholder="なにをお探しですか？"]', 'Enter');

    // Go back and verify there are 3 browsing histories
    await goToHomePage(page);
    expect(await historyItems.count()).toBe(3);

    // Verify the latest browsing history
    const latestHistoryText = await page.locator('.browsing-history-item:nth-child(1) .history-text').innerText();
    expect(latestHistoryText).toContain('javascript, コンピュータ/IT');
  });
});
