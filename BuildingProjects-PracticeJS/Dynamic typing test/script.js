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
  // console.log(this.innerText);
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
  // console.log(totalTime);
  let str = playText.value;
  // Count words
  let wordCount = wordCounter(str);
  // Divide by total time word/per minute
  let speed = Math.round(wordCount / totalTime) * 60;
  // console.log(speed);
  // Output final message to player
  let finalMessage = "You typed at " + speed + "words per minute.";

  finalMessage += "<br>" + compareWords(message.innerText, str);
  message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
  let response = strWords.split(" ").length;
  // console.log(response);
  return response;
}

function compareWords(str1, str2) {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  return cnt + " correct out of " + words1.length + "words.";
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
