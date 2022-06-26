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
};

restaurant.orderDelivery({
    time: "22:30",
    address: "Dinan Shohada",
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: "Dinan Shohada",
    starterIndex: 1,
});


// Destructuring Objects
const { Name, opennightHours, categories } = restaurant;
console.log(Name, opennightHours, categories);

const {
  Name: restaurantName,
  opennightHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// // Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// // Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// // Nested Objects
const { fri } = opennightHours;
console.log(fri);

const {
  sat: { open, close },
} = opennightHours;
console.log(open, close);

const {
  thu: { open: o, close: c },
} = opennightHours;
console.log(o, c);