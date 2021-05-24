/*
(1) brute force
(2) 2 pointers
(3) recursive 
(4) iterative
*/

/**
 * using 2 pointers two pointer technique
 * @param {*} text to check weather it is palindrome
 * @returns true if text is palindrome, false otherwise
 */
function isPalindrome2Pointers(text) {
  for (let i = 0, j = text.length - 1; i < j; i++, j--) {
    if (text[i] !== text[j]) {
      return false;
    }
  }

  return true;
}

/**
 * compare a string with its reversed version
 * @param {*} text to check weather it is palindrome
 * @returns true if text is palindrome, false otherwise
 */
function isPalindromeReverse(text) {
  let rev = text.split("").reverse().join("");
  return rev === text;
}

/**
 * iterate using for loop
 * @param {*} text to check weather it is palindrome
 * @returns true if text is palindrome, false otherwise
 */
function isPalendromeForLoop(text) {
  const half = text.length / 2;
  const len = text.length - 1;
  for (let i = 0; i < half; i++) {
    if (text[i] !== text[len - i]) {
      return false;
    }
  }
  return true;
}

/**
 * use recursion
 * @param {*} text to check weather it is palindrome
 * @returns true if text is palindrome, false otherwise
 */
function isPalendromeRecursive(text) {
  const len = text.length;
  if (len === 0 || len === 1) {
    return true;
  }

  if (text[0] === text[len - 1]) {
    return isPalendromeRecursive(text.slice(1, len - 1));
  }

  return false;
}

const palindromes = [
  "mom",
  "redivider",
  "deified",
  "civic",
  "radar",
  "level",
  "rotor",
  "kayak",
  "reviver",
  "racecar",
  "madam",
  "refer",
];

const notPalindromes = ["console", "log", "the", "then", "are"];
// palindromes.forEach((text) => console.log(isPalindrome2Pointers(text)));

// palindromes.forEach((text) => console.log(isPalindromeReverse(text)));
// console.log();
// notPalindromes.forEach((text) => console.log(isPalindromeReverse(text)));

// palindromes.forEach((text) => console.log(isPalendromeForLoop(text)));
// console.log();
// notPalindromes.forEach((text) => console.log(isPalendromeForLoop(text)));

palindromes.forEach((text) => console.log(isPalendromeRecursive(text)));
console.log();
notPalindromes.forEach((text) => console.log(isPalendromeRecursive(text)));

// */
