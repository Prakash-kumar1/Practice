// // Promises performs Asynchronous operation

// console.log(typeof new Promise((res , rej) => {} ))                        // Output ==>> object

// let p1 = Promise.resolve("p1 data") ;
// let p2 = Promise.resolve("p2 Print") ;
// console.log(p1 , p2) ;


// console.log("starting") ;

// setTimeout(() => {
//     console.log("Set-Time Out") ; 
// }, 4000);

// Promise.resolve(1).then(() => console.log("Promise") )

// console.log("end") ;

// // Output : starting
// //            end
// //           Promise
// //           Set-Time Out


console.log("starting") ;

setTimeout(() => {
    console.log("Set-Time Out") ; 
}, 0);

Promise.resolve(1).then(() => console.log("Promise 1") )  ;
Promise.resolve(1).then(() => console.log("Promise-2") )  ;
Promise.resolve(1).then(() => console.log("Promise-3") )  ;

console.log("end") ;

// // Output : starting
// //            end
// //           Promise 1
// //           Promise-2
// //           Promise-3
// //           Set-Time Out






















