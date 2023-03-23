const myCalculator = document.querySelector('.myCal');
const myKeys = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['C', '0', '=', '/'],
];
const myOper = ['+', '-', '*', '/'];
let myOut;

document.addEventListener('DOMContentLoaded', function () {
  myOutput = document.createElement('div');
  myOutput.innerHTML = '0';
  myOutput.classList.add('output');
  myCalculator.appendChild(myOutput);
  console.log(myOutput);
});
