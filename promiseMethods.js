// !!!@@@==>>>  Read all promise methods and async- await here  <,===!!!@@@==>>>
// https://www.javascripttutorial.net/es6/javascript-promise-all/


// *************************************************************************************************************************************************************************************************************************************


// The Promise.all() method returns a single promise that resolves when all the input promises have been resolved. 
// The returned promise resolves to an array of the results of the input promises:

// Promise.all in resolve case
const promise1 = Promise.resolve(3) ;
const promise2 = 43 ;
const promise3 = new Promise((res, rej)=>{
    setTimeout(res, 100, "Foo")
}) ;

Promise.all([promise1, promise2, promise3]).then((values)=> {
    console.log(values) ;
})

// // Promise.all in rejected case

const pro1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("one"), 1000) ;
})

const pro2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("two"), 2000) ;
})

const pro3 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("Rejected 3rd case"), 3000) ;
})

Promise.all([pro1, pro2, pro3])
 .then((values) =>  console.log(values)  )
 .catch((error) =>  console.log(error) )

// *************************************************************************************************************************************************************************************************************************************


// the Promise.allSettled() method that accepts a list of Promises  and returns a new promise
//  that resolves after all the input promises have settled, either resolved or rejected.

const p1 = Promise.resolve(3) ;
const p2 = new Promise((resolve, reject) => setTimeout(reject, 1200, "Prakash")) ;
const promises = [p1, p2]

Promise.allSettled(promises)
       .then((results) => results.forEach((result) => console.log(result.status)))

// *************************************************************************************************************************************************************************************************************************************

// the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise

const po1 = Promise.reject(0) ;
const po2 = new Promise((resolve) => setTimeout(resolve, 100, 'quickly'))
const po3 = new Promise((resolve) => setTimeout(resolve, 700, 'slow'))
const promises2 = [po1, po2, po3]
Promise.any(promises2).then((values) =>  console.log(values) )

// *************************************************************************************************************************************************************************************************************************************

// Promise.race static method accepts a list of promises as an iterable object and returns a new promise that fulfills 
// or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.


const pr1 = new Promise((res, rej)=> {
    setTimeout(res, 500, "resolve promise")
})

const pr2 = new Promise((res, rej)=> {
    setTimeout(rej, 100, "rejected promise")
})

Promise.race([pr1, pr2]).then((value) => console.log(value))
                        .catch((error) => console.log(error) )

// *************************************************************************************************************************************************************************************************************************************


// Difference Between Promise and Async/Await:

// Sr.no                        Promise                                         Async/Await
                        
// 1.	Promise is an object representing intermediate state of operation 	 Async/Await is a syntactic sugar for promises, a wrapper making 
// which is guaranteed to complete its execution at some point in future.   the code execute more synchronously.
// 2.	Promise has 3 states – resolved, rejected and pending.	             It does not have any states. It returns a promise either resolved or rejected.
// 3.	If the function “fxn1” is to executed after the promise, then    	 If the function “fxn1” is to executed after await, then await X() 
// promise.then(fxn1) continues execution of the current function after      suspends execution of the current function and then fxn1 is executed. 
// adding the fxn1 call to the callback chain.

// 4.	Error handling is done using .then() and .catch() methods.	          Error handling is done using .try() and .catch() methods.
// 5.	Promise chains can become difficult to understand sometimes.	      Using Async/Await makes it easier to read and understand the 
//                                                                           flow of the program as compared to promise chains.  


// Basic Example of Async/await
	const getData = async() => {
		var y = await "Hello World";
		console.log(y);
	}
	
console.log(1);
	getData();
console.log(2);



// FreeCode Camp example of Async and await

let stocks = {
    Fruits : ["strawberry", "Banana", "grapes", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
    };
    
    let is_shop_open = false ;
    
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







