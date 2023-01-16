// // Read on JavaScript.info  and  javascripttutorial.net for Deep  Understanding

// // Synchronous Programming :  Line by line
function foo(){
    console.log("Inside Function") ;
}
console.log("start") ;
foo() ;
console.log("End") ;
// output==> start
//           Inside Function
//           End


// Asynchronous Programming :  

console.log("starting") ;
setTimeout(() => {
    console.log("Asynchronous Programming")
}, 1000);
console.log("Ending") ;
// output => starting
//           Ending
//           Asynchronous Programming


// Example :-1  Iss example mein pahle starting print hoga , uske baad settime out web API mein chala jayega . uske baad 
// console.log(nm) ; ko  "Shivansh Rawat" print karna chaiye par woh undefined dega kyunki nm ki value 3 seconds baad print hogi 
// aur JS wait nahi karega toh wo nm ki value undefined dekar aage jakar ending print karega . After 3 seconds , console.log 
// print hoga jo setTimeout ke andar hai . it means , name("Shivansh Rawat") value  never Prints .

console.log("starting") ;

function getName(name){
    setTimeout(() => {
        console.log("Name Inside Set-Timeout") ;
        return name ;
    }, 3000);
}
const nm = getName("Shivansh Rawat") ;
console.log(nm) ;
console.log("Ending") ;

// output => starting
//           Undefined
//           Ending
//           Name Inside Set-Timeout


// For solving Above problem , we use CallBack Function

console.log("starting") ;

function getName(name , callback){
    setTimeout(() => {
        console.log("Name Inside Set-Timeout") ;
        callback (name) ;
    }, 3000);
}
const nm = getName("Shivansh Rawat" , function callback(nm){
    console.log(nm)
}) ;
console.log(nm) ;
console.log("Ending") ;
// output => starting
//           Undefined
//           Ending
//           Name Inside Set-Timeout
 //              Shivansh Rawat


// When there is large data , then callback function  becomes  callback-Hell (means , their is so many 
// callback function inside callbacks) it is difficult to understand .


// For solving  Callback Hell , we used ====>>  " Promises "

// Definition-->>  A promise is an object representing the eventual Completetion or failure of an 
//                 Asynchronous operation . a JS promise object contains both the producing code and calls
//                 to the consuming code. It can be used to deal with Asynchronous operation in JavaScript .

// there are 3 state of promise :-
// Pending --> Intial state , Not yet Resolved  or  Rejected
// Fullfilled -->  Promise  Completed, it returns a Value.
// Rejected -->  Promise  Failed, it returns a Reason.

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

// // THEN method :-

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


// // CATCH method :-     // syntax:-  catch(callback)

// // Where the callback is a function called when the Promise is Rejected. This function has 
// // one argument error -> The Rejection Error

const promiseName = new Promise((res,rej)=>{     
    let req = 67                       
    if(req === 34){                         
    res("Request Success");                       
    }else{                          
    rej("Request rejected") ;                         
    }                           
 });
promiseName
           .then((value) => console.log(value))
           .catch((error) => console.log(error)) ;

                        

// // FINALLY method : it runs in both case (res or rej)

const prakash = new Promise((res,rej)=>{     
    let req = 67                       
    if(req === 34){                         
    res("Request Success");                       
    }else{                          
    rej("Request rejected") ;                         
    }                           
 });
prakash
           .then((value) => console.log(value))
           .catch((error) => console.log(error)) 
           .finally(()=>console.log("Cleaned")) ;


 //    Example=>1  for using Catch , we give intentionally  Error

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
        return value ;
    }
).then(      // intentionally putting value = 0 for checking Error
    (value = 0) => {
               throw new Error("Error done intentionally / Deliberately") 
}
).catch((error)=> console.log(error)) ;

// output ==>>   Error: Error done intentionally / Deliberately


//  //    Example=>2

console.log("starting Callback Hell") ;

function getName(name , callback){
    setTimeout(() => {
        console.log("Name Inside Set-Timeout") ;
        callback (name) ;
    }, 3000);
}
function getHobbies(name , callback){
    setTimeout(() => {
        console.log(" Inside Hobbies Set-Timeout") ;
        callback (['cricket' , 'Reading' , 'Dancing']) ;
    }, 1000);
}

const nm = getName("Shivansh Rawat" , (nm)=>{ getHobbies(nm , hobby =>{console.log(hobby)})
                                                 
}) ;

console.log("Ending ") ;

// //  Solving  Above Callback hell Example  by using  Promise

console.log("solving Callback Hell example with Promise") ;

function getName(name ){
   return new Promise((res,rej)=>{ 
    setTimeout(() => {
        console.log("Name Inside Set-Timeout") ;
        res (name) ;
    }, 3000);
})
}

function getHobbies(hobby ){
    return new Promise((res,rej)=>{ 
     setTimeout(() => {
         console.log(" Inside Hobbies Set-Timeout") ;
         res (['cricket' , 'Reading' , 'Dancing']) ;
     }, 3000);
 })
 }
 
getName('Govind Verma')
                      .then(nm => getHobbies(nm))
                      .then(hobby => console.log(hobby))
                      .catch((error)=>console.log(error)) ;

console.log("Ending Promise") ;

// //  Output of Callback Hell and Promise are same =>   solving Callback Hell example with Promise
// //                                                    Name Inside Set-Timeout
// //                                                    Inside Hobbies Set-Timeout
// //                                                    [ 'cricket', 'Reading', 'Dancing' ]   
// //                                                     Ending Promise


// //  Solving  Above Promise Example  by using  Async and Await  && for error  try and catch

console.log("solving Promise example with Async and Await") ;

function getName(name ){
   return new Promise((res,rej)=>{ 
    setTimeout(() => {
        console.log("Name Inside Set-Timeout") ;
        res (name) ;
    }, 3000);
})
}

function getHobbies(hobby ){
    return new Promise((res,rej)=>{ 
     setTimeout(() => {
         console.log(" Inside Hobbies Set-Timeout") ;
         res (['cricket' , 'Reading' , 'Dancing']) ;
     }, 3000);
 })
 }

async function showHobby(){
    try{
        const nm = await getName('prakash')
    const hobby = await getHobbies(nm)
    console.log(hobby)
    } catch {
        console.log("For handling error Async and Await in we use try and catch")
    }
    }
showHobby() ;


// Interview questions
function promisify(number, increase){
    return new Promise(resolve => setTimeout(() => resolve(number * 2 + increase), 100))
    }
    
    async function double(number, increase) {
    const value = await promisify(number, increase); return value;
    }
    
    async function run() {
    let result; result = await double(5, 0)
    result = await double(10, result)
    result = await double(20, result)
    console.log(result)
    }
    run();