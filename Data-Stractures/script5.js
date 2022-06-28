"use strict";

const restaurant = {
  Name: "Bagh Arbab",
  location: "Iran, Esfahan, Dinan",
  categories: ["Organic", "Traditional", "Iranian"],
  starterMenu: ["Salad", "Bread", "Soupe", "Aash"],
  mainMenu: ["Kebab", "Satori", "Jojeh"],
  opennightHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    {        
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
}) {
    console.log(`
        Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to ${address} 
        at ${time}`
        );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log('----- OR ------');
// Use ANY data type, return ANY data type, short-circuiting (short-circuit evaluasion)
console.log(3 || 'Atefeh');
console.log('' || 'Atefeh');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Real-world example
// restaurant.numGuests = 23;
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND ------');
console.log(0 && 'Atefeh');
console.log(7 && 'Atefeh');
console.log('Hello' && 23 && null && 'Atefeh');

// Real-world example
if (restaurant.orderPizza) {
  restaurant.orderPizza('X', 'Y');
};

restaurant.orderPizza && restaurant.orderPizza('X', 'Y');