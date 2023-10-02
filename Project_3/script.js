const inputs = document.querySelector(".inputs"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess-left span"),
  wrongLetter = document.querySelector(".wrong-letter span"),
  resetBtn = document.querySelector(".reset-btn"),
  typingInput = document.querySelector(".typing-input");

let word,
  maxGuesses,
  incorrectLetters = [],
  correctLetters = [];
let rightLetterGuesses, wrongLetterGuesses, wordGuesses;

function randomWord() {
  let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranItem.word;
  maxGuesses = word.length >= 5 ? 8 : 6;
  correctLetters = [];
  incorrectLetters = [];
  hintTag.innerText = ranItem.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrectLetters;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" data-index="${i}">`;
    inputs.innerHTML = html;
  }
}
randomWord();

function initGame(e) {
  let key = e.target.value.toLowerCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrectLetters.includes(` ${key}`) &&
    !correctLetters.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          correctLetters += key;
          rightLetterGuesses++;
          const input = inputs.querySelector(`[data-index="${i}"]`);
          if (input) {
            input.value = key;
            input.style.backgroundColor = "green"; // Set background to green for correct letters
          }
        }
      }
    } else {
      maxGuesses--;
      wrongLetterGuesses++;
      incorrectLetters.push(` ${key}`);
      const input = inputs.querySelector(`[data-index="${wordGuesses}"]`);
      if (input) {
        input.style.backgroundColor = "red"; // Set background to red for wrong letters
      }
    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
  }
  typingInput.value = "";

  setTimeout(() => {
    if (correctLetters.length === word.length) {
      alert(`Congrats! You found the word ${word.toUpperCase()}`);
      return randomWord();
    } else if (maxGuesses < 1) {
      alert("Game over! You don't have remaining guesses");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
