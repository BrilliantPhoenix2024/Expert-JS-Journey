const button = document.querySelector("button");
const player1 = document.querySelector("player1");
const player2 = document.querySelector("player2");
const output = document.querySelector("output");

button.addEventListener("click", function () {
  console.log("works!");
  let rolls = [roll(6), roll(6)];
  console.log(rolls);
});

function roll(number) {
  let randomNum = Math.floor(Math.random() * number) + 1;
  return randomNum;
}
