/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const matches = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  }

  let stack = []
  let valid = true

  for (let i = 0; i < s.length; i++) {
    if (matches.hasOwnProperty([s[i]])) {
      let potentialMatch = stack.pop()
      if (matches[s[i]] !== potentialMatch) {
        valid = false
        return valid
      } else if (stack.length === 0) {
        valid = true
      }
    } else {
      stack.push(s[i])
      valid = false
    }
    
  }
  return valid 
}

isValid("(([])}")