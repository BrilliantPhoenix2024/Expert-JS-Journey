const rawTxt = document.querySelector("textarea[name=txtarea]");
const finTxt = document.querySelector("textarea[name=output]");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let temp = rawTxt.value;
  let exp = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  let emailData = temp.match(exp);
  console.log(emailData);
});

// https://regexr.com/
