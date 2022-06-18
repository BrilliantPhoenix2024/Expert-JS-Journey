// Function declaration.
// we can call it before initialization.

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);

// Function Expressions without function name and directly store into variable.
// we can NOT call it before initialization.

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age2);

console.log(age1, age2);