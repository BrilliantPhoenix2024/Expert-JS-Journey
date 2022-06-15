// 'let' Variable can reasine again and again and can be EMPTY.
// 'let' is block scope.
let age = 32;
age = 34;
let year;

// 'let' Variable can NOT reasine again and again and can NOT be EMPTY.
const birthYear = 1990;
// birthYear = 1991;
// const day;

// It's good practice to use 'const' by defult instead of 'let'.
// use 'let' when you sure to change the Variable during the programm.

// THe olddest way to declaring a Variable.
// 'var' is function Scope.
var job = 'programmer';
job = 'student';

/* in JS, we can use a variable without 'let', 'const' or 'var' keyword,
but NOT recommended.*/

lastName = 'mohammadi';
console.log(lastName);
