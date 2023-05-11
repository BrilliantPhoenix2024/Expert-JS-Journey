const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const gameplay = document.querySelector(".gameplay");
const userPlay = document.querySelector(".userPlay");
const res = document.querySelector(".res");

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
  document.querySelector("input").value = "1";
}
