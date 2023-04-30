const wording = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Aliquid atque eum itaque illum, suscipit, quibusdam debitis earum optio deleniti asperiores",
  "Runde maiores at est quos. Accusantium aut asperiores atque totam.",
];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this.innerText);
  if (this.innerText == "Start") {
    playText.disabled = false;
    playGame();
  }
});

function playGame() {
  let randomNum = Math.floor(Math.random() * wording.length);
  message.innerText = wording[randomNum];
  let date = new Date();
  startTime = date.getTime;
  console.log(startTime);
  button.innerText = "Done";
  
  console.log(randomNum);
}
