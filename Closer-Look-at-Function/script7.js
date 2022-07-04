'use strict';

const runOnce = function() {
    console.log('This will never run again');
};
runOnce();

// IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 32;
})();

// console.log(isPrivate);

(() => console.log('This will never run again'))();


{
    const isPrivate = 32;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);