// // Read on JavaScript.info  and  javascripttutorial.net for Deep  Understanding

// // Synchronous Programming :  Line by line
// function foo(){
//     console.log("Inside Function") ;
// }
// console.log("start") ;
// foo() ;
// console.log("End") ;
// // output==> start
// //           Inside Function
// //           End


// // Asynchronous Programming :  
// console.log("starting") ;
// setTimeout(() => {
//     console.log("Asynchronous Programming")
// }, 1000);
// console.log("Ending") ;
// // output => starting
// //           Ending
// //           Inside Set-Timeout


// // Example :-1  Iss example mein pahle starting print hoga , uske baad settime out web API mein chala jayega . uske baad 
// // console.log(nm) ; ko  "Shivansh Rawat" print karna chaiye par woh undefined dega kyunki nm ki value 3 seconds baad print hogi 
// // aur JS wait nahi karega toh wo nm ki value undefined dekar aage jakar ending print karega . After 3 seconds , console.log 
// // print hoga jo setTimeout ke andar hai . it means , name("Shivansh Rawat") value  never Prints .

// console.log("starting") ;

// function getName(name){
//     setTimeout(() => {
//         console.log("Name Inside Set-Timeout") ;
//         return name ;
//     }, 3000);
// }
// const nm = getName("Shivansh Rawat") ;
// console.log(nm) ;
// console.log("Ending") ;

// // output => starting
// //           Undefined
// //           Ending
// //           Name Inside Set-Timeout


// // For solving Above problem , we use CallBack Function

// console.log("starting") ;

// function getName(name , callback){
//     setTimeout(() => {
//         console.log("Name Inside Set-Timeout") ;
//         callback (name) ;
//     }, 3000);
// }
// const nm = getName("Shivansh Rawat" , function callback(nm){
//     console.log(nm)
// }) ;
// console.log(nm) ;
// console.log("Ending") ;
// // output => starting
// //           Undefined
// //           Ending
// //           Name Inside Set-Timeout
//               Shivansh Rawat


// When there is large data , then callback function  becomes  callback-Hell (means , their is so many 
// callback function inside callbacks) it is difficult to understand .


// For solving  Callback Hell , we used ====>>  " Promises "

// Definition-->>  A promise is an object representing the eventual Completetion or failure of an 
//                 Asynchronous operation . a JS promise object contains both the producing code and calls
//                 to the consuming code. It can be used to deal with Asynchronous operation in JavaScript .

// there are 3 state of promise :-
// Pending --> Intial state , Not yet Resolved  or  Rejected
// Resolved -->  Promise  Completed
// Rejected -->  Promise  Failed

// // Syntax of Promise ==> This syntax code is also known as "Producing Code"

// const promise anyName = new Promise((resolve,reject)=>{
//     Do Asynchronous operation
//     resolve(value)
//     reject(Error)
// })

// // Function returning  a  Promise : syntax :

// function myFunction(){
//     return new Promise((resolve , reject)=>{

//     })
// }


//                                          Promises Syntax


//const promiseName = new Promise((res,rej)=>{     *         const promiseName = new Promise((res,rej)=>{
// let req = true                                   *         let req = true
// if(req == true){                                 *           if(req == true){
// resolve("Request Success");                      *            resolve("Request Success");
// }else{                                            *           }else{
// reject("Request rejected") ;                      *             reject("Request rejected") ;
// }                                                  *           }
// }) ;                                               *           }) .then(
// promiseName.then(                                  *                      (value) => {console.log(value) ;} ,
// (value) => {console.log(value) ;} ,                 *                      (error) => {console.log(error) ;} ,
// (error) => {console.log(error) ;} ,                 *               ) ;
// ) ;                                                 *

// THEN method :-

const promiseObj = new Promise((res,rej)=>{ 
  let num = 10 ;
  res(num);
}).then(
    (value) => {console.log(value) ;
    return value + 10 ;
    }
).then(
    (value)=>{
        console.log(value) ;
        return value + 20 ;
    }
).then(
    (value)=>{
        console.log(value) ;
    }
) ;






