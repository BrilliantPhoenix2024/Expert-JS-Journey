const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let palyer = {
  speed: 5,
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
  // console.log("inplay");
  let car = document.querySelector(".car");
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
  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
  palyer.start = true;
  for (let x = 0; x < 5; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
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
}
