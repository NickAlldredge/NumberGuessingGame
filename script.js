'use strict';

console.log(
  `~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
Oh hi! Fancy seeing you here! Please hire me! 🙏
~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-`
);

const scoreText = document.querySelector('.score');
const messageText = document.querySelector('.message');
const highScoreText = document.querySelector('.high-score');
const mysteryNumberText = document.querySelector('.mystery-number');

const setScore = function (newScore) {
  score = newScore;
  scoreText.textContent = score;

  if (score <= 0) {
    allowGuess = false;
    setMysteryNumberText(secretNumber);
    setMessage('Game over! Click the New Game button to try again.');
  }
};

const updateHighScore = function (currentScore) {
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = highScore;
  }
};

const setMessage = function (newMessage) {
  messageText.textContent = newMessage;
};

const setMysteryNumberText = function (newText) {
  mysteryNumberText.textContent = newText;
};

const pickRandomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

const defaultScore = 20;
const defaultMessage = 'Enter your guess and click the button!';
const defaultMysteryNumberText = '?';

let score = 20;
let highScore = 0;
let secretNumber = pickRandomNumber();
let allowGuess = true;

document.querySelector('.btn-guess').addEventListener('click', function () {
  if (allowGuess) {
    const guess = Number(document.querySelector('#guess').value);

    if (!guess || guess < 0) {
      setMessage('👀 Please enter a number between 1 and 20 👀');
    } else if (guess === secretNumber) {
      setMessage('Winner winner! 🎉');
      updateHighScore(score);
      setMysteryNumberText(secretNumber);
    } else {
      setMessage(guess > secretNumber ? '📈 Too high! 📈' : '📉 Too low! 📉');
      setScore(score - 1);
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  setScore(defaultScore);
  setMessage(defaultMessage);
  secretNumber = pickRandomNumber();
  setMysteryNumberText(defaultMysteryNumberText);
  allowGuess = true;
});
