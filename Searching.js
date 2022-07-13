// Searching Algorithms

// Linear Search

let nums = [11, 23, 69, 45, 36, 87]
let target =  45
//  for finding 45 we can use "includes method" . icludes method uses "linear search"
function isPresent(nums , target){
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target)  return true
        }
        return false ;
    }
console.log(isPresent(nums , target));