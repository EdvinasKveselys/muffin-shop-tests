import { Page, Locator } from '@playwright/test';

export class CartDrawer {
  readonly drawer: Locator;
  readonly emptyMessage: Locator;

  constructor(page: Page) {
    this.drawer = page.getByTestId('header-btn-shoppingbag');
    this.emptyMessage = page.locator('text=Shopping bag is empty');
  }

  async isVisible() {
    return this.drawer.isVisible();
  }
}
