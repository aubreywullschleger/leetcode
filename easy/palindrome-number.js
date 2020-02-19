const isPalindrome = function(x) {
  let xCopy = x

  if (x < 0) {
    return false
  } 

  let reversedNum = 0
    while (xCopy > 0) {
      reversedNum = reversedNum * 10 + xCopy % 10
      xCopy = parseInt(xCopy/10)
    }
    
  return x === reversedNum
}

isPalindrome(123421)