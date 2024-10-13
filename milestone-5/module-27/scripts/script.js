function handleKeyUpEvent(event) {
  const playerPressed = event.key;

  const currentLetter = document.getElementById("current-alphabet").innerText;
  const expectedLetter = currentLetter.toLowerCase();

  if (playerPressed.toLowerCase() === expectedLetter.toLowerCase()) {
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);

    // ============= ==============================
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedLetter);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    //   ===================================================
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
  }
}

document.addEventListener("keyup", handleKeyUpEvent);

function continueGame() {
  const alphabet = getRandomLetter();

  const letterDisplay = document.getElementById("current-alphabet");
  letterDisplay.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  // hide everything show only playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset life and score
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  // get score from playground and set it to final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);
}
