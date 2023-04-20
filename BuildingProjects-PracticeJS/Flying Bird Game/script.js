const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

gameMessage.addEventListener("click", start);
startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyUp", pressOff);

function start() {
  console.log("start!");
  gameMessage.classList.add("hide");
  startScreen.classList.add("hide");
}

function pressOn() {
  console.log("On!");
}

function pressOff() {
  console.log("Off!");
}
