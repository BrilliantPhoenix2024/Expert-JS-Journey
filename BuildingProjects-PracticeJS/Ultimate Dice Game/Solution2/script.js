const output = document.querySelector(".output");
const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
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
  let rolls = [roll(6), roll(6)];
  let temp;
  if (rolls[0] == rolls[1]) {
    temp = "Draw!";
  } else if (rolls[0] > rolls[1]) {
    temp = "Player 1 wins!";
  } else {
    temp = "Player 2 wins!";
  }
  updateOutput(player1, rolls[0]);
  updateOutput(player2, rolls[1]);
  output.innerHTML = temp;
});

function updateOutput(el, num) {
  let holder = builder(num);
  if (el.children[0]) {
    el.children[0].remove();
  }
  el.appendChild(holder);
}

function builder(num) {
  let div = document.createElement("div");
  let diceArray = dice[num - 1];
  console.log(diceArray);
  for (let x = 1; x < 10; x++) {
    let span = document.createElement("div");
    span.setAttribute("class", "dot");
    if (diceArray.includes(x)) {
      span.classList.add("white");
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
