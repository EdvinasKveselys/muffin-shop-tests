import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly productList: Locator;
  readonly productItems: Locator;
  readonly productTitles: Locator;
  readonly productPrices: Locator;

  readonly orderSuccessModal: Locator;
  readonly orderSuccessTitle: Locator;
  readonly orderSuccessText: Locator;
  readonly orderSuccessGotItButton: Locator;
  readonly orderSuccessCloseButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productList = page.getByTestId('product-list');
    this.productItems = page.getByTestId('product-list-item');
    this.productTitles = page.getByTestId('product-list-section-item-title');
    this.productPrices = page.getByTestId('product-list-section-item-price');

    this.orderSuccessModal = page.getByTestId('ecommerce-modal-checkout-success-order');
    this.orderSuccessTitle = this.orderSuccessModal.locator('.payment-info__title');
    this.orderSuccessText = this.orderSuccessModal.locator('.payment-info__text');
    this.orderSuccessGotItButton = this.orderSuccessModal.getByRole('button', { name: 'Got it' });
    this.orderSuccessCloseButton = page.locator('.modal').locator('.modal__close-button');
  }

  async getProductCount() {
    return this.productItems.count();
  }

  async clickProduct(name: string) {
    await this.productTitles.filter({ hasText: name }).click();
  }

  async getFirstProductTitle() {
    return this.productTitles.first().textContent();
  }

  async isOrderSuccessVisible() {
    return this.orderSuccessModal.isVisible();
  }

  async confirmOrderSuccess() {
    await this.orderSuccessGotItButton.click();
  }

  async closeOrderSuccessModal() {
    await this.orderSuccessCloseButton.click();
  }
}
