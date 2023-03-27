let myBlock;
document.addEventListener("DOMContentLoaded", function () {
  console.log("ready!");
  myBlock = document.createElement("div");
  myBlock.textContent = "Hello World";
  document.body.appendChild(myBlock);
});
