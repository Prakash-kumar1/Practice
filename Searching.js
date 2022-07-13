// // Searching Algorithms

// // // Linear Search

// let nums = [11, 23, 69, 45, 36, 87]
// let target =  45
// //  for finding 45 we can use "includes method" . icludes method uses "linear search"
// function isPresent(nums , target){
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === target)  return true
//         }
//         return false ;
//     }
// console.log(isPresent(nums , target));


// // Binary Search-: First sort the Array

// let nus = [11, 23, 36, 45, 69, 87, 99]
// target = 11

// let start = 0;
// let end = nus.length-1 ;

// while(start <= end){
//     let middle = Math.floor(start+end / 2);
//     if(nus[middle] == target){
//         console.log('found at' , middle)
//         start += 1 ;
//         end -= 1;
//         break ;
//     }else if(nus[middle] < target){
//         start = middle + 1;
//     }else{
//         end = middle - 1 ;
//     }
// }

// // Strings -: This is a Spread Operator.
// let fname = 'Prakash'
// let lname = 'kumar'
// console.log(fname+" "+lname)

// // how to get "Prakash kumar" in single quotes? 
// console.log(`"${fname}"'${lname}'`)
// console.log(fname[0],lname[2])

// // Print all the alphabets or characters? 
// for(let i=0; i<fname.length; i++){
//     console.log(fname[i])

// }

// // String are immutable means we can't change their characters
// // in string we can't change one value but we can change whole string

// let gname = 'vasantkumarvingyam'
// // it can't change but only give index value at 1 
// gname[1] = 'j'
// console.log(gname[1])

// gname = 'dore'
// // we can change only whole string
// console.log(gname)

// // comparing two strings=: it compares value not addresses. 
// let fname = 'Prakash'
// let lname = 'Prakash'
// console.log(fname === lname)

// // // in case of array it gives false because array stores address.
// let fname = ['Prakash']
// let lname = ['Prakash']
// console.log(fname === lname)

// // // Loadash website is very Important

// // Chang String into uppercase  and lowercase
// let tname = 'shivanshrawat'
// console.log(tname.toUpperCase())

// let kname = 'PRAKASHKUMAR'
// console.log(kname.toLowerCase())

// // Remove spaces : trim method used in all chat application , in all search engine etc.
// let kname = '           PRAKASHKUMAR         '
// console.log(kname.trim())
// console.log(kname.trimEnd())
// console.log(kname.trimStart())

// // Replacing Characters
// let fname = 'vasantha' ;
// console.log(fname.replace('a' , 'j'))

// // Replacing all characters
// console.log(fname.replaceAll('a' , 'j'))

// let news = 'India won the world cup'
// console.log(news.replace('India' , 'pakistan'))

//  let news = 'India won the world cup. India won the world cup after 2011. India is a bad country, and also India is a poor country'
// console.log(news.replaceAll('India' , 'pakistan'))

