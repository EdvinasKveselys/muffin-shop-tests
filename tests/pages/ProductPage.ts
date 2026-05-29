import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { SiteDrawer } from '../components/SiteDrawer';

export class ProductPage extends BasePage {
  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly quantityDecrease: Locator;
  readonly quantityIncrease: Locator;
  readonly quantity: Locator;
  readonly addToBagButton: Locator;
  readonly siteDrawer: SiteDrawer;

  constructor(page: Page) {
    super(page);
    this.productTitle = page.getByTestId('builder-product-section-title');
    this.productPrice = page.locator('.block-product__price');
    this.quantityDecrease = page.getByTestId('productpage-btn-decrease');
    this.quantityIncrease = page.getByTestId('productpage-btn-increaseq');
    this.quantity = page.getByTestId('productpage-text-qty');
    this.addToBagButton = page.getByTestId('productsection-btn-addtobag');
    this.siteDrawer = new SiteDrawer(page);
  }

  async addToBag() {
    await this.addToBagButton.click();
  }
}
