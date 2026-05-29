import { Page, Locator } from '@playwright/test';

export class CookieBanner {
  readonly banner: Locator;
  readonly acceptButton: Locator;
  readonly declineButton: Locator;
  readonly bannerText: Locator;

  constructor(page: Page) {
    this.banner = page.locator('.cookie-banner');
    this.acceptButton = page.locator('.cookie-banner .control-button.primary');
    this.declineButton = page.locator('.cookie-banner .control-button:not(.primary)');
    this.bannerText = page.locator('.cookie-banner__text');
  }

  async accept() {
    await this.acceptButton.click();
  }

  async decline() {
    await this.declineButton.click();
  }

  async isVisible() {
    return this.banner.isVisible();
  }
}
