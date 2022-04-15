"use strict";
var guessNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", checkbutton);

function checkbutton() {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        displayMessage("No number!");
    } else if (guess === guessNumber) {
        displayMessage("Correct Guess! You Won");
        document.querySelector(".number").textContent = guessNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").style.borderRadius = "15rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
            setTimeout(() => alert(`🎉New HighScore - ${score}🎉`), 1000);
        }
    } else if (guess !== guessNumber) {
        if (score > 1) {
            displayMessage(guess > guessNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game!");
            document.querySelector("body").style.backgroundColor = "darkred";
            document.querySelector(".score").textContent = 0;
        }
    }
}
document.querySelector(".again").addEventListener("click", again);

function again() {
    score = 20;
    guessNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").style.borderRadius = "0px";
}