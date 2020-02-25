/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let currentWord = strs[0]
  let foundPrefix = ""
  for (let i = 0; i < strs.length; i++) {
    foundPrefix = ""
    for (let j = 0; j < currentWord.length; j++) {
      if (currentWord[j] === strs[i][j] && currentWord[0] === strs[i][0]) {
        foundPrefix += currentWord[j]
      }
    }
    currentWord = foundPrefix
  } 
  return foundPrefix  
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["aba","cba"]))