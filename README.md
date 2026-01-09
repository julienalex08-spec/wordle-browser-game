# Wordle game
🟩 Wordle Game

A browser-based Wordle-style game built using HTML, CSS, and JavaScript.
Players have 5 attempts to guess a randomly selected 5-letter word. After each guess, colored tiles give feedback about how close the guess is.

[Play a Live Demo Here](https://julienalex08-spec.github.io/wordle-browser-game/)

# 🎮 How to Play

Type a 5-letter word using your keyboard.

Press Enter to submit your guess.

Each tile will change color:

🟩 Green – Correct letter in the correct position

🟨 Yellow – Correct letter but in the wrong position

⬜ Gray – Letter not in the word

You have 5 total guesses.

If you guess the word correctly, you win!

Click Reset to play again.

# 🧠 How It Works

A random word is selected from words.js

Keyboard input fills in the grid

Pressing Enter checks your guess

The game compares each letter and applies:

right → green

wrong → yellow

empty → gray

The game ends when:

The player guesses the word

OR all 5 rows are used

🛠️ Technologies Used

HTML – Page structure

CSS – Layout, colors, and animations

JavaScript – Game logic and keyboard handling

# Example 

| Guess    | Result         |
| -------- | -------------- |
| HOUSE    | ⬜ 🟨 🟩 ⬜ ⬜    |
| HORSE    | 🟩 🟩 🟩 🟩 🟩 |
| **Win!** | 🎉             |
