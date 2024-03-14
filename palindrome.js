/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // handle negative numbers and numbers ending with zer (excluding zero itself)
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversed = 0;
  let original = x;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }
  return original === reversed;
};

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
