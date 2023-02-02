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
const nm1 = getName("Shivansh Rawat" , function callback(nm1){
    console.log(nm1)
}) ;
console.log(nm1) ;
console.log("Ending") ;
// output => starting
//           Undefined
//           Ending
//           Name Inside Set-Timeout
 //              Shivansh Rawat

// question:-2=>>  what is callback hell ??
// answer =>>  The phenomenon which happens when we nest multiple callbacks within a function is called a callback 
//             hell. The shape of the resulting code structure resembles a pyramid and hence callback hell
//       is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain.

// ***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// Definition-->>  A promise is an object representing the eventual Completetion or failure of an 
//                 Asynchronous operation . a JS promise object contains both the producing code and calls
//                 to the consuming code. It can be used to deal with Asynchronous operation in JavaScript .

// there are 3 state of promise :-
// Pending --> Intial state , Not yet Resolved  or  Rejected
// Fullfilled -->  Promise  Completed, it returns a Value.
// Rejected -->  Promise  Failed, it returns a Reason.

// Syntax of Promise ==> This syntax code is also known as "Producing Code"

// const promise anyName = new Promise((resolve,reject)=>{
//     Do Asynchronous operation
//     resolve(value)
//     reject(Error)
// })

// Promise Example :1- 
const bucket = ['coffee', 'chips', 'vegetables', 'rice', 'salt'] ;

const friedRice = new Promise((res, rej)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        res("Fried Rice") ;
    } else {
        rej("Couldn't make it")
    }
})

// how to consume Promise
friedRice.then((myfriedRice) => {
    console.log("let's eat together", myfriedRice) ;
}
// jab promise reject hoga
).catch((error)=>{console.log(error)})

// Promise Example :2-

function prom(a, b){
    return new Promise(function(resolve, reject){
        console.log("Fetching data please wait ==>>  pending state")
        var c = a/b;
        setTimeout(()=>{
            if(a,b){
                resolve(`Your answer is : ${c}`)
            }else{
                reject("Failed to calculate")
            }
        }, 2000)
    }) ;
}

prom(9, 0).then((result) => {
    console.log(result)
}).catch((error)=> {
    console.log(error)
})


// promise chaining example
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

const promiseObj1 = new Promise((res,rej)=>{ 
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

const nm2 = getName("Shivansh Rawat" , (nm2)=>{ getHobbies(nm2 , hobby =>{console.log(hobby)})
                                                 
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

// ***********************************************************************************************************************************************************************************************************************************************************8
//                              "async and await make promises easier to write"

//           async makes a function return a Promise                        await makes a function wait for a Promise

// Example ==>> 1

	// const getData = async() => {
	// 	var y = await "Hello World";
	// 	console.log(y);
	// }
	
	// console.log(1);
	// getData();
	// console.log(2);


// Question no:-1 ==>>   why we use async await instead of promises ??
// answer :-   Async/Await is used to work with promises in asynchronous functions. 
//          It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises 
//            easier to read & use.

// Basic Example of Async/await
const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);


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



// Interview questions => 1
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


    
// Question no-20=> flatten array using recursion ??
// Answer => 
function flattenArray(inpuArray){
    let outputArray = [] ;
    recursion(0, inpuArray, outputArray) ;
    return outputArray ;
}

function recursion(index, inpuArray, outputArray){
    if(index >= inpuArray.length) return;

    if(Array.isArray(inpuArray[index])){
        recursion(0, inpuArray[index], outputArray)
    } else{
        outputArray.push(inpuArray[index])
    }
    recursion(index + 1, inpuArray, outputArray )
}
let flatArray = flattenArray([1,2,[3,[4,[5]],6],7,[8,9],10])
console.log(flatArray) ;

// // 17 August session (Wednesday) and 18 August session (Thursday) by Aman (Microsoft)

// Question no. => 1  Promise Question

Promise.resolve('Success!')
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return 'actually, that worked'
  })
  .then(data => {
    throw Error('The fails!')
  })
  .catch(error => console.log(error.message))


// Question no. => 2  Promise Question

  new Promise((resolve, reject) => {
    resolve('Welcome!!')
  })
  .then(() => {
    throw Error('Do not go anywhere')
  })
  .catch(error => {
    return "Come to the village"
  })
  .catch(error => console.log(error.message));


//!!!@@@@@___----===>>>>   Free Code camp Promise example  <<<----===== !!!@@@@@___----===>>>>  
let stocks = {
    Fruits : ["strawberry", "Banana", "grapes", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
    };
    
    let is_shop_open = true ;
    
    let order = (time, work) => {
    return new Promise((res, rej) => {
    if (is_shop_open){
    setTimeout(() => {
    res(work()) ;
    }, time)
    }else{
    rej(console.log("our shop is closed"))
    }
    })
    }
    
    order(2000, () => console.log(`make ${stocks.Fruits[0]} shake`))
    .then(() => {
    return order(0000, ()=> console.log("Production has started"))
})
    .then(() => {
    return order(2000, ()=> console.log("the fruit was chopped"))
})
    .then(() => {
    return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})
    .then(() => {
    return order(1000, ()=> console.log("start the machine"))
})
    .then(() => {
    return order(2000, ()=> console.log(`ice-cream placed on ${stocks.holder[1]}`))
})
    .then(() => {
    return order(3000, ()=> console.log(`${stocks.toppings[0]} was selected`))
})
    .then(() => {
    return order(2000, ()=> console.log("ice=cream was served"))
})
// For handling error
    .catch(()=> console.log("customer left"))

// finally will run in both cases
.finally(() => {
    console.log("day ended, our shop is closed")
})



// above FreeCode Camp example of Async and await
    
function time(ms){
return new Promise((resolve, reject)=>{
if(is_shop_open){
setTimeout(resolve, ms)
}else{
reject(console.log("Shop is Closed"))
}
})
} ;

async function kitchen(){

try{

await time(2000)
console.log(`${stocks.Fruits[0]} was selected`)

await time(0000)
console.log("Start the production")

await time(2000)
console.log("cut the Fruit") ;

await time(1000)
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`) ;

await time(1000)
console.log("Start the machine") ;

await time(2000)
console.log(`ice-cream placed on ${stocks.holder[0]}`) ;

await time(3000)
console.log(`${stocks.toppings[0]} was selected`) ;

await time(2000)
console.log("served Ice-Cream") ;

}catch(error){
console.log("customer left", error)

}finally{
console.log("day ended, Shop is Closed")
}

}
kitchen()

