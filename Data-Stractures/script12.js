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

const rest = new Map();
rest.set('name', 'Yalda');
rest.set(1, 'Esf');
console.log(rest.set(2, 'Teh'));

rest
.set('categories', ["Organic", "Traditional", "Iranian"])
.set('open', 11)
.set('close', 22)
.set(true, 'We are open.')
.set(false, 'We are close!');
console.log(rest);
console.log(rest.get(true));
console.log(rest.get('true'));
console.log(rest.get('name'));
console.log(rest.get('1'));
console.log(rest.get(1));

const time = 21;
// const time = 6;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);


rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2]));

const arr = [1, 2];
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
rest.set(arr, 'Test');
console.log(rest.get(arr));