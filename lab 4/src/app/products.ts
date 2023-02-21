export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string;
  shopLink: string;
}

export const products = [
  {
    id: 1,
    name: 'Протеин XL Sport Nutrition банан шоколад',
    price: 13990,
    description: 'сывороточный протеин, основные вкусы: шоколад, ,банан',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/h89/52079683633182/xl-sport-nutrition-banan-shokolad-908-g-105607332-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/xl-sport-nutrition-banan-shokolad-908-g-105607332/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 2,
    name: 'Протеин Herbalife Nutrition Восстановление силы Шоколад',
    price: 14764,
    description: 'сывороточный протеин, основные вкусы: шоколад, ,тройной шоколад',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/hca/52604427796510/herbalife-nutrition-vosstanovlenie-sily-sokolad-1000-g-105896164-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/herbalife-nutrition-vosstanovlenie-sily-shokolad-1000-g-105896164/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 3,
    name: 'Протеин Herbalife Nutrition Формула 1 Клубника',
    price: 10968,
    description: 'тип: изолят, форма выпуска: порошок',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h7f/33450993778718/herbalife-nutrition-koktejl-formula-1-klubnika-550-g-101652733-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/herbalife-nutrition-formula-1-klubnika-550-g-101652733/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 4,
    name: 'Протеин Qazprotein 100% Instant Whey Лесная ягода',
    price: 13940,
    description: 'тип: сывороточный протеин, форма выпуска: порошок',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h2d/46086619594782/qazprotein-100-instant-whey-lesnaya-yagoda-900-g-102419738-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/qazprotein-100-instant-whey-lesnaja-jagoda-900-g-102419738/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 5,
    name: 'Протеин Herbalife Nutrition Овсяно-Яблочный Напиток',
    price: 9638,
    description: 'тип: многокомпонентный протеин, форма выпуска: порошок',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h6d/62704284860446/herbalife-nutrition-koktejl-106580111-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/herbalife-nutrition-ovsjano-jablochnyi-napitok-213-g-106580111/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 6,
    name: 'Протеин Herbalife Nutrition Формула 1 Дыня',
    price: 10760,
    description: 'тип: изолят, форма выпуска: порошок',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/hce/34165870166046/herbalife-nutrition-koktejl-so-vkusom-dyni-formula-1-101645138-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/herbalife-nutrition-formula-1-dynja-550-g-101645138/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 7,
    name: 'Протеин Herbalife Nutrition Растительный напиток Алоэ Классический',
    price: 10408,
    description: 'тип: растительный протеин, форма выпуска: раствор',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/hb1/34165875212318/herbalife-nutrition-formula-3-240-g-101645145-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/herbalife-nutrition-rastitel-nyi-napitok-aloe-klassicheskii-473-g-105698956/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 8,
    name: 'Протеин Optimum Nutrition 100% Whey Gold Standard Двойной шоколад',
    price: 25900,
    description: 'тип: сывороточный протеин, форма выпуска: порошок',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hb8/48683949457438/optimum-nutrition-100-whey-gold-standard-2-lbs-dvoinoi-shokolad-907-gramm-103665822-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/optimum-nutrition-100-whey-gold-standard-dvoinoi-shokolad-907-g-103665822/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 9,
    name: 'Протеин Syntime Nutrition Light Whey Клубника',
    price: 14990,
    description: 'тип: сывороточный протеин, форма выпуска: порошок',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/hf1/62148678451230/syntime-nutrition-light-whey-klubnika-900-g-106288422-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/syntime-nutrition-light-whey-klubnika-900-g-106288422/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  },
  {
    id: 10,
    name: 'Протеин Herbalife Nutrition Collagen beauty complex лимонад клубника',
    price: 17097,
    description: 'тип: изолят, форма выпуска: порошок',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/h3d/52270080131102/herbalife-nutrition-collagen-beauty-complex-limonad-klubnika-171-g-105698991-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/herbalife-nutrition-collagen-beauty-complex-limonad-klubnika-171-g-105698991/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/