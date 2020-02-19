/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {

  let romanNumCache = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let convertedNum = 0

  for(let i = 0; i < s.length; i++) {

    if ((s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) || (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) || (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))) {
      convertedNum -= romanNumCache[s[i]]
      i += 1
    }

    convertedNum += romanNumCache[s[i]]

  }

  return convertedNum  
  
}

romanToInt("MCMXCIV")