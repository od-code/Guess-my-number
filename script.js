"use strict";
// The random generated number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
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
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".glow").textContent = "🙌🎊You Won🎊🙌";
    document.querySelector("body").style.backgroundColor = "#3E4B87";
    score > highscore ? (highscore = score) : highscore;
    document.querySelector(".highscore").textContent = highscore;
  } else if (number !== randomNumber && score > 0) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent =
      number > randomNumber ? "📈Too High!" : "📉Too Low";
    // The score is zero
    if (score === 0) {
      document.querySelector(".message").textContent =
        "😔😔You Have Lost The game";
      document.querySelector("body").style.backgroundColor = "#A9081C";
      document.querySelector(".glow").textContent = "😔😔You Lost😔😔";
    }
  }
});
// Resetting the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".glow").textContent = "Guess My Number!";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
