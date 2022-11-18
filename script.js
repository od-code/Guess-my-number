'use strict';
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   // When the player doesn't input ant value
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔No Number';
//     // When the player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉Correct Number';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     // When the player inputs a greater value
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '📈Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😬You Lost The Game!';
//     }
//     // Whe the player inputs a lower value
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '📉Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😬You Lost The Game!';
//     }
//   }
// });
// // Reseting the game
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
// });

// REFACTORED CODE
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Add event listener to the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔No Number!');
    // If the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').style.width = '20em';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('h1').textContent = '🎉🎉You Won🎊🎊';
    document.querySelector('.number').textContent = guess;
    // Updating the High Score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Number not equal to sectret number
  } else if (guess !== secretNumber) {
    if (score > 0) {
      guess > secretNumber
        ? displayMessage('📈Too High!')
        : displayMessage('📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😬You Lost The Game!';
    }
  }
});
// Restarting the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
