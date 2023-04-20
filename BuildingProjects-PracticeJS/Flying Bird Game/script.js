const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

gameMessage.addEventListener("click", start);
startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
let keys = {};
let player = {};

function start() {
  console.log("start!");
  player.speed = 2;
  gameMessage.classList.add("hide");
  startScreen.classList.add("hide");
  let bird = document.createElement("div");
  bird.setAttribute("class", "bird");
  let wing = document.createElement("span");
  wing.setAttribute("class", "wing");
  bird.appendChild(wing);
  gameArea.appendChild(bird);
  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;
  window.requestAnimationFrame(playGame);
}

function playGame() {
  console.log(player);
  let bird = document.querySelector(".bird");
  let wing = document.querySelector(".wing");

  if (keys.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight) {
    player.x += player.speed;
  }
  if (keys.ArrowUp) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown) {
    player.y += player.speed;
  }

  bird.style.top = player.y + "px";
  bird.style.left = player.x + "px";

  window.requestAnimationFrame(playGame);
}

function pressOn(e) {
  e.preventDefault();
  keys[e.code] = true;
  console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  keys[e.code] = false;
  // console.log(keys);
}
