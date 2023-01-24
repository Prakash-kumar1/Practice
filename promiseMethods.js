// !!!@@@==>>>  Read all promise methods and async- awit here  <,===!!!@@@==>>>
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





