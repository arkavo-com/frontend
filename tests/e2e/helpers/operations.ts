import { Page } from '@playwright/test'
import { selectors } from "./selectors";

export const authorize = async (page: Page) => {
  await page.goto('/');

  await Promise.all([
    page.waitForNavigation(),
    page.locator(selectors.loginButton).click()
  ]);

  await page.fill(selectors.loginScreen.usernameField, "user1");
  await page.fill(selectors.loginScreen.passwordField, "testuser123");
  await page.click(selectors.loginScreen.submitButton);

  await page.waitForSelector(selectors.logoutButton);
  // click the token message to close it and overcome potential overlapping problem
  await page.locator(selectors.tokenMessage).click()
};

export const createAuthority = async (page: Page, authority: any) => {
  await page.locator(selectors.attributesPage.newSectionBtn).click();
  await page.fill(selectors.attributesPage.newSection.authorityField, authority);
  await page.locator(selectors.attributesPage.newSection.submitAuthorityBtn).click();
};

export const firstTableRowClick = async (table: string, page: Page) => {
  const firstRow = await page.locator(`[data-test-id=${table}] .ant-table-tbody>tr:first-child`);
  return await firstRow.click();
};

export const getLastPartOfUrl = async (page: Page) => {
  const url = page.url();
  return url.substring(url.lastIndexOf('/') + 1);
};

export const getAccessToken = async (page: Page) => {
  return await page.evaluate(() => {
    return sessionStorage.getItem("keycloak");
  });
};
