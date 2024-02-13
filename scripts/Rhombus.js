function calculateRhombusArea() {
  const rhombusD1 = getInputValueById("rhombus-d1");
  const rhombusD2 = getInputValueById("rhombus-d2");

  const area = 0.5 * rhombusD1 * rhombusD2;
  setInnerTextById("rhombus-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const value = parseFloat(inputText);
  return value;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
