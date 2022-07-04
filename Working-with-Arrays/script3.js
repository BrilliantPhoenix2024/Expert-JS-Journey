'use strict';

// Map
const currencies = new Map([
    ['USD', 'United State dollor'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value}: ${value}`);
});