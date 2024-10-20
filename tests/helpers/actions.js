// mercari-actions.js
async function goToHomePage(page) {
  await page.goto('https://jp.mercari.com/', { waitUntil: 'networkidle' });
}

async function selectCategory(page) {
  // Click on the search bar and select categories
  await page.waitForSelector('input[placeholder="なにをお探しですか？"]', { state: 'visible' });
  await page.click('input[placeholder="なにをお探しですか？"]');
  await page.click('text=カテゴリーからさがす');
  await page.click('text=本・音楽・ゲーム');
  await page.click('text=本');
  await page.click('text=コンピュータ/IT');
}

async function verifySearchCondition(page, expectedText) {
  await page.waitForSelector('selector-for-left-sidebar');
  const searchConditions = await page.locator('selector-for-left-sidebar').innerText();
  return searchConditions.includes(expectedText);
}

module.exports = { goToHomePage, selectCategory, verifySearchCondition };
