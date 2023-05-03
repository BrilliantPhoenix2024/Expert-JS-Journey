const score = document.querySelector(".score");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
document.addEventListener("click", start);
let player = {
  score: 0,
  speed: 2,
  inplay: false,
};
let keys = {
  space: false,
};

function start() {
  player.inplay = true;
  player.plane = document.createElement("div");
  player.plane.setAttribute("class", "plane");
  gameArea.appendChild(player.plane);
}

function pressOn(e) {
  e.preventDefault();
  let tempKey = e.key == " " ? "space" : e.key;
  keys[tempKey] = true;
  console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  let tempKey = e.key == " " ? "space" : e.key;
  keys[tempKey] = false;
  console.log(keys);
}
