'use strict';

const restaurant = {
    name: 'Bagh Arbab',
    location: 'Iran, Esfahan, Dinan',
    categories: ['Organic', 'Traditional', 'Iranian'],
    starterMene: ['Salad', 'Bread', 'Soupe', 'Aash'],
    mainMenu: ['Kebab', 'Satori', 'Jojeh'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMene[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Unpacking an Array (Destructuring)
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

const [first,  , second] = restaurant.categories;
console.log(first, second);

// Switching Variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 1));
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);


const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log([i, j]);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// (Set) Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);

const [w = 1, t = 1, o = 1] = [8, 9];
console.log(w, t, o);