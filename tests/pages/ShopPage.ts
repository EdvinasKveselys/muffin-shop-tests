import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShopPage extends BasePage {
  readonly productList: Locator;
  readonly productItems: Locator;
  readonly productTitles: Locator;
  readonly productPrices: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.productList = page.locator('.product-list');
    this.productItems = page.locator('[data-qa="product-list-item"]');
    this.productTitles = page.locator('[data-qa="product-list-section-item-title"]');
    this.productPrices = page.locator('[data-qa="product-list-section-item-price"]');
    this.sortDropdown = page.locator('[data-qa="product-sort-dropdown"] select');
  }

  async clickProduct(name: string) {
    await this.productTitles.filter({ hasText: name }).click();
  }
}
