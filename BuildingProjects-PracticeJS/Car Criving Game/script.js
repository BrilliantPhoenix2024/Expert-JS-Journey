const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let palyer = {
  speed: 5,
  score: 0,
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

function moveLines() {
  let lines = document.querySelectorAll(".line");
  lines.forEach(function (item) {
    // console.log(item.y);
    if (item.y >= 1500) {
      item.y -= 1500;
    }
    item.y += palyer.speed;
    item.style.top = item.y + "px";
  });
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}

function moveEnemy(car) {
  let ele = document.querySelectorAll(".enemy");
  ele.forEach(function (item) {
    if (isCollide(car, item)) {
      console.log("HIT");
      endGame();
    }
    // console.log(item.y);
    if (item.y >= 1500) {
      item.y = -600;
      item.style.left = Math.floor(Math.random() * 150) + "px";
    }
    item.y += palyer.speed;
    item.style.top = item.y + "px";
  });
}

function playGame() {
  // console.log("inplay");
  let car = document.querySelector(".car");
  moveLines();
  moveEnemy(car);
  let road = gameArea.getBoundingClientRect();
  // console.log(road);
  // console.log(palyer.x);
  if (palyer.start) {
    if (keys.ArrowUp && palyer.y > road.top) {
      palyer.y -= palyer.speed;
    }
    if (keys.ArrowDown && palyer.y < road.bottom) {
      palyer.y += palyer.speed;
    }
    if (keys.ArrowLeft && palyer.x > 0) {
      palyer.x -= palyer.speed;
    }
    if (keys.ArrowRight && palyer.x < road.width - 50) {
      palyer.x += palyer.speed;
    }
    car.style.left = palyer.x + "px";
    car.style.top = palyer.y + "px";

    window.requestAnimationFrame(playGame);
    palyer.score++;
    score.innerText = "Score: " + palyer.score;
  }
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
  // console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
  // console.log(keys);
}

function endGame() {
  palyer.start = false;
  score.innerHTML = "Game Over <br> Your Score: " + palyer.score;
  startScreen.classList.remove("hide");
}

function start() {
  //   console.log("click");
  startScreen.classList.add("hide");
  // gameArea.classList.remove("hide");
  gameArea.innerHTML = "";
  palyer.start = true;
  palyer.score = 0;
  for (let x = 0; x < 10; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = x * 150;
    div.style.top = x * 150 + "px";
    gameArea.appendChild(div);
  }
  window.requestAnimationFrame(playGame);
  let car = document.createElement("div");
  car.innerText = "Car";
  car.setAttribute("class", "car");

  gameArea.appendChild(car);
  palyer.x = car.offsetLeft;
  palyer.y = car.offsetTop;
  // console.log(palyer);
  for (let x = 0; x < 3; x++) {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.y = (x + 1) * 600 * -1;
    enemy.style.top = enemy.y + "px";
    enemy.style.left = Math.floor(Math.random() * 150) + "px";
    enemy.style.backgroundColor = "red";
    gameArea.appendChild(enemy);
  }
}
