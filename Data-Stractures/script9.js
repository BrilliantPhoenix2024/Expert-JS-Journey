"use strict";

const weekDays = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];
const opennightHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`Day-${3+2}`]: {
    open: 0,
    close: 12 + 12,
  },
};

const restaurant = {
  Name: "Bagh Arbab",
  location: "Iran, Esfahan, Dinan",
  categories: ["Organic", "Traditional", "Iranian"],
  starterMenu: ["Salad", "Bread", "Soupe", "Aash"],
  mainMenu: ["Kebab", "Satori", "Jojeh"],
  // opennightHours: opennightHours,

  // ES6 enhanced object literals
  opennightHours,

  // ES6 enhanced function literals
  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery ({        
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address}) {
    console.log(`
        Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to ${address} 
        at ${time}`
        );
  },

  orderPasta (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// console.log(restaurant.opennightHours.mon);

// console.log(restaurant.opennightHours.mon.open);

if (restaurant.opennightHours.fri) console.log(restaurant.opennightHours.fri.open);

if (restaurant.opennightHours && restaurant.opennightHours.mon) console.log(restaurant.opennightHours.mon.open);

// WITH Optional Chaining
console.log(restaurant.opennightHours.mon?.open);

// Multiple Optional Chaining
console.log(restaurant.opennightHours?.mon?.open);

// Real-World example
const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

for (const day of days) {
    // console.log(day);
    const open = restaurant.opennightHours[day]?.open ?? 'Closed!';
    console.log(`On ${day}, we open at ${open}`);
};

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderKebab?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
    {
    userNumber: 1,
    name: 'Atefeh',
    email: 'hello@Js.io',
    },
    {
    userNumber: 2,
    name: 'Nik',
    email: 'Nik@Js.io',
    },
];
// const users = [];

console.log(users[0]?.name ?? 'User array is empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array is empty');