const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector("#output");

button.addEventListener("click", function () {
  console.log("works!");
  let rollsDice = [roll(6), roll(6)];
  let temp;
  if (rollsDice[0] == rollsDice[1]) {
    temp = "It was a draw!";
  } else if (rollsDice[0] > rollsDice[1]) {
    temp = "Player 1 wins!";
  } else {
    temp = "Player 2 wins!";
  }
  output.innerHTML = temp;
  console.log(rollsDice);
  player1.innerHTML = rollsDice[0];
  player2.innerHTML = rollsDice[1];
});

function roll(number) {
  let randomNum = Math.floor(Math.random() * number) + 1;
  // Build Dice Face Visual
  let num = 9855 + randomNum;
  let char = "&#" + num + ";";
  return randomNum + "" + char;
}
