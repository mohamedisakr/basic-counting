/*
20. How many positive integers between 5 and 31
    a) are divisible by 3? Which integers are these?
    b) are divisible by 4? Which integers are these?
    c) are divisible by 3 and by 4? Which integers are these?
*/
const start = 5;
const end = 31;

function divideBy(divisor) {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// let result = divideBy(3);
// console.log(result);
// console.log(result.length);

let result = divideBy(4);
console.log(result);
console.log(result.length);

// let result = divideBy(12); //divideBy2Numbers(3, 4);
// console.log(result);
// console.log(result.length);

/*
function divideBy2Numbers(a, b) {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % a === 0 && i % b === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
*/
