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


const orderSet = new Set([
'Pasta',
'Pizza',
'Pizza',
'Pasta',
'Risotto',
'Pizza',
]);
console.log(orderSet);
// The Elements of SET has to be Unique

console.log(new Set('Atefeh'));
console.log(new Set());

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Sandwich');
orderSet.add('Sandwich');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

// SET is NO indexes
console.log(orderSet[0]);

// LOOP over SETS
for (const order of orderSet) console.log(order);

// Real-World Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique.size);

console.log(new Set([
    'Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'
]).size);

console.log(new Set('AtefehMohammadiDinani').size);