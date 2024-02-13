function calculatePentagonArea() {
    const pentagonP = getInputValueById("pentagon-p");
    const pentagonB = getInputValueById("pentagon-b");
  
    const area = 0.5 * pentagonP * pentagonB;
    setInnerTextById("pentagon-area", area);
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
  