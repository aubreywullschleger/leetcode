/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let stringNum = x.toString()
  let left
  let right
  if(stringNum.length % 2 !== 0) {    
    left = stringNum.slice(0, Math.floor(stringNum.length/2))
    right = stringNum.slice(Math.floor(stringNum.length/2) + 1)
  } else {
    left = stringNum.slice(0, stringNum.length/2)
    right = stringNum.slice(stringNum.length/2)
  }   
  return right.split("").reverse().join("") === left
}

isPalindrome(-1221)