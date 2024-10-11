function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  const area = parseFloat(0.5 * base * height);
  setInnerTextById("triangle-area", area);
  displayArea("Triangle", area);
}

function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");

  const area = width * length;
  setInnerTextById("rectangle-area", area);
  displayArea("Rectangle", area);
}

function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");

  const area = base * height;
  setInnerTextById("parallelogram-area", area);
  displayArea("Parallelogram", area);
}

function calculateRhombusArea() {
  const d1 = getInputValueById("rhombus-d1");
  const d2 = getInputValueById("rhombus-d2");

  const area = d1 * d2;
  setInnerTextById("rhombus-area", area);
  displayArea("Rhombus", area);
}

function calculatePentagonArea() {
  const perimeter = getInputValueById("pentagon-p");
  const apothem = getInputValueById("pentagon-b");

  const area = 0.5 * perimeter * apothem;
  setInnerTextById("pentagon-area", area);
  displayArea("Pentagon", area);
}

function calculateEllipseArea() {
  const a = getInputValueById("ellipse-a");
  const b = getInputValueById("ellipse-b");

  const area = Math.PI * a * b;
  setInnerTextById("ellipse-area", area);
  displayArea("Ellipse", area);
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

// change background dynamically
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.addEventListener("mouseover", function (event) {
    card.style.backgroundColor = "lightpink";
  });
  card.addEventListener("mouseout", function (event) {
    card.style.backgroundColor = "";
  });
}

let i = 1;
function displayArea(name, area) {
  const fixed = area.toFixed(2);
  const table = document.getElementById("display-data");
  table.innerHTML += `
    <tr>
        <th>${i++}</th>
        <td>${name}</td>
        <td>${fixed}</td>
        <td class="px-2 bg-blue-700 text-white rounded-lg"><button>Convert to m<sup>2</sup></td>
    </tr>
    `;
}
