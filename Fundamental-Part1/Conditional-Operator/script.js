const age = 32;
age >= 18 ? console.log("I can get Driver's licence") :
    console.log('My Mother pick me up');


const drink = age >= 18 ? "Wine" : "Water";
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2)


console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);