const Atefeh = {
    firstName : 'Atefeh', // Property : Value,
    lastName : 'Mohammadi',
    job : 'Student',
    age : 2022 - 1990,
    myStatus : a = {
        currentLearning : ['JaveScript', 'ReactJS'],
        currentWorking : ['Python', 'Django'],
    }, 
    friends : ['Sara', 'Amir', 'Shayan', 'Mohammad'],
}

console.log(Atefeh);
console.log(Atefeh.firstName); // Member Access
console.log(Atefeh['firstName']);  // Computed Member Access
console.log(Atefeh.age);
console.log(Atefeh.friends.length);
console.log(Atefeh.friends[3]);

const nameKey = 'Name';
console.log(Atefeh['last' + nameKey]);

console.log(Atefeh.myStatus.currentLearning[0]);
console.log(Atefeh.myStatus.currentWorking[1]);
console.log(Atefeh.myStatus);

// Example
const intrestedIn = prompt('about Atefeh? choose between firstname, lastname, job, age, frinds, mystatus');
console.log(Atefeh[intrestedIn]);