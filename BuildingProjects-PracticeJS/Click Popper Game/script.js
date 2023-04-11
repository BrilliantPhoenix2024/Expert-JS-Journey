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
      buildBoard();
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
  player.gameOver = false;
  startPop();
}

function randomUp() {
  const pops = document.querySelectorAll(".pop");
  const idx = Math.floor(Math.random() * pops.length);
  if (pops[idx].cnt == playArea.last) {
    return randomUp();
  }
  playArea.last = pops[idx].cnt;
  return pops[idx];
}

function startPop() {
  let newPop = randomUp();
  console.log(newPop);
  newPop.classList.add("active");
}

function buildBoard() {
  console.log("ready");
  let rows = 4;
  let cols = 4;
  let cnt = 0;
  playArea.game.style.width = cols * 100 + cols * 2;
  playArea.game.style.margin = "auto";
  for (let y = 0; y < rows; y++) {
    let divMain = document.createElement("div");
    divMain.setAttribute("class", "row");
    divMain.style.width = cols * 100 + cols * 2;
    for (x = 0; x < cols; x++) {
      let div = document.createElement("div");
      div.setAttribute("class", "pop");
      cnt++;
      div.innerText = cnt;
      div.cnt = cnt;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}
