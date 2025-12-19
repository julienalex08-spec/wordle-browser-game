import { WORDS } from "./words.js";

/*-------------------------------- Constants --------------------------------*/

const rows = document.querySelectorAll(".grid");
const messageEl = document.querySelector("#message");

/*---------------------------- Variables (state) ----------------------------*/

let currentRow = 0;
let currentCol = 0;
let isGameOver = false;

/*------------------------ Cached Element References ------------------------*/
const resetEl = document.querySelector("#button");
/*-------------------------------- Functions --------------------------------*/
let targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];

const handleKeyPress = (e) => {
  const key = e.key;

  if (isGameOver) return;

  if (key === "Backspace") {
    if (currentCol === 0) {
      return;
    }
    currentCol--;

    const row = rows[currentRow];
    const box = row.children[currentCol];

    box.textContent = "";
    return;
  }

  if (key === "Enter") {
    console.log("I'm in here");
    if (currentCol !== 5) return;
    const row = rows[currentRow];

    const letters = [];
    for (let box of row.children) {
      letters.push(box.textContent.toUpperCase());
    }

    const targetLetters = targetWord.split("");

    const results = ["", "", "", "", ""];

    for (let i = 0; i < 5; i++) {
      if (letters[i] === targetWord[i]) {
        results[i] = "right";
        targetLetters[i] = null;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (results[i] === "right") {
        continue;
      }

      if (targetLetters.includes(letters[i])) {
        results[i] = "wrong";
        const letterIndex = targetLetters.findIndex(
          (currentLetter) => currentLetter === letters[i]
        );
        targetLetters[letterIndex] = null;
      } else {
        results[i] = "empty";
      }
    }

    for (let i = 0; i < 5; i++) {
      const box = row.children[i];

      box.classList.add(results[i]);
    }

    const guess = letters.join("");

    currentRow++;
    currentCol = 0;

    if (guess === targetWord) {
      isGameOver = true;
      messageEl.textContent = "You Win!!!";
    } else if (currentRow >= 5) {
      isGameOver = true;
      messageEl.textContent = `You Lose!! The word you are looking for is ${targetWord}`;
    }

    return;
  }

  if (key.length !== 1 || key < "a" || key > "z") {
    return;
  }

  if (currentCol >= 5) {
    return;
  }

  const row = rows[currentRow];
  console.log(row.children);
  const box = row.children[currentCol];

  box.textContent = key;

  currentCol++;
};

/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener("keydown", handleKeyPress);
resetEl.addEventListener("click", () => {
  currentRow = 0;
  currentCol = 0;
  isGameOver = false;

  rows.forEach((row) => {
    for (let box of row.children) {
      box.classList.remove("empty", "wrong", "right");
      box.textContent = "";
    }
  });

  messageEl.textContent = "";
  targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
});
