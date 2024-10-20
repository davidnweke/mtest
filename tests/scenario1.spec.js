const { test, expect } = require('@playwright/test');
const { goToHomePage, selectCategory, verifySearchCondition } = require('./helpers/actions');

test.describe('Mercari Scenario 1: Search Conditions', () => {
  test.beforeEach(async ({ page }) => {
    await goToHomePage(page);
  });

  test('should verify search conditions are set correctly', async ({ page }) => {
    await selectCategory(page);

    // Verify the search conditions on the sidebar
    const isCorrect = await verifySearchCondition(page, 'コンピュータ/IT');
    expect(isCorrect).toBe(true);
  });
});
