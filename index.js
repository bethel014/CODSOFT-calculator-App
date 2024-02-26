//to display the numbers on the input field..//
function addNumber(number) {
  document.getElementById("display").value += number;
}
//display the symbols..//
function addSymbol(symbol) {
  document.getElementById("display").value += symbol;
}
// clear the value on the display//
function clearDisplay() {
  document.getElementById("display").value = "";
}
//to delete a single digit//
function removeLastNum() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
// to get result of our operations//
function calculate() {
  let displayResult = document.getElementById("display").value;
  let result = eval(displayResult);
  document.getElementById("display").value = result;
}
