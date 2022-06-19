const friends = ['Sara', 'Amir', 'Shayan', 'Mohammad'];

// Add elements at the end and at the begining of the Arrays.
// Add at the end.
const newLength = friends.push('Mahsa');
console.log(friends);
console.log(newLength);

// Add at the begining.
friends.unshift('Raha');
console.log(friends);

// Remove elements.
const poped = friends.pop(); // Last element.
console.log(poped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Amir'));

// ES6 Methods (Strict Equality Check).
friends.push(23);
console.log(friends.includes('Yasi'));
console.log(friends.includes('Amir'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Amir')) {
    console.log('You have a friend called Amir');
}