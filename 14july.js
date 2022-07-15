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


// // // // Example-3:  
// let mobile = '    9648996276    '
// // if we can't remove space it counts the spaces

// if(mobile.trim().length == 10){
//     console.log('valid number')
// }else{
//     console.log('Invalid number')
// }

// // how to remove a single digit from a number ??

// let number = '8765895483780281873987658'
// // removes 8 
// console.log(number.replace(/8/g , '')) ;

// // how to reverse a number ??
//  number = '8765895483780281873987658'
// console.log(number.split('').reverse().join('--->'))

// // Example number - 2:
//  let name ='Prakash'
//  let reversedName = ''

// for(let i=0; i<name.length; i++){
//     reversedName = name[i] + reversedName ;
// }
// console.log(reversedName) ;

// //  or also use this way

// for(let i= name.length-1; i>=0; i--){
//     reversedName += name[i] ;
// }
// console.log(reversedName) ;

// //  How to reverse each word in a sentence ??
// // for reversing each word we need to use spilt and make each word a Array after that we reverse each array

// let teachers = 'Prakash is a genius programmer of this world'
 
// let Reverse = '' 

// console.log(teachers.split(''))

// for(let i= teachers.length-1; i>=0; i--){
//         Reverse += teachers[i] ;
//     }
//     console.log(Reverse) ;


// // match property :

// let teachers = 'prakash is a genius programmer of this world'

// console.log(teachers.match(/is/))
// // if not presents it gives null
// console.log(teachers.match(/in/))
// console.log(teachers.match(/P/))

// // Anagram :-  characters are same . like God , Dog  and  sheep,heeps
// // first we make each element a Array then we need to sort . after this both are equal but it gives 'not an anagram' because both array stores different address so , we need to again make string by using 'join'. 
// let word1 = 'god' ;
// let word2 = 'dog' ;

// if(word1.split('').sort().join('') == word2.split('').sort().join('')){
//     console.log('anagram')
// }else{
//     console.log('not anagram')
// }
// // All Palindromes are Anagrams and not vice-versa


// ----->   AFTER INTEVAL    <-------


// // // how many 'a' are present? 

// let word = 'vasanth kumar vinayagam'
// let target = 'a' ;
// let count = 0 ;

// for(let i=0; i<word.length; i++){
//     if(word[i] === target){
//         count += 1 ;
//     }
// }
// console.log(count)


// //  in case of var  it gives output '5' 5btimes & in case of let it gives  0,1,2,3,4 . this property is called "closure". Read about scopes on MDN.

// for(var i=0; i<6; i++){
//     setTimeout( () => { 
//         console.log(i) ;
//     },1000)
// }

// // // for of loop
let nums = [1,2,3,4,5] ;
for(let i=0; i<nums.length;i++){
    console.log(i) ;
}
// OR used this method

 for (let num of nums){
    console.log(num) ;
 }


// // Example-2:
// let names = ['sachin', 'tendulkar', 'prakash']
// for(let name of names){
//     console.log(name)
// }







