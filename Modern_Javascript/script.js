// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 4);
console.log(cart);

///////////////////////////////////
// The Module Patern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 232;
  const totalQuantity = 32;

  const addToCart = function (product, quantity) {
    cart.push({
      product,
      quantity,
    });
    console.log(`${quantity} ${product} was added to cart. `);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


/////////////////////////
// CommonJS Modules
// Export
export.addToCart = function (product, quantity) {
    cart.push({
      product,
      quantity,
    });
    console.log(`${quantity} ${product} was added to cart. `);
};

// Import
const {addToCart} = require('./shoppingCart.js');
