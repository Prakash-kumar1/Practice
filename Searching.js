// Searching Algorithms

// // Linear Search

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


// Binary Search-: First sort the Array

let nus = [11, 23, 36, 45, 69, 87, 99]
target = 11

let start = 0;
let end = nus.length-1 ;

while(start <= end){
    let middle = Math.floor(start+end / 2);
    if(nus[middle] == target){
        console.log('found at' , middle)
        start += 1 ;
        end -= 1;
        break ;
    }else if(nus[middle] < target){
        start = middle + 1;
    }else{
        end = middle - 1 ;
    }
}
