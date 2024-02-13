function calculateParallelArea() {
  const parallelB = getInputValueById("parallel-b");
  const parallelH = getInputValueById("parallel-h");

  const area = parallelB * parallelH;
  setInnerTextById("parallel-area", area);
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
