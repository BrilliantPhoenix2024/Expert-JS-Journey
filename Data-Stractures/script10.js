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
  opennightHours,

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

// Property NAMES
const properties = Object.keys(opennightHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for(const day of properties) {
    openStr += ` ${day}, `;
};
console.log(openStr);


for(const day of Object.keys(opennightHours)) {
    console.log(day);
};

// Property VALUES
const values = Object.values(opennightHours);
console.log(values);

// Entries Object
const entries = Object.entries(opennightHours);
console.log(entries);

for (const x of entries) {
    console.log(x);
};

// [key, value]
for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}.`);
};