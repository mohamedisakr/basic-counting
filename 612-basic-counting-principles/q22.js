/*
22. How many positive integers less than 1000
    a) are divisible by 7?
    b) are divisible by 7 but not by 11?
    c) are divisible by both 7 and 11?
    d) are divisible by either 7 or 11?
    e) are divisible by exactly one of 7 and 11?
    f ) are divisible by neither 7 nor 11?
    g) have distinct digits?
    h) have distinct digits and are even?
*/
const start = 1;
const end = 999;

function divideBy(divisor) {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// b) are divisible by 7 but not by 11?
function divideBy7ButNot11() {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0 && i % 11 !== 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// d) are divisible by either 7 or 11?
function divideBy7Or11() {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0 || i % 11 === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// f ) are divisible by neither 7 nor 11?
function divideByNeither7Nor11() {
  let divisors = [];
  for (let i = start; i <= end; i++) {
    if (i % 7 !== 0 && i % 11 !== 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function hasUniqueDigits(num) {
  let n = num;
  let theDigits = new Array(10);
  while (n) {
    if (theDigits[n % 10]) {
      return false;
    }
    theDigits[n % 10] = true;
    n = Math.floor(n / 10);
  }
  return true;
}

function hasUniqueDigitsAndEven(num) {
  return hasUniqueDigits(num) && num % 2 === 0;
}

// g) have distinct digits?
// Function to print unique digit numbers
// in range from l to r.
function printUnique(l, r) {
  let nums = [];
  // Start traversing the numbers
  for (let i = l; i <= r; i++) {
    let num = i;
    let theDigits = new Array(10);

    // Find digits and maintain its hash
    while (num) {
      // if a digit occurs more than 1 time then break
      if (theDigits[num % 10]) break;

      theDigits[num % 10] = true;

      num = Math.floor(num / 10);
    }

    // num will be 0 only when above loop
    // doesn't get break that means the
    // number is unique so print it.
    if (num == 0) {
      nums.push(num);
    }
  }
  return nums;
}

//  h) have distinct digits and are even?
function printUniqueAndEven(l, r) {
  let nums = [];
  // Start traversing the numbers
  for (let i = l; i <= r; i++) {
    let num = i;

    let theDigits = new Array(10);

    if (num % 2 !== 0) {
      continue;
    }

    // Find digits and maintain its hash
    while (num) {
      // if a digit occurs more than 1 time
      // then break
      if (theDigits[num % 10]) break;

      theDigits[num % 10] = true;

      num = Math.floor(num / 10);
    }

    // num will be 0 only when above loop
    // doesn't get break that means the
    // number is unique so print it.
    if (num == 0) {
      nums.push(num);
    }
  }
  return nums;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr = [102, 298, 310, 404, 520, 666, 716, 890, 901];
arr.forEach((item) => console.log(`${item} -> ${hasUniqueDigits(item)}`));
arr.forEach((item) =>
  console.log(`${item} -> ${hasUniqueDigitsAndEven(item)}`)
);

/*
console.log("a) are divisible by 7?");
let result = divideBy(7);
// console.log(result);
console.log(result.length);

console.log("b) are divisible by 7 but not by 11?");
result = divideBy7ButNot11();
// console.log(result);
console.log(result.length);

console.log("c) are divisible by both 7 and 11?");
result = divideBy(77);
// console.log(result);
console.log(result.length);

console.log("d) are divisible by either 7 or 11?");
result = divideBy7Or11();
// console.log(result);
console.log(result.length);

console.log("f ) are divisible by neither 7 nor 11?");
result = divideByNeither7Nor11();
// console.log(result);
console.log(result.length);

console.log("g) have distinct digits?");
result = printUnique(start, end);
console.log(result.length);

console.log("h) have distinct digits and are even?");
result = printUniqueAndEven(start, end);
console.log(result.length);
*/
