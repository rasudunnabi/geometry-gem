function calculateEllipseArea() {
    const ellipseA = getInputValueById("ellipse-a");
    const ellipseB = getInputValueById("ellipse-b");
  
    const area = 3.14 * ellipseA * ellipseB;
    setInnerTextById("ellipse-area", area);
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