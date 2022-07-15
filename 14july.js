// // Pushing values of a array to a NewArray

// let array = [1, 2, 3, 4, 5, 6]
// let NewArray = []
// for(let i=0; i<array.length; i++){
//     NewArray.push(array[i])
// }
// console.log(NewArray)

// //     OR use Spread Operator
//  array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  NewArray = [...array]
//  console.log(NewArray)


// // // How to find a word in Paragraph? - : in array we used includes method but in string we used Flag method

// let news = 'india won the world cup. India won the world cup after 2011. india is a bad country, and also India is a poor country'
// let target = 'won'

// // first convert string into Array using split  and {by using join method we convert Array into String.}
// let newsArray = news.split(' ')

// let isPresent = false ;
// for(let i=0; i<newsArray.length; i++){
//     if(newsArray[i] === target){
//         isPresent = true ;
//     }
// }
// console.log(isPresent)


// // // // Using endswith method-: it checks the string ends with the parameter or not.

// // // Example-1:  
// let email = 'kumarsanju4881@gmail.coxfgh'

// if(email.endsWith('xfgh')){
//     console.log('valid email')
// }else{
//     console.log('Invalid email')
// }

// // // // Using startsswith method-: it checks string starts with parameter or not
// let mobilenumber = '+91 8127874881'

// if(mobilenumber.startsWith('+91')){
//     console.log('valid mobilenumber')
// }else{
//     console.log('Invalid mobilenumber')
// }

// // // Example-2:  
// let mobile = '96489962769'

// if(mobile.length == 10){
//     console.log('valid number')
// }else{
//     console.log('Invalid number')
// }


// // // Example-3:  
let mobile = '    9648996276    '
// if we can't remove space it counts the spaces

if(mobile.trim().length == 10){
    console.log('valid number')
}else{
    console.log('Invalid number')
}

// ----->   AFTER INTEVAL    <-------


// // how many 'a' are present? 

// let word = 'vasanth kumar vinayagam'
// let target = 'a' ;
// let count = 0 ;

// for(let i=0; i<word.length; i++){
//     if(word[i] === target){
//         count += 1 ;
//     }
// }
// console.log(count)
// //  in case of var  it gives output '5' 5btimes & in case of let it gives  0,1,2,3,4 . this property is called "closure"
// for(var i=0; i<6; i++){
//     setTimeout( () => { 
//         console.log(i) ;
//     },1000)
// }

// // // for of loop
// let nums = [1,2,3,4,5]
// for(let i=0; i<nums.length;i++){
//     console.log(i)
// }
// // OR used this method

//  for (let num of nums){
//     console.log(num)
//  }

// // Example-2:
// let names = ['sachin', 'tendulkar', 'prakash']
// for(let name of names){
//     console.log(name)
// }







