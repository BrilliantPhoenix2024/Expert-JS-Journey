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
  for (let y = 0; y < myKeys.length; y++) {
    let div = document.createElement('div');
    div.classList.add('row');
    for (let x = 0; x < myKeys[y].length; x++) {
      //   console.log(myKeys[y][x]);
      let btn = document.createElement('div');
      btn.innerHTML = myKeys[y][x];
      btn.classList.add('btn');
      btn.addEventListener('click', btnHit);
      div.appendChild(btn);
    }
    myCalculator.appendChild(div);
    console.log(div);
  }
});

function btnHit(e) {
  console.log(e);
  console.log(this.innerText);
  let myValue = this.innerText;
  let myCal = myOutput.innerText;
  if (myCal === '0') {
    myCal = '';
  }
  myCal = myCal + myValue;
  myOutput.innerText = myCal;
}
