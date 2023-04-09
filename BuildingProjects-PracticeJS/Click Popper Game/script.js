const playArea = {};
const player = {};
let gameObj;

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
document.addEventListener("DOMContentLoaded", getData);

playArea.btns.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", handleBtn);
});

function getData() {
  playArea.main.classList.add("visible");
  fetch("https://api.myjson.com/bins/gungm")
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      gameObj = data.data;
      console.log(gameObj);
    });
  //   console.log("DOM loaded!");
}

function handleBtn(e) {
  //   console.log(e.target.classList.contains("newGame"));
  if (e.target.classList.contains("newGame")) {
    console.log("YES");
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.items = 3;
  playArea.main.classList.remove("visible");
  playArea.game.classList.add("visible");
  console.log("start");
}
