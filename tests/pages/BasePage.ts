import { Page } from '@playwright/test';
import { Header } from '../components/Header';
import { CookieBanner } from '../components/CookieBanner';
import { StickyBar } from '../components/StickyBar';
import { CartDrawer } from '../components/CartDrawer';

export abstract class BasePage {
  readonly page: Page;
  readonly header: Header;
  readonly cookieBanner: CookieBanner;
  readonly stickyBar: StickyBar;
  readonly cartDrawer: CartDrawer;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.cookieBanner = new CookieBanner(page);
    this.stickyBar = new StickyBar(page);
    this.cartDrawer = new CartDrawer(page);
  }

  async acceptCookiesIfVisible() {
    if (await this.cookieBanner.isVisible()) {
      await this.cookieBanner.accept();
    }
  }
}
