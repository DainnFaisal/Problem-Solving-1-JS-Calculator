let expression = '';

function appendNumber(number) {
  expression += number;
  updateResult();
}

function appendOperator(operator) {
  expression += operator;
  updateResult();
}

function clearResult() {
  expression = '';
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function updateResult() {
  document.getElementById('result').value = expression;
}
