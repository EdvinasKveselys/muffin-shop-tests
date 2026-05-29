import { Page, Locator } from '@playwright/test';

export class SiteDrawer {
  readonly drawer: Locator;
  readonly closeButton: Locator;
  readonly productTitle: Locator;
  readonly quantityDecrease: Locator;
  readonly quantityIncrease: Locator;
  readonly quantity: Locator;
  readonly removeButton: Locator;
  readonly price: Locator;
  readonly subtotal: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.drawer = page.getByTestId('site-drawer');
    this.closeButton = page.getByTestId('builder-sitedrawer-btn-close');
    this.productTitle = page.getByTestId('shoppingcart-text-product');
    this.quantityDecrease = page.getByTestId('shoppingcart-btn-decrease');
    this.quantityIncrease = page.getByTestId('shoppingcart-btn-increaseq');
    this.quantity = page.getByTestId('shoppingcart-text-qty');
    this.removeButton = page.getByTestId('shoppingcart-btn-delete');
    this.price = page.getByTestId('shoppingcart-text-price');
    this.subtotal = page.getByTestId('shoppingcart-text-subtotal');
    this.checkoutButton = page.getByTestId('shoppingcart-btn-checkout');
  }

  async isVisible() {
    return this.drawer.isVisible();
  }

  async close() {
    await this.closeButton.click();
  }

  async increaseQuantity() {
    await this.quantityIncrease.click();
  }

  async decreaseQuantity() {
    await this.quantityDecrease.click();
  }

  async remove() {
    await this.removeButton.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
