const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let palyer = {
  //   speed: 5,
  //   score: 0,
};
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function playGame() {
  console.log("inplay");
  if (palyer.start) {
    window.requestAnimationFrame(playGame);
  }
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
  console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}

function start() {
  //   console.log("click");
  startScreen.classList.remove("hide");
  gameArea.classList.add("hide");
  palyer.start = true;
  window.requestAnimationFrame(playGame);
  let car = document.createElement("div");
  car.innerText = "Car";
  gameArea.appendChild(car);
}
