function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  const area = 0.5 * base * height;
  setInnerTextById("triangle-area", area);
}

function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");

  const area = width * length;
  setInnerTextById("rectangle-area", area);
}

function calculateParallelogramArea() {
  const base = document.getElementById("parallelogram-base");
  const height = document.getElementById("parallelogram-height");

  const area = base * height;
  setInnerTextById("parallelogram-area", area);
}

function calculateRhombusArea() {
  const d1 = getInputValueById("rhombus-d1");
  const d2 = getInputValueById("rhombus-d2");

  const area = d1 * d2;
  setInnerTextById("rhombus-area", area);
}

function calculatePentagonArea() {
  const perimeter = getInputValueById("pentagon-p");
  const apothem = getInputValueById("pentagon-b");

  const area = 0.5 * perimeter * apothem;
  setInnerTextById("pentagon-area", area);
}

function calculateEllipseArea() {
  const a = getInputValueById("ellipse-a");
  const b = getInputValueById("ellipse-b");

  const area = Math.PI * a * b;
  setInnerTextById("ellipse-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const value = parseFloat(inputFieldText);
  inputField.value = "";
  return value;
}

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value.toFixed(2);
}
