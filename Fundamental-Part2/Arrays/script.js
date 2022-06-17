const firend1 = 'Mahsa';
const firend2 = 'Reza';
const friend3 = "Mohammad";

const firends = ['Mahsa', 'Reza', 'Mohammad'];
console.log(firends);

console.log(firends[0]);
console.log(firends[1]);
console.log(firends[2]);


const years = new Array(1990, 2020, 2022, 2024);
console.log(years);

console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[years.length - 1]);


console.log(firends.length);
console.log(firends[firends.length - 1]);

// Changing the Arrays :

firends[1] = 'Amir';
console.log(firends);

const firstName = 'Atefeh';
const Atefeh = [firstName, 'Mohammadi', 2022 - 1990, 'Student', firends];

console.log(Atefeh);
console.log(Atefeh.length);

// Example

const calcAge = function (year) {
    return year - 1990;
}

const years1 = [1990, 2020, 2022, 2024];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[2]);
const age4 = calcAge(years1[years1.length - 1]);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[2]), calcAge(years1[years1.length - 1])];

console.log(ages);