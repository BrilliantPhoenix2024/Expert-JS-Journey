// Arrow Function.
// Added into JavaScript in ES6.
// It's a special form of Funtion declaration but shorter and faster.

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1990);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} is ${age} years old now, and retires in ${retirement} years;`
}

console.log(yearsUntilRetirement(1990, 'Atefeh'));