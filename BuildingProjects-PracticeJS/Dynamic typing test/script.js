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
  } else if (this.innerText == "Done") {
    playText.disabled = true;
    button.innerText = "Start";
    endPlay();
  }
});

function endPlay() {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);
  let str = playText.value;
  // Count words
  // Divide by total time word/per minute
  // Output final message to player
}

function playGame() {
  let randomNum = Math.floor(Math.random() * wording.length);
  message.innerText = wording[randomNum];
  let date = new Date();
  startTime = date.getTime();
  // console.log(startTime);
  button.innerText = "Done";

  // console.log(randomNum);
}
