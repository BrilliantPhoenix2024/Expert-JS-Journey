'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings
const owners = ['Atefeh', 'Mohammad', 'Barf', 'Asal'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); Dosen't work

// Ascending
// return < 0, A, B (Keep order)
// return > 0, B, A (Switch oorder)

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);
