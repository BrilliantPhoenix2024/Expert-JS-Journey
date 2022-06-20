const atefeh = [
    'Atefeh',
    'Mohammadi',
    2024 - 1990,
    'Student',
    ['Mohammad', 'Mahsa', 'Nika'],
    hasDriversLicence = true,
];

const types = [];

for (let i = 0; i < atefeh.length; i++) {
    // Reading from atefeh's array
    console.log(atefeh[i]);

    // filling types array
    // types[i] = typeof atefeh[i];
    types.push(typeof atefeh[i]);
};

console.log(types);



const years = [1990, 2020, 2022, 2024, 2037];
const ages = [];


for (i = 0; i < years.length; i++) {
    ages.push(years[i] - 1990);
};

console.log(ages);


// Continue and Break in Loops
console.log('--- Only String ---');
for (let i = 0; i < atefeh.length; i++) {
    if (typeof atefeh[i] !== 'string') continue;

       console.log(atefeh[i], typeof atefeh[i]);
};

console.log('--- Break With Number ---');
for (let i = 0; i < atefeh.length; i++) {
    if (typeof atefeh[i] === 'number') break;

       console.log(atefeh[i], typeof atefeh[i]);
};