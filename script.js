'use strict';

/** S073 Handling Click Events */
/** S074*/
/** S075 Manipulating CSS */

// displaying a message: apply DRY principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// selecting the check button
const checkButton = document.querySelector('.check');

// score element
const scoreElement = document.querySelector('.score');

// body element
const bodyElement = document.querySelector('body');

// number element
const numberElement = document.querySelector('.number');

// guess element
const guessElement = document.querySelector('.guess');

// score variable - **state variable:
let score = 20;

// highscore variable
let highscore = 0;

// secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// adding an event listener to the check button
checkButton.addEventListener('click', function () {
  // generating a random number between 1 and 20

  const guess = guessElement.value === '' ? null : Number(guessElement.value);

  console.log(guess, typeof guess);
  // when there is no input
  if (guess === null) {
    displayMessage('🚫 No Number! ');
  }
  // when the number is not between 0 and 20
  else if (guess < 1 || guess > 20) {
    displayMessage('🚫 Number must be between 1 and 20! ');
  }

  // when the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
  }
  // when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      scoreElement.textContent = --score;
    } else {
      displayMessage('💥 You lost the game! ');
      scoreElement.textContent = 0;
    }
  }
});

/** S076 Implementing the Again Button */

// selecting the again button
const againButton = document.querySelector('.again');

// adding an event listener to the again button
againButton.addEventListener('click', function () {
  // resetting the score
  score = 20;
  scoreElement.textContent = score;
  // generating a new secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // resetting the message
  displayMessage('Start guessing...');
  // resetting the number
  numberElement.textContent = '?';
  // resetting the input value
  guessElement.value = '';

  // resetting the background color
  bodyElement.style.backgroundColor = '#222';
  // resetting the number width
  numberElement.style.width = '15rem';
});
