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
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);

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
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
