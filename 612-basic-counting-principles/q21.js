/*
21. How many positive integers between 50 and 100
    a) are divisible by 7? Which integers are these?
    b) are divisible by 11? Which integers are these?
    c) are divisible by both 7 and 11? Which integers are these
*/

const start = 50;
const end = 100;

function divideBy(divisor) {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

let result = divideBy(7);
console.log(result);
console.log(result.length);

result = divideBy(11);
console.log(result);
console.log(result.length);

result = divideBy(77);
console.log(result);
console.log(result.length);
