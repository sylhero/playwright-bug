// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://upg.plusgrade.com/");

  // Expect a title "to contain" a substring.
  const terms = await page.getByTestId("live-auction.footer.terms-and-conditions");
  await expect(terms).toBeVisible();
});
