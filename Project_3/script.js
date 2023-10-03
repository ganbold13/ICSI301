const inputs = document.querySelector(".inputs"),
  guessLeft = document.querySelector(".guess-left"),
  wrongLetter = document.querySelector(".wrong-letter"),
  resetBtn = document.querySelector(".reset-btn");

let word,
  maxGuesses,
  incorrectLetters = [],
  correctLetters = [];
let rightLetterGuesses = 0,
  wrongLetterGuesses = 0,
  wordGuesses = 0;

let focusedInput = null;

function randomWord() {
  let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranItem.word;
  maxGuesses = 5;
  correctLetters = [];
  incorrectLetters = [];
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrectLetters;

  console.log(word);

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" data-index="${i}">`;
    inputs.innerHTML = html;
  }
  focusedInput = null;

  guessLeft.innerText = "Quesses left: " + maxGuesses;
  wrongLetter.innerText = "Wrong letters: " + incorrectLetters;
}
randomWord();

function initGame(e) {
  if (focusedInput === null) return;

  let key = e.key.toLowerCase();
  if (key.match(/^[A-Za-z]$/)) {
    if (focusedInput && word[focusedInput.dataset.index] == key) 
    {
      correctLetters += key;
      rightLetterGuesses++;
      focusedInput.value = key;
      focusedInput.style.backgroundColor = "green";
      focusedInput.disabled = true;
      focusedInput = null;
    } 
    else 
    {
      maxGuesses--;
      wrongLetterGuesses++;
      incorrectLetters.push(` ${key}`);
      if (focusedInput) {
        focusedInput.value = "";
        var f=focusedInput;
        f.disabled = true;
        setTimeout(() => f.disabled = false, 100);
        focusedInput.style.backgroundColor = "red";
        focusedInput = null;
      }
    }
    guessLeft.innerText = "Quesses left: " + maxGuesses;
    wrongLetter.innerText = "Wrong letters: " + incorrectLetters;
  }

  setTimeout(() => {
    if (correctLetters.length === word.length) {
      wordGuesses++;
      return randomWord();
    } else if (maxGuesses < 1) {
      console.log(rightLetterGuesses, wrongLetterGuesses, wordGuesses);
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }

      focusedInput = null;

      guessLeft.innerText = "Total guessed letters: " + rightLetterGuesses;
      wrongLetter.innerText = "Total guessed words: " + wordGuesses;
    }
  }, 100);
}

resetBtn.addEventListener("click", randomWord);
inputs.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    focusedInput = e.target;
  }
});
document.addEventListener("keydown", initGame);
