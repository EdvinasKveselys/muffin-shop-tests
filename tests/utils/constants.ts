export const BASE_URL = 'https://lightgrey-antelope-m7vwozwl8xf7l3y2.builder-preview.com';

export const ROUTES = {
  home: '/',
  shop: '/shop',
  menu: '/menu',
  about: '/about',
} as const;

export const PRODUCTS = {
  blueberryBurst: { name: 'Blueberry Burst Muffins' },
  cookiesCream: { name: 'Cookies & Cream Cloud Cupcakes' },
  freshlyBaked: { name: 'Freshly Baked Muffins Daily' },
  chocoCaramel: { name: 'Choco-Caramel Drizzle Cupcakes' },
  glazedParadise: { name: 'Glazed Paradise Donuts' },
} as const;

export const PROMO_CODE = 'MUFFIN';
