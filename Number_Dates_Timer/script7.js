// Internationalizing Numbers (INtl)
'use strict';

const num = 326598754.56;

const options = {
  style: 'unit', // 'percent' // 'currency'
  unit: 'mile-per-hour', // 'celsius'
  currency: 'EUR',
  //   useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Iran:    ', new Intl.NumberFormat('fa-IR', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num)
// );
