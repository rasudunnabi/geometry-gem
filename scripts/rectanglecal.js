function calculateRecArea() {
  // get w
  const recW = document.getElementById("rec-w");
  const recWText = recW.value;
  const w = parseFloat(recWText);

  // get l
  const recL = document.getElementById("rec-l");
  const recLText = recL.value;
  const l = parseFloat(recLText);

  const recArea = w * l;

  // display recArea
  const recAreaSpan = document.getElementById("rec-area");
  recAreaSpan.innerText = recArea;
}


