function sum(arr) {
  return arr.reduce((prev, next) => {
    return prev + next;
  });
}
function minus(arr) {
  return arr.reduce((prev, next) => {
    return prev - next;
  });
}
function multiply(arr) {
  return arr.reduce((prev, next) => {
    return prev * next;
  });
}
function divide(arr) {
  return arr.reduce((prev, next) => {
    return prev / next;
  });
}

const operators = {
  "+": sum,
  "-": minus,
  "*": multiply,
  "/": divide
}

function evaluateReversePolishNotion(arr) {
  let stack = [];
  let index = 0;
  let temp;

  while(arr[index]) {
    if(typeof arr[index] === 'number') {
      stack.push(arr[index])
    } else {
      const operator = arr[index];
      temp = operators[operator](stack);
      stack = [];
      stack.push(temp);
    }
    ++index;
  };

  return stack[0];
}
