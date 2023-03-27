let myBlock;
document.addEventListener("DOMContentLoaded", function () {
  console.log("ready!");
  myBlock = document.createElement("div");
  myBlock.textContent = "Hello World";
  myBlock.style.width = "100px";
  myBlock.style.height = "100px";
  myBlock.style.backgroundColor = "purple";
  myBlock.style.color = "white";
  myBlock.style.lineHeight = "100px";
  myBlock.style.textAlign = "center";
  myBlock.style.position = "absolute";
  myBlock.style.top = "100px";
  myBlock.style.left = "150px";
  document.body.appendChild(myBlock);
});
