const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gamePlay");
const userPlay = document.querySelector(".userPlay");
const res = document.querySelector(".res");

let deck = [];
let players = [];
let deals = [];
let round = 0;
let inplay = false;
let total = 0;
// const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const ranks = [2, 3];
const suits = ["hearts", "diams", "clubs", "spades"];

buttons.forEach(function (item) {
  // console.log(item);
  item.addEventListener("click", playGame);
});

function playGame(e) {
  let temp = e.target.textContent;
  // console.log(temp);
  if (temp == "Start") {
    btnToggle();
    startGame();
  }
  if (temp == "Attack") {
    let tempRuns = document.querySelector("input").value;
    res.innerHTML = "";
    round = 0;
    for (let x = 0; x < tempRuns; x++) {
      if (inplay) {
        message.innerHTML = "Round " + (x + 1);
        makeCards();
      }
    }
  }
}

function btnToggle() {
  buttons[0].classList.toggle("hide");
  buttons[1].classList.toggle("hide");
}

function startGame() {
  inplay = true;
  let numberPlayers = document.querySelector("input").value;
  buildDeck();
  setupPlayers(numberPlayers);
  dealCards(0);
  makeCards();
  //   console.log(deck);
  document.querySelector("input").value = "1";
}

function showCard(el, card) {
  // console.log(card);
  if (card != undefined) {
    el.style.backgroundColor = "white";
    let html1 = card.rank + "</br>&" + card.suit + ";";
    let html2 = card.rank + "&" + card.suit + ";";
    let div = document.createElement("div");
    div.classList.add("card");
    if (card.suit === "hearts" || card.suit === "diams") {
      div.classList.add("red");
    }

    let span1 = document.createElement("span");
    span1.innerHTML = html2;
    span1.classList.add("tiny");
    div.appendChild(span1);

    let span2 = document.createElement("span");
    span2.innerHTML = html1;
    span2.classList.add("big");
    div.appendChild(span2);
    el.appendChild(div);

    // console.log(div);
  }
}

function dealRound(playerList, tempHolder) {
  let curWinner = {
    high: null,
    player: null,
  };
  let playoff = [];
  console.log(playerList);
  for (let x = 0; x < playerList.length; x++) {
    let tempPlayerIndex = playerList[x];
    if (deals[tempPlayerIndex].length > 0) {
      let card = deals[tempPlayerIndex].shift();
      if (curWinner.high == card.value) {
        if (playoff.length == 0) {
          playoff.push(curWinner.player);
        }
        playoff.push(tempPlayerIndex);
      }
      if (!curWinner.high || curWinner.high < card.value) {
        curWinner.high = card.value;
        curWinner.player = tempPlayerIndex;
        curWinner.card = card;
      }

      // console.log(card);
      // console.log(deals[x]);
      tempHolder.push(card);
      showCard(players[tempPlayerIndex], card);
    }
  }
  if (playoff.length > 0) {
    dealRound(playoff, tempHolder);
  } else {
    updater(curWinner.player, tempHolder);
  }
}

function makeCards() {
  let tempHolder = [];
  let playerList = [];
  for (let x = 0; x < players.length; x++) {
    players[x].innerHTML = "";
    if (deals[x].length > 0) {
      playerList.push(x);
    }
  }
  dealRound(playerList, tempHolder);
}

function winGame() {
  btnToggle();
  for (let x = 0; x < players.length; x++) {
    players[x].innerHTML += deals[x].length >= total ? "WINNER" : "LOSER";
  }
  message.innerHTML = "Select number of players";
  document.querySelector("input").value = "3";
}

function updater(winner, tempHolder) {
  players[winner].style.backgroundColor = "green";
  tempHolder.sort(function () {
    return 0.5 - Math.random();
  });
  for (let record of tempHolder) {
    deals[winner].push(record);
  }
  for (let x = 0; x < players.length; x++) {
    let div = document.createElement("div");
    div.classList.add("stats");
    if (deals[x].length == total) {
      div.innerHTML += deals[x].length;
      // Restart function
      winGame();
    } else {
      div.innerHTML =
        deals[x].length < 1 ? "Lost!" : "Cards: " + deals[x].length;
    }
    players[x].appendChild(div);
  }
  res.innerHTML +=
    "Player " + (winner + 1) + " won " + tempHolder.length + " cards<br>";
}

function dealCards(playerCard) {
  playerCard = playerCard >= players.length ? 0 : playerCard;
  // console.log(playerCard);
  if (deck.length > 0) {
    let randIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randIndex, 1)[0];
    deals[playerCard].push(card);
    playerCard++;
    return dealCards(playerCard);
    // console.log(deals);
  } else {
    message.textContent = "Cards dealt now!";
    return;
  }
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
    // console.log(deals);
  }
}

function buildDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {};
      total++;
      card.suit = suits[i];
      card.rank = ranks[j];
      card.value = j + 1;
      deck.push(card);
    }
  }
}
