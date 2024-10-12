function hideElementById(elementId) {
  const homeScreen = document.getElementById(elementId);
  homeScreen.classList.add("hidden");
}

function showElementById(elementId) {
  const playGround = document.getElementById(elementId);
  playGround.classList.remove("hidden");
}

function getRandomLetter() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.floor(Math.random() * 25);
  const alphabet = alphabets[randomNumber];
  return alphabet;
}
