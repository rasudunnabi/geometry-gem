function calculateTriangleArea() {
  // get triangle base
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  // get triangle height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);

  const area = 0.5 * base * height;

  //   display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area")
  triangleAreaSpan.innerText = area
}
