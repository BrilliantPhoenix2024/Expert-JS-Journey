// Selecting, Creating, and Deleting Elements

// Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Return a NodeList
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// Return an HTMLCollection
document.getElementById('#section--1');
const allbuttons = document.getElementsByTagName('.button');
console.log(allbuttons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacenHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analystics.';
message.innerHTML =
  'We use cookied for improved functionality and analystics. <button class= "btn btn--close-cookie">Got it!</button>';

header.prepend(message); // first child
header.append(message); // last child
header.append(message.cloneNode(true));

header.before(message); // as a sibllings
header.after(message); // as a sibllings

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.replaceChild(message);
  });
