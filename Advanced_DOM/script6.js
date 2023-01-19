// Lifecycle DOM Events
'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded!', e);
});

// Only use in urgent situation in Websites
// window.addEventListener('beforeunload', function(e) {
// e.preventDefault();
// console.log(e);
// e.returnValue = '';
// });
