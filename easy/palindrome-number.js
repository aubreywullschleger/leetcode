/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let xToString = x.toString()
  let stringNum = xToString.split("").reverse().join("")  
  return stringNum === xToString
}

isPalindrome(-1221)