const add = (x,y) => x+y;

const subtract = (x,y) => x-y;

function sum(arr) {
  let total = 0;
  for (const value of arr) {
    total += value;
  }
  return total;
}

const multiply = (x,y) => x*y;

const power = (x,y) => {
  let total = 1;
  for (i = 0; i<y ;i++){
    total *= x;
  }
  return total;
}

const factorial = (x) => {
  let total = 1

  for (i=1; i<=x; i++) {
    total *= i;
  }
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
