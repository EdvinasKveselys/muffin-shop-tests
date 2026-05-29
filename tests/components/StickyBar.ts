import { Page, Locator } from '@playwright/test';

export class StickyBar {
  readonly bar: Locator;
  readonly promoText: Locator;

  constructor(page: Page) {
    this.bar = page.getByTestId('block-sticky-bar');
    this.promoText = page.getByTestId('block-sticky-bar').getByText('MUFFIN');
  }

  async isVisible() {
    return this.bar.isVisible();
  }
}
