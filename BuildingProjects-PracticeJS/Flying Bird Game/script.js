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
  player.score = 0;
  gameMessage.classList.add("hide");
  startScreen.classList.add("hide");
  let bird = document.createElement("div");
  bird.setAttribute("class", "bird");
  let wing = document.createElement("span");
  wing.setAttribute("class", "wing");
  wing.pos = 15;
  wing.style.top = wing.pos + "px";
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
  let move = false;

  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
    move = true;
  }
  if (keys.ArrowRight && player.x < gameArea.offsetWidth - 50) {
    player.x += player.speed;
    move = true;
  }
  if ((keys.ArrowUp || keys.Space) && player.y > 0) {
    player.y -= player.speed * 5;
    move = true;
  }
  if (keys.ArrowDown && player.y < gameArea.offsetHight - 50) {
    player.y += player.speed;
    move = true;
  }
  if (move) {
    wing.pos = wing.pos == 15 ? 25 : 15;
    wing.style.top = wing.pos + "px";
  }
  player.y += player.speed * 2;
  if (bird.offsetTop > gameArea.offsetHight) {
    console.log("Game over!");
  }

  bird.style.top = player.y + "px";
  bird.style.left = player.x + "px";

  window.requestAnimationFrame(playGame);
  player.score++;
  score.innerText = "Score: " + player.score;
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
