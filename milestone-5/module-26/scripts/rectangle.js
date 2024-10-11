function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);

  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);

  const rectangleArea = width * length;

  const rectangleAreaDisplay = document.getElementById("rectangle-area");
  rectangleAreaDisplay.innerText = rectangleArea;

  rectangleWidthInput.value = "";
  rectangleLengthInput.value = "";
}
