// JS dynamic Data typing.

// 1- Number : Floating point, Decimals, integers number.
let age = 32;
console.log(typeof age);

// 2- String : Sequence of Charecters and text.
let firstName = "Atefeh";
let nickName = 'Phoenix';
console.log(typeof firstName);
console.log(typeof nickName);

// 3- Boolean : Logical type (true or false) used for taking decisions.
let isActive = true;
true;
console.log(typeof true);
console.log(typeof isActive);

// 4- Undefined : Value taken by a Variable that isn't yet defined.('Empty Value').
let numbers;
console.log(typeof numbers);

// 5- Null : Also means 'Empty Value'.
console.log(typeof null); // Rise a Bug in JS

// 6- Symbol(ES2015) : Value that is Unique and can't be changed.

// 7- BigInt(ES2020) : Larger integers than Number type can hold.

/* For changing the valu of a 'let' variable,
don't use 'let' keyword for the same variable name */

let lastName = "Mohammadi";
console.log(lastName);

lastName = 'Dinani';
console.log(lastName);
