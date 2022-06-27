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
        at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread Operator with three ...
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);


const newMenu = [...restaurant.mainMenu, 'Chelo'];
console.log(newMenu);

// Shalow Copy of Arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Merge (join) two Arrays together
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

// Iterables : arrays, strings, maps, sets, NOT objects.

const str = 'Atefeh';
const letters = [...str, ' ', ':)'];
console.log(letters);
console.log(...str);
console.log('!', ':)');

// NOT USE for template litreral
// console.log(`${...str} Mohammadi`);


// Real-World example
// const ingredients = [prompt('let\'s make pasta! Ingredient 1?'),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3?')];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// console.log(...ingredients);

// Objects
const newResturant = {foundIn: 2021, ...restaurant, founder: 'Yazdani'};
console.log(newResturant)

const restaurantCopy = {...restaurant};
restaurantCopy.Name = 'Yalda';
console.log(restaurantCopy.Name);
console.log(restaurant.Name);