/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let hugeNum = 2**31
  let reverseNum = parseInt(`${x}`.split("").reverse().join(""))
  if(x < 0 && x > -hugeNum && -reverseNum > -hugeNum) {
    return -reverseNum
  } else if (reverseNum > 0 && reverseNum < hugeNum){
    return reverseNum
  } else {
    return 0
  }
}

console.log(reverse(1534236469))
console.log(reverse(-1563847412))
console.log(reverse(-156))
console.log(reverse(412))