// // 17 August session

// Question no. => 1  Promise Question

// Promise.resolve('Success!')
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return 'actually, that worked'
//   })
//   .then(data => {
//     throw Error('The fails!')
//   })
//   .catch(error => console.log(error.message))


// Question no. => 2  Promise Question

//   new Promise((resolve, reject) => {
//     resolve('Welcome!!')
//   })
//   .then(() => {
//     throw Error('Do not go anywhere')
//   })
//   .catch(error => {
//     return "Come to the village"
//   })
//   .catch(error => console.log(error.message))


// // 18 August session


// // Question no. => 3  Basic  Question

// var sum = 0.1+0.2
// // console.log(sum)

// if(sum == 0.3){
//   console.log("true")
// }else{
//   console.log("false") ;
// }


// // closure is the combination of a function with References to its the Lexical Environment
// // var => Global / Fuctional  scope , start from  point top of the Document / Function
// // Let / Const => Block scope ,  start from  point where it is declared


// // Closures Question

// // Question no. => 4   what will be the Output ??

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a) ;
//     console.log(b) ;
//   })(1) ;
// })(0) ;


// // / Question no.=> 5  print  1 to  5  in a interval of  1 second ??. 

// // Solution ==>> 1
// for(let i=1 ; i<=5; i++){
//   setTimeout( function log() {
//     console.log(i) ;
//   }, i*1000);
// }


function multiply(num1,num2) {
  console.log(num1*num2)
 return (num1*num2)
}

const triple = multiply(3) ;
triple() ;

