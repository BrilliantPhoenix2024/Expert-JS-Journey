// Types of Events and Event Handlers
'use strict';

const alertH1 = function (e) {
  alert('addEventLisener: Great! You are reading the heading :D');

  h1.removeEventListner('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
});

h1.onmouseenter = function (e) {
  alert('onmouseenter: Great! You are reading the heading :D');
};

setTimeout(() => h1.removeEventListner('mouseenter', alertH1), 3000);

// Enother way, we can do this in HTML files
<h1 onclick="alert('HTML alert')"></h1>;
