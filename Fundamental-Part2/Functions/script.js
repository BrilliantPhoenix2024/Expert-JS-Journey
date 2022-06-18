function myFunctionName() { // function with no parameters.
    console.log('My name is Atefeh');
}

// Calling / running / invoking function like this:

myFunctionName(); // function with no arguments.

// Can call each function many time we want.

function fruitProcessor(apple, carrot) { // parameters(apple and carrot) pass to function
    const juice = `Juice with ${apple} apples and ${carrot} carrots.`;
    return juice;
}

// we need to store the value that returned from the fruitProcessor function.
// like juice Variable like below :

const juice = fruitProcessor(5, 6); // arguments(5 and 6) pass to function.
console.log(juice);
console.log(fruitProcessor(2, 7));

// DRY --> Don't Repeat Yourself.
// DRY Code.