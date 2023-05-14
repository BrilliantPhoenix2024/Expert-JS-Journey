const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gamePlay");
const userPlay = document.querySelector(".userPlay");
const res = document.querySelector(".res");

let deck = [];
let players = [];
let deals = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["hearts", "dimas", "clubs", "spades"];

buttons.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", playGame);
});

function playGame(e) {
  let temp = e.target.textContent;
  console.log(temp);
  if (temp == "Start") {
    btnToggle();
    startGame();
  }
}

function btnToggle() {
  buttons[0].classList.toggle("hide");
  buttons[1].classList.toggle("hide");
}

function startGame() {
  let numberPlayers = document.querySelector("input").value;
  buildDeck();
  setupPlayers(numberPlayers);
  //   console.log(deck);
  document.querySelector("input").value = "1";
}

function setupPlayers(num) {
  players = [];
  deals = [];
  for (let x = 0; x < num; x++) {
    let div = document.createElement("div");
    // console.log(div);
    div.setAttribute("id", "player" + (x + 1));
    div.classList.add("player");
    let div1 = document.createElement("div");
    div1.textContent = "Player" + (parseInt(x) + 1);
    players[x] = document.createElement("div");
    players[x].textContent = "Cards";
    div.appendChild(div1);
    div.appendChild(players[x]);
    gamePlay.appendChild(div);
    deals.push([]);
    console.log(deals);
  }
}

function buildDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      card.value = j + 1;
      deck.push(card);
    }
  }
}
