function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText);

  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const triangleHeight = parseFloat(triangleHeightText);

  const triangleArea = 0.5 * triangleBase * triangleHeight;
  const triangleAreaDisplay = document.getElementById("triangle-area");
  triangleAreaDisplay.innerText = triangleArea;

  triangleBaseInput.value = "";
  triangleHeightInput.value = "";
  console.log(triangleArea);
}
