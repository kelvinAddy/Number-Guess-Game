let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let gameLost = false;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector("#game-state-label").textContent = message;
};

const displayWinner = (message) => {
  document.querySelector(".header-label").textContent = message;
};

const toogleInput = (gameLost) => {
  document.querySelector(".user-guess").disabled = gameLost;
};

const showNumber = (number) => {
  document.querySelector(".output-container").textContent = number;
};

const updateScore = (score) => {
  document.querySelector("#current-score").textContent = score;
};

const updateHighScore = () => {
  highScore = score > highScore ? score : highScore;
  document.querySelector("#high-score").textContent = highScore;
};

const updateBodyColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

const checkCorrectGuess = (guess, randomNumber) => {
  if (guess === randomNumber) {
    showNumber(randomNumber);
    displayMessage("Correct Number!");
    displayWinner("You Won!!!");
    updateHighScore(highScore);
    toogleInput(!gameLost);
    updateBodyColor("#4c8500");
  }
};

const checkWrongGuess = (guess, randomNumber) => {
  if (guess !== randomNumber) {
    displayMessage(guess > randomNumber ? "Too High!" : "Too Low!");
    score -= 1;
    updateScore(score);
  }
};

const checkgameLost = () => {
  if (score === 0) {
    gameLost = true;
    displayWinner("GAME LOST!");
    toogleInput(gameLost);
    updateBodyColor("#7d0000");
  }
};

document.querySelector(".submit").addEventListener("click", () => {
  const guess = Number(document.querySelector(".user-guess").value);
  if (!gameLost) {
    if (!guess) displayMessage("No guess made!");
    else {
      checkCorrectGuess(guess, randomNumber);
      checkWrongGuess(guess, randomNumber);
      checkgameLost(score);
    }
  }
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  gameLost = false;
  toogleInput(gameLost);
  updateBodyColor("#1f1f1f");
  showNumber("?");
  document.querySelector(".user-guess").value = "";
  displayMessage("Start Guessing...");
  displayWinner("Guess the Number!");
  score = 20;
  updateScore(score);
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
