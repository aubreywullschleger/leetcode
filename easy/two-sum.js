const twoSum = function(nums, target) {
  let cache = {}
  for (let i = 0; i < nums.length; i++) {
    let match = target - nums[i]
    if (cache.hasOwnProperty(match)) {
      return [cache[match], i]
    } else if(!cache.hasOwnProperty(nums[i])) {
      cache[nums[i]] = i
    } 
  }
}

console.log(twoSum([3,2,4], 6))