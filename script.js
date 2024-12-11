// script.js

// Conversion factors
const pxPerEm = 16; // Default value: 1em = 16px
const pxPerInch = 96; // 1 inch = 96px
const  pxPerPt = 1.333; // 1pt = 1.333px

// Elements
const unitType = document.getElementById('unitType');
const inputValue = document.getElementById('inputValue');
const result = document.getElementById('result');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');

// Conversion logic
function convertUnits() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    result.textContent = "Please enter a valid number!";
    return;
  }

  let convertedValue;
  switch (unitType.value) {
    case "emToPx":
      convertedValue = value * pxPerEm;
      result.textContent = `${value}em = ${convertedValue}px`;
      break;
    case "pxToEm":
      convertedValue = value / pxPerEm;
      result.textContent = `${value}px = ${convertedValue}em`;
      break;
    case "inchToPx":
      convertedValue = value * pxPerInch;
      result.textContent = `${value} inch = ${convertedValue}px`;
      break;
    case "pxToInch":
      convertedValue = value / pxPerInch;
      result.textContent = `${value}px = ${convertedValue} inch`;
      break;
    case "ptToPx":
      convertedValue = value * pxPerPt;
      result.textContent = `${value}pt = ${convertedValue}px`;
      break;
    case "pxToPt":
      convertedValue = value / pxPerPt;
      result.textContent = `${value}px = ${convertedValue}pt`;
      break;
    default:
      result.textContent = "Invalid conversion type!";
  }
}

// Clear fields
function clearFields() {
  inputValue.value = '';
  result.textContent = '';
}

// Event listeners
convertButton.addEventListener('click', convertUnits);
clearButton.addEventListener('click', clearFields);
