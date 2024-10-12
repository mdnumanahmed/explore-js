function continueGame() {
  const letterDisplay = document.getElementById("random-letter");
  letterDisplay.innerText = getRandomLetter();
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
