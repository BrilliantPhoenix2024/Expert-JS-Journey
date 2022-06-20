const atefeh = [
    'Atefeh',
    'Mohammadi',
    2024 - 1990,
    'Student',
    ['Mohammad', 'Mahsa', 'Nika'],
    hasDriversLicence = true,
];

// Looping towards : 0, 1, ..., 4
// Looping backwards : 4, 3, ..., 0

for (let i = atefeh.length - 1; i >= 0; i--) {
    console.log(i, atefeh[i]);
};

// Loops in Loops

for (let exerciseSet = 1; exerciseSet < 4; exerciseSet++) {
    console.log(`---- Starting Exercise ---- ${exerciseSet}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    };
};