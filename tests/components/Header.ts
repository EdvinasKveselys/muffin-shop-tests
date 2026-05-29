import { Page, Locator } from '@playwright/test';

export class Header {
  readonly logo: Locator;
  readonly navHome: Locator;
  readonly navHomeActive: Locator;
  readonly navShop: Locator;
  readonly navShopActive: Locator;
  readonly navMenu: Locator;
  readonly navMenuActive: Locator;
  readonly navAbout: Locator;
  readonly navAboutActive: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.logo = page.getByTestId('builder-siteheader-img-logo').first();
    this.navHome = page.getByTestId('navigationblock-page-home').first();
    this.navHomeActive = page.getByTestId('navigationblock-page-active-home').first();
    this.navShop = page.getByTestId('navigationblock-page-shop').first();
    this.navShopActive = page.getByTestId('navigationblock-page-active-shop').first();
    this.navMenu = page.getByTestId('navigationblock-page-menu').first();
    this.navMenuActive = page.getByTestId('navigationblock-page-active-menu').first();
    this.navAbout = page.getByTestId('navigationblock-page-about').first();
    this.navAboutActive = page.getByTestId('navigationblock-page-active-about').first();
    this.cartButton = page.getByTestId('header-btn-shoppingbag').first();
  }

  async clickLogo() {
    await this.logo.click();
  }

  async navigateTo(dest: 'home' | 'shop' | 'menu' | 'about') {
    const map = {
      home: this.navHome,
      shop: this.navShop,
      menu: this.navMenu,
      about: this.navAbout,
    };
    await map[dest].click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}
