import { test, expect } from '@playwright/test';
import { Header } from './components/Header';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { CookieBanner } from './components/CookieBanner';
import { SiteDrawer } from './components/SiteDrawer';
import { CheckoutPage } from './pages/CheckoutPage';
import { HomePage } from './pages/HomePage';

test('Buy two items', async ({ page }) => {
  const header = new Header(page);
  const shopPage = new ShopPage(page);
  const productPage = new ProductPage(page);
  const cookieBanner = new CookieBanner(page);
  const sitedrawer = new SiteDrawer(page);
  const checkoutPage = new CheckoutPage(page);
  const homepage = new HomePage(page);

  await page.goto('/');
  await expect(page).toHaveTitle("Freshly Baked Muffins - Cozy Online Muffin Shop | Muffin");

  await cookieBanner.isVisible();
  await cookieBanner.accept();

  await header.navigateTo('shop');

  await expect(shopPage.productList).toBeVisible();
  await shopPage.clickProduct('Blueberry Burst Muffins');

  await expect(productPage.productTitle).toHaveText('Blueberry Burst Muffins');
  await productPage.quantityIncrease.click();
  await productPage.addToBag();

  await sitedrawer.isVisible();
  await expect(sitedrawer.subtotal).toHaveText('Subtotal: €7.00');
  await sitedrawer.checkout();
  await checkoutPage.isVisible();
  await checkoutPage.fillContactDetails({
    email: 'supertrueemail@gmail.com',
    name: 'Testas Testauskas',
    phone: '+37061234567',
    customField: 'Nope'
  });
  await checkoutPage.selectParcelBox('Akmenės NORFA Daukanto paštomatas, S. Daukanto g. 7');
  await checkoutPage.applyDiscountCode('muffin');
  await expect(checkoutPage.totalValue).toHaveText('€8.80');
  await checkoutPage.placeOrder();
  await homepage.isOrderSuccessVisible();
});
