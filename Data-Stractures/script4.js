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


// 1) Destructuring

// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT sife of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [kebab,  , jojeh, ...otherFood] = [...restaurant.mainMenu,
 ...restaurant.starterMenu
];
console.log(kebab, jojeh, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.opennightHours;
console.log(weekdays);

// 2) Functions
const add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 9);
add(5, 7, 9, 4, 3, 2, 9);

const x = [23, 5, 7, 32];
add(...x);

// Real-World example
restaurant.orderPizza('Mashrooms', 'Onion', 'Spinach', 'Olives');

restaurant.orderPizza('Mashroom');