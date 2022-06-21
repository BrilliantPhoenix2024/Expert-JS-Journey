'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // document.querySelector('.message').textContent = 'Invalid Input';
        displayMessage('Invalid Input');

    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
 
     

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing ...';
    displayMessage('Start guessing ...');
    document.querySelector('.guess').value = '';
});