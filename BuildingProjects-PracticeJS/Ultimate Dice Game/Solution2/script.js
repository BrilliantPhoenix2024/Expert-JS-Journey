const output = document.querySelector(".output");
const button = document.querySelector("button");
const dice = [
  [5], // Dice 1
  [1, 9], // Dice 2
  [1, 5, 9], // Dice 3
  [1, 3, 7, 9], // Dice 4
  [1, 3, 5, 7, 9], // Dice 5
  [1, 3, 4, 6, 7, 9], // Dice 6
];

button.addEventListener("click", function () {
  // console.log("works!");
  // Build Roll
  let rollDice = roll(6);
  console.log(rollDice);
  let holder = builder(rollDice);
  // console.log(output.children[0]);
  if (output.children[0]) {
    output.children[0].remove();
  }
  output.appendChild(holder);
});

function builder(num) {
  let div = document.createElement("div");
  let diceArray = dice[num - 1];
  console.log(diceArray);
  for (let x = 1; x < 10; x++) {
    let span = document.createElement("div");
    span.setAttribute("class", "dot");
    if (diceArray.includes(x)) {
      span.classList.add("black");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");
  return div;
}

function roll(number) {
  let randomNum = Math.floor(Math.random() * number) + 1;
  return randomNum;
}
