import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly logo: Locator;
  readonly checkoutPage: Locator;
  readonly emailInput: Locator;
  readonly nameInput: Locator;
  readonly destinationSelect: Locator;
  readonly postalCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly customFieldInput: Locator;
  readonly parcelBoxSelect: Locator;
  readonly parcelBoxDropdown: Locator;
  readonly parcelBoxSearch: Locator;
  readonly parcelBoxOptions: Locator;
  readonly shippingOptions: Locator;
  readonly bankTransferPayment: Locator;
  readonly discountCodeInput: Locator;
  readonly discountApplyButton: Locator;
  readonly placeOrderButton: Locator;

  readonly summaryItems: Locator;
  readonly summaryProductQuantityBadge: Locator;
  readonly summaryProductImage: Locator;
  readonly subtotalValue: Locator;
  readonly shippingValue: Locator;
  readonly totalValue: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.getByTestId('logo-button');
    this.checkoutPage = page.locator('.checkout-page');
    this.emailInput = page.getByTestId('checkout-contactinformation-email-input').locator('input');
    this.nameInput = page.getByTestId('checkout-contactinformation-name').locator('input');
    this.destinationSelect = page.getByTestId('checkout-shippingdestination-select');
    this.postalCodeInput = page.getByTestId('checkout-contactinformation-postalcode').locator('input');
    this.phoneInput = page.getByTestId('checkout-contactinformation-phone').locator('input.vti__phone');
    this.customFieldInput = page.getByTestId('checkout-contactinformation-customfield').locator('input');
    this.parcelBoxSelect = page.getByTestId('checkout-shippingoptions-parcelselect');
    this.parcelBoxDropdown = page.locator('.h-popover .h-dropdown-list');
    this.parcelBoxSearch = this.parcelBoxDropdown.getByPlaceholder('Search parcel boxes');
    this.parcelBoxOptions = this.parcelBoxDropdown.locator('ul[role="listbox"] li[role="option"]');
    this.shippingOptions = page.locator('input[name="shipping-options"]');
    this.bankTransferPayment = page.getByTestId('checkout-paymentmethods-manual');
    this.discountCodeInput = page.getByTestId('checkout-cartsummary-input-discountcode').locator('input');
    this.discountApplyButton = page.getByTestId('checkout-cartsummary-button-discountapply');
    this.placeOrderButton = page.getByRole('button', { name: 'Place an order' });

    this.summaryItems = page.getByTestId('checkout-cartsummary-item');
    this.summaryProductQuantityBadge = page.getByTestId('checkout-cartsummary-product-quantity-badge');
    this.summaryProductImage = page.getByTestId('checkout-cartsummary-product-image');
    this.subtotalValue = page.getByTestId('checkout-cartsummary-subtotalprice-value');
    this.shippingValue = page.getByTestId('checkout-cartsummary-shippingprice-value');
    this.totalValue = page.getByTestId('checkout-cartsummary-totalprice-value');
  }

  async fillContactDetails(details: {
    email: string;
    name: string;
    postalCode?: string;
    phone?: string;
    customField?: string;
  }) {
    await this.emailInput.fill(details.email);
    await this.nameInput.fill(details.name);
    if (details.postalCode) {
      await this.postalCodeInput.fill(details.postalCode);
    }
    if (details.phone) {
      await this.phoneInput.fill(details.phone);
    }
    if (details.customField) {
      await this.customFieldInput.fill(details.customField);
    }
  }

  async selectShippingOption(value: string) {
    await this.page.locator(`input[name="shipping-options"][value="${value}"]`).check();
  }

  async openParcelBoxDropdown() {
    await this.parcelBoxSelect.locator('[role="combobox"]').click();
    await this.parcelBoxDropdown.waitFor({ state: 'visible' });
  }

  /**
   * Opens the parcel box combobox, optionally filters via its search field,
   * and selects the option whose `data-value` matches `parcelBox` exactly.
   */
  async selectParcelBox(parcelBox: string) {
    await this.openParcelBoxDropdown();
    await this.parcelBoxSearch.fill(parcelBox);
    await this.parcelBoxDropdown
      .locator(`li[role="option"][data-value="${parcelBox}"]`)
      .click();
    await this.parcelBoxDropdown.waitFor({ state: 'hidden' });
  }

  async applyDiscountCode(code: string) {
    await this.discountCodeInput.fill(code);
    await this.discountApplyButton.click();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async isVisible() {
    return this.checkoutPage.isVisible();
  }
}
