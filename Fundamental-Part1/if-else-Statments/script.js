// Example 1

const age = 15;

if (age >= 18) {
    console.log('You can start driving license.')
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young, Wait another ${yearsLeft} years :)`);
}

// Example 2

const birthYear = 2020;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);