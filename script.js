"use strict";
// The random generated number
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomNumber;
console.log(randomNumber);
// Store the values of the scores in variables
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  // Grab the number from the input
  const number = Number(document.querySelector(".guess").value);
  // If there is no guess
  if (!number) {
    document.querySelector(".message").textContent = "⛔No number";
    // If the guess is correct
  } else if (number === randomNumber) {
    document.querySelector(".message").textContent = "🎉🎉Correct Number";
    document.querySelector(".glow").textContent = "🙌🎊You Won🎊🙌";
    document.querySelector("body").style.backgroundColor = "#3E4B87";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (number !== randomNumber && score > 0) {
    // If the guess is high
    if (number > randomNumber) {
      document.querySelector(".message").textContent = "📈Too High!";
      score--;
      document.querySelector(".score").textContent = score;
      // If the guess is low
    } else if (number < randomNumber) {
      document.querySelector(".message").textContent = "📉Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
    // The score is zero
    if (score === 0) {
      document.querySelector(".message").textContent =
        "😔😔You Have Lost The game";
    }
  }
});
// Resetting the game
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".glow").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = 20;
});
