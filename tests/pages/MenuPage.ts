import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MenuPage extends BasePage {
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByTestId('gridtextbox:z5f2az');
  }

}
