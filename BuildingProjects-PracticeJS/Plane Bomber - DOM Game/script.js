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
  gameMessage.classList.add("hide");
  if (!player.inplay) {
    makeEnemy();
    player.inplay = true;
    player.score = 2000;
    player.totalBombs = 2;
    player.ready = true;
    player.activeBomb = 0;
    player.plane = document.createElement("div");
    player.plane.setAttribute("class", "plane");
    gameArea.appendChild(player.plane);
    window.requestAnimationFrame(playGame);
    player.x = player.plane.offsetLeft;
    player.y = player.plane.offsetTop;
  }
}

function makeEnemy() {
  player.base = document.createElement("div");
  player.base.setAttribute("class", "base");
  player.base.style.width = Math.floor(Math.random() * 200) + 10 + "px";
  player.base.style.height = Math.floor(Math.random() * 100) + 100 + "px";
  player.base.style.left =
    Math.floor(Math.random() * gameArea.offsetWidth - 200) + 100 + "px";
  gameArea.appendChild(player.base);
}

function makeBomb() {
  console.log("making");
  if (player.ready) {
    player.score -= 300;
    player.activeBomb++;
    let bomb = document.createElement("div");
    bomb.classList.add("bomb");
    bomb.innerHTML = player.activeBomb;
    bomb.y = player.y;
    bomb.x = player.x;
    bomb.style.left = bomb.x + "px";
    bomb.style.top = bomb.y + "px";
    gameArea.appendChild(bomb);
    player.ready = false;
    setTimeout(function () {
      player.ready = true;
    }, 500);
  }
}

function playGame() {
  if (player.inplay) {
    console.log(keys);
    if (keys.space) {
      makeBomb();
    }
    if (keys.ArrowUp && player.y > 80) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < 200) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < gameArea.offsetWidth - 50) {
      player.x += player.speed;
    }

    player.x += player.speed * 2;
    if (player.x > gameArea.offsetWidth) {
      player.x = 0;
      player.score -= 100;
    }
    player.score--;
    if (player.score < 0) {
      player.score = 0;
    }

    player.plane.style.left = player.x + "px";
    player.plane.style.top = player.y + "px";
    window.requestAnimationFrame(playGame);
    score.innerHTML = "Score: " + player.score;
  }
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
