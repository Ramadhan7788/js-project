function isPositive(number) {
    return number > 0;
}

function isNegative(number) {
    return number <0;
}

function isZero(number) {
    return number === 0;
}

function isEven(number) {
  return number % 2 === 0;
}

const positive = 5;
const negative = -2;
const zero = 0;
const even = 8;
const odd = 9;


console.log(isPositive(positive));
console.log(isNegative(negative));
console.log(isZero(zero));
console.log(isEven(even));
console.log(!isEven(odd));