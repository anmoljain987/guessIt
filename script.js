"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modalHeader = document.querySelector(".modal__header");
var lost = [
  "Winning may not be everything, but losing has little to recommend it",
  "Don't loose hope you can try again",
];
var win = [
  "Winning isn't everything, it's the only thing.",
  "Winning doesn't always mean being first. Winning means you're doing better than you've ever done before.",
  "Winning takes precedence over all. There's no gray area. No almosts.",
  "Imagination has a great deal to do with winning.",
  "Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose.",
];
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

    modalHeader.textContent = randomQ(win);
    console.log(randomQ(win));
    openModal();
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;

      // setTimeout(() => alert(`🎉New HighScore - ${score}🎉`), 1000);
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
      modalHeader.textContent = randomQ(lost);
    }
  }
  document.querySelector(".guess").value = "";
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

///////Modal Window

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

function randomQ(arr) {
  var no = Math.floor(Math.random() * arr.length);
  return arr[no];
}


///// modal not working properly
