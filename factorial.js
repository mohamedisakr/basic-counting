function factorialIterative(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// nums.forEach((n) => console.log(factorialIterative(n)));
nums.forEach((n) => console.log(factorialRecursive(n)));
