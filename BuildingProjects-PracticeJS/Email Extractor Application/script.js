const rawTxt = document.querySelector("textarea[name=txtarea]");
const finTxt = document.querySelector("textarea[name=output]");
const btn = document.querySelector("button");
const counter = document.querySelector(".counter");

btn.addEventListener("click", function () {
  let temp = rawTxt.value;
  let exp = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  let emailData = temp.match(exp);
  console.log(emailData);
  counter.innerHTML = emailData.length + " Emails Found.";
  finTxt.innerHTML = emailData;
});

// https://regexr.com/
