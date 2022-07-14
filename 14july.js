// // How to find a word in Paragraph? - : in array we used includes method but in string we used Flag method

// let news = 'india won the world cup. India won the world cup after 2011. india is a bad country, and also India is a poor country'
// let target = 'won'

// // first convert into Array using split 
// let newsArray = news.split(' ')

// let isPresent = false ;
// for(let i=0; i<newsArray.length; i++){
//     if(newsArray[i] === target){
//         isPresent = true ;
//     }
// }
// console.log(isPresent)


// // // Using endswith method-:

// // Example-1:  
// let email = 'kumarsanju4881@gmail.com'

// if(email.endsWith('m')){
//     console.log('valid email')
// }else{
//     console.log('Invalid email')
// }

// // // // Using startsswith method-:
// let mobilenumber = '+91 8127874881'

// if(mobilenumber.startsWith('+91')){
//     console.log('valid mobilenumber')
// }else{
//     console.log('Invalid mobilenumber')
// }

// // Example-2:  
// let mobile = '96489962769'

// if(mobile.length == 10){
//     console.log('valid number')
// }else{
//     console.log('Invalid number')
// }


// // // Example-3:  
// let mobile = '    9648996276    '
// // if we can't remove space it counts the spaces

// if(mobile.trim().length == 10){
//     console.log('valid number')
// }else{
//     console.log('Invalid number')
// }

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
//  in case of var  it gives output '5' 5btimes & in case of let it gives  0,1,2,3,4 . this property is called "closure"
for(var i=0; i<5; i++){
    setTimeout( () => { 
        console.log(i) ;
    },1000)
}

