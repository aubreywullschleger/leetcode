/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let foundPrefix = {}
  
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++ ){
      if(typeof strs[i+1] !== "undefined" && strs[i][j] === strs[i+1][j] && !foundPrefix[strs[i][j]]) {
        foundPrefix[strs[i][j]] = 1
      } else if (typeof strs[i+1] !== "undefined" && strs[i][j] === strs[i+1][j] && foundPrefix[strs[i][j]]) {
        foundPrefix[strs[i][j]] += 1
      }
    }
  }
  console.log(foundPrefix)
  // let arr = Object.values(foundPrefix);
  // let max = Math.max(...arr);
  // console.log(arr)
  // console.log(max)
    // for each string in strings array
      //check if first character in string is same as first character in the other strings 
        // continue as long as each next char matches the same place in each string in array
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))