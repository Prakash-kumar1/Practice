// // Question No.-1: find unique characters ?

// let chars = ["a", "b", "a", "c", "b"]
// let uniqueArray = []
// for(let i=0; i< chars.length; i++){
//     if(! uniqueArray.includes(chars[i])){
//         uniqueArray.push(chars[i]) ;
//     }
// }
// console.log(uniqueArray) ;

// //  solving above question using Callback Method.

// let uniqueChars = chars.filter((char,index)=>{
//     // console.log(char,index)
// if you want Duplicate character just put ( !== ) in condition
//     return chars.indexOf(char) === index ;
// })
// console.log(uniqueChars) ;

// // // Example -2 for beeter understanding of question

// let arr = [1, 2,3, 1];
// for(let i=0; i<arr.length; i++){
//     console.log(i, arr.indexOf(arr[i]))
// }


// Question No.-3: find largest numbers ?

let nums = [11, 9, 4, 17, 25, 33, 19]
nums.sort((a,b) => a-b)
console.log(nums) ;
console.log(nums[nums.length - 1]) ;















