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

// // // Strings -: This is also a  Spread Operator.
// let fname = 'Prakash'
// let lname = 'kumar'
// console.log(fname+" "+lname)

// // // how to get "Prakash kumar" in single quotes? 
// console.log(`"${fname}"'${lname}'`)
// console.log(fname[0],lname[2])

// // Find the length of fname and lname ?
// console.log(`"${fname.length}"'${lname.length}'`)

// // Print all the alphabets or characters? 
// for(let i=0; i<fname.length; i++){
//     console.log(fname[i])
// }

// // // String are immutable(not changeable) means we can't change their characters
// // // in string we can't change one value but we can change whole string

// let gname = 'vasantkumarvingyam'
// // it can't change but only give index value at 1 
// gname[1] = 'j'
// console.log(gname[1])

// gname = 'dore'
// // we can change only whole string
// console.log(gname)

// // // comparing two strings=: it compares value not addresses. 
// let fname = 'Prakash'
// let lname = 'Prakash'
// console.log(fname === lname)

// // // // in case of array it gives false because array stores address.
//  fname = ['Prakash']
//  lname = ['Prakash']
// console.log(fname === lname)


// // Using slice in String
// let fname = 'vasanthkumarvinayagamr'
// console.log(fname.slice(7,12))
// // it will not affect original array
// console.log(fname.slice(0,7) , fname)
// // Also using negative value of slice which is written in copy
// console.log(fname.slice(-15, -10))

// // Printing Characters in Strings
// let cname = 'Prakash-kumar-singh'
// console.log(cname.charAt(7))
// console.log(cname.charAt(12))
// console.log(cname.charAt(17))
// // when the position is not present it will give Empty Space
// console.log(cname.charAt(70))


// // // Loadash website is very Important

// // There are two methods in javascript Substring  &  Substr  which is not used Currently
// // Substring method :- Before the creation of Slice we used Substring . in substring we can't Pass -ve values. there is no need of substring
// let fname = 'vasanthkumarvinayagamr'
// console.log(fname.substring(7,12))


// // substr method -: in this method it will take length  not Ending value. IInd value give how many characters i want
// let Aname = 'vasanthkumarvinayagamr'
// // we want 12 characters
// console.log(fname.substr(7,12))



// // Chang String into uppercase  and lowercase
// let tname = 'shivanshrawat'
// console.log(tname.toUpperCase())

// let kname = 'PRAKASHKUMAR'
// console.log(kname.toLowerCase())

// // // Remove spaces : trim method used in all chat application , in all search engine etc.
// let kname = '           PRAKASHKUMAR         '
// console.log(kname)
// console.log(kname.trim())
// // it removes Right side space 
// console.log(kname.trimEnd())
// // it removes left side space 
// console.log(kname.trimStart())                   

// // // Replacing Characters
// let fname = 'vasantha' ;
// console.log(fname.replace('a' , 'j'))
// console.log(fname.replace('a' , 'good'))

// // Replacing all characters
// console.log(fname.replaceAll('a' , 'j'))
// console.log(fname.replaceAll('a' , 'bad'))

// let news = 'India won the world cup'
// console.log(news.replace('India' , 'pakistan'))

//  let news = 'India won the world cup. India won the world cup after 2011. India is a bad country, and also India is a poor country'
// console.log(news.replaceAll('India' , 'pakistan'))

// OR we can use replace , for using replace just put the value into /value/ two slashes which want to change and also write  'i' which means it become case sensetitive and g means global . there is no need of replaceAll()

 let news = 'india won the world cup. India won the world cup after 2011. india is a bad country, and also India is a poor country'
 console.log(news.replace(/india/i , 'pakistan'))
console.log(news.replace(/india/g , 'pakistan'))

// //  Concat method-:
// let mums1 = [1, 2, 3]
// let mums2 = [4, 5, 6]
// let mums3 = [7, 8, 9]

// console.log(mums1.concat(mums2))
// // in concat we can pass many parameters
// console.log(mums1.concat('vasanth', 'prakash' , mums2, mums3))


// // Spread Operator( ... ) -: it works only in Arrays and Sets not in normal numbers.
//  let mums1 = [1, 2, 3]
// let mums2 = [4, 5, 6]
// let mums3 = [7, 8, 9]
// console.log([mums1, 'vasanth', 'prakash' , mums2, mums3])
// // it will give Array but we want values and for using values we should wrap into [ ] (arrays)
// console.log([...mums1, 'vasanth', 'prakash' , ...mums2, ...mums3])
// // this is a way of copy because it creates new Array




