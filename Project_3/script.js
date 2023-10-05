const inputs = document.querySelector(".inputs"),
  guessLeft = document.querySelector(".guess-left"),
  wrongLetter = document.querySelector(".wrong-letter"),
  resetBtn = document.querySelector(".reset-btn"),
  title = document.querySelector("#title"),
  timer = document.querySelector("#timer");

let word,
  maxGuesses,
  incorrectLetters = [],
  correctLetters = [];
let rightLetterGuesses = 0,
  wrongLetterGuesses = 0,
  wordGuesses = 0;

let focusedInput = null;

let playedDuration = 0;

var timerInterval = setInterval(setTimer, 1000);

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

  for (let i = 0; i < word.length; i++) {
    if (i % 3 == 0) {
      var input = inputs.querySelectorAll("input")[i];
      input.value = word[i];
      correctLetters += word[i];
      input.style.backgroundColor = "#4aff5c";
      input.disabled = true;
    }
  }

  focusedInput = null;

  setDetails();
}
randomWord();

function setDetails() {
  title.innerHTML = "Үгийг таа";
  guessLeft.innerText = "Амь: " + maxGuesses;
  wrongLetter.innerText = "Буруу таасан үсгүүд: " + incorrectLetters;
}

function setDetailsWin(IsWin) {
  IsWin ? (title.innerHTML = "Are u genius?") : (title.innerHTML = "Хожигдлоо");
  guessLeft.innerText = "Нийт таасан үсгийн тоо: " + rightLetterGuesses;
  wrongLetter.innerText = "Нийт таасан үгийн тоо: " + wordGuesses;
  clearInterval(timerInterval);
}

function setTimer() {
  playedDuration++;
  var minutes = Math.floor(playedDuration / 60);
  var seconds = playedDuration % 60;

  timer.innerText =
    minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ":" +
    seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
}

function initGame(e) {
  if (focusedInput === null) return;

  let key = e.key.toLowerCase();
  if (key.match(/^[А-Яа-я]$/)) {
    if (focusedInput && word[focusedInput.dataset.index] == key) {
      correctLetters += key;
      rightLetterGuesses++;
      focusedInput.value = key;
      focusedInput.style.backgroundColor = "#4aff5c";
      focusedInput.disabled = true;
      focusedInput = null;
    } else {
      maxGuesses--;
      wrongLetterGuesses++;
      incorrectLetters.push(` ${key}`);
      if (focusedInput) {
        focusedInput.value = "";
        var f = focusedInput;
        f.disabled = true;
        setTimeout(() => (f.disabled = false), 100);
        focusedInput.style.backgroundColor = "#fa4141";
        focusedInput = null;
      }
    }

    setDetails();
  }

  setTimeout(() => {
    if (correctLetters.length === word.length) {
      wordGuesses++;
      if (wordGuesses === 5) {
        setDetailsWin(true);
      } else return randomWord();
    } else if (maxGuesses < 1) {
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }

      focusedInput = null;

      setDetailsWin(false);
    }
  }, 100);
}

resetBtn.addEventListener("click", () => {
  randomWord();
  playedDuration = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(setTimer, 1000);
});
inputs.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    focusedInput = e.target;
  }
});
document.addEventListener("keydown", initGame);
