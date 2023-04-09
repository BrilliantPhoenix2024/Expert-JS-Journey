const playArea = {};
const player = {};

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".main");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));

player.score = 0;
player.items = 3;

playArea.btns.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", handleBtn);
});

function handleBtn() {
  console.log("hello");
}
