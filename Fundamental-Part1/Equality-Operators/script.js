// Strict Equality Operator and does NOT perform Type Coersion.

const age = 18;
if (age === 18) console.log('You just become an adult');

'18' === 18; // false
18 === 18; // true

// Loose Equality Operator and does perform Type Coersion.

const num = '18';
if (num == 18) console.log('Perform Type Coersion.');

'18' == 18; // true
18 == 18; // true

// Example

const year = '2022';
if (year === 2022) {
    console.log('Strict Equality Operator, does NOT Perform Type Coersion.');
} else if (year == 2022) {
    console.log('Loose Equality Operator, Perform Type Coersion.');
}

// Best practice is always defult use Strict Equality Operator.

// Diffrent Operator :
// (!==) Strict Diffrent Operator.
// (!=) Loose Diffrent Operator.

const x = '1990';
if (x === 1990) {
    console.log('Strict Equality Operator, does NOT Perform Type Coersion.');
} else if (x !== '2022') {
    console.log('Loose Diffrent Operator.(Data Type is matter)');
}

const y = '1990';
if (y === 1990) {
    console.log('Strict Equality Operator, does NOT Perform Type Coersion.');
} else if (y != 2022) {
    console.log('Loose Diffrent Operator.(Data Type is NOT matter)');
}