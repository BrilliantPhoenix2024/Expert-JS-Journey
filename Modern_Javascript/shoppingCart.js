// Exporting module

console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({
    product,
    quantity,
  });
  console.log(`${quantity} ${product} was added to cart. `);
};

const totalPrice = 232;
const totalQuantity = 32;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({
    product,
    quantity,
  });
  console.log(`${quantity} ${product} was added to cart. `);
}
