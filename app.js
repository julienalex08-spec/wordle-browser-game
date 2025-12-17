/*-------------------------------- Constants --------------------------------*/

const rows = document.querySelectorAll(".grid");
console.log(rows);

/*---------------------------- Variables (state) ----------------------------*/

let currentRow = 0;
let currentCol = 0;

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const handleKeyPress = (e) => {
  const key = e.key;
  console.log(key);

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
    if (currentCol !== 5) return;

    currentRow++;
    currentCol = 0;
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
