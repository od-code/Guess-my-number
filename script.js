"use strict";
const randomNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = randomNumber;
console.log(randomNumber);
let scoreValue = document.querySelector(".score").textContent;

let score = 20;
let highscore = 0;

// Handling the click event for the check button
document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".guess").value);
  console.log(number);
  if (!number) {
    document.querySelector(".message").textContent = "⛔No number";
    // The guess is correct
  } else if (number === randomNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number";
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = score;
    // The guess is incorrect
  } else if (number !== randomNumber && score > 0) {
    // The guess is low
    if (number < randomNumber) {
      document.querySelector(".message").textContent = "📉Too Low!!";
      score--;
      document.querySelector(".score").textContent = score;

      // the guess is high
    } else if (number > randomNumber) {
      document.querySelector(".message").textContent = "📈Too High!!";
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (document.querySelector(".score").textContent == 0) {
      document.querySelector(".message").textContent = "😔You've lost the game";
    }
  }
});
