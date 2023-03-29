let myBlock;
let myFunctionList;
let funList = [];
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
  myFunctionList = document.createElement("div");
  document.body.appendChild(myFunctionList);
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  let keyC = e.keyCode;
  if (keyC === 37) addFun("left");
  else if (keyC === 38) addFun("up");
  else if (keyC === 39) addFun("right");
  else if (keyC === 40) addFun("down");
  else if (keyC === 67) myBlock.style.backgroundColor = randomColor();
  // console.log(e.keyCode);
});

function addFun(value) {
  funList.push(value);
  let span = document.createElement("span");
  span.textContent = "+" + value;
  span.style.padding = "10px";
  span.style.border = "1px solid #ddd";
  myFunctionList.appendChild(span);
  span.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this.style.color = "white";
  });
  span.addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
    this.style.color = "black";
  });

  console.log(funList);
}

function randomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

function goLeft() {
  let temp = myBlock.offsetLeft;
  temp -= 50;
  myBlock.style.left = temp + "px";
}

function goRight() {
  let temp = myBlock.offsetLeft;
  temp += 50;
  myBlock.style.left = temp + "px";
}

function goUp() {
  let temp = myBlock.offsetTop;
  temp -= 50;
  myBlock.style.top = temp + "px";
}

function goDown() {
  let temp = myBlock.offsetTop;
  temp += 50;
  myBlock.style.top = temp + "px";
}
