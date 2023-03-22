const button = document.querySelector("button");
const output = document.querySelector(".output");

console.log(button);
button.addEventListener("click", function () {
  console.log("clicked");
  output.innerText = "output";
});
