// // Promises performs Asynchronous operation

// console.log(typeof new Promise((res , rej) => {} ))                        // Output ==>> object

// let p1 = Promise.resolve("p1 data") ;
// let p2 = Promise.resolve("p2 Print") ;
// console.log(p1 , p2) ;

// // Output : -   Promise { 'p1 data' } Promise { 'p2 Print' }


// //Question number-1: if set-time out and Promise have different time

// console.log("starting") ;

// function p1() {
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("promise") ;    
//         }, 5000);
//     })
// }

// p1() ;

// setTimeout(() => {
//     console.log("Set - Time out") ;
// }, 4000);

// console.log("Ending") ;

// // Output          - starting
// //                    Ending
// //                    Set - Time out
// //                     promise


// //Question number-2: if set-time out and Promise have Same time

// console.log("starting") ;

// function p1() {
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("promise") ;    
//         }, 5000);
//     })
// }

// p1() ;

// setTimeout(() => {
//     console.log("Set - Time out") ;
// }, 5000);

// console.log("Ending") ;

// // Output          - starting
// //                    Ending
// //                     promise
// //                     Set - Time out


// // Question number-3: if set-time out put above Promise with Same time

// console.log("starting") ;


// setTimeout(() => {
//     console.log("Set - Time out") ;
// }, 5000);


// function p1() {
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("promise") ;    
//         }, 5000);
//     })
// }

// p1() ;


// console.log("Ending") ;

// // Output          - starting
// //                    Ending
// //                     Set - Time out
// //                     promise


// // Question number-4: what happens if we calling function Before

// console.log("starting") ;

// p1() ;

// setTimeout(() => {
//     console.log("Set - Time out") ;
// }, 5000);


// function p1() {
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("promise") ;    
//         }, 5000);
//     })
// }


// console.log("Ending") ;

// // Output          - starting
// //                    Ending
// //                     promise
// //                     Set - Time out


// // Question number-5: if we don't  have  time ??

// console.log("starting") ;

// setTimeout(() => {
//     console.log("Set-Time Out") ; 
// }, 4000);

// Promise.resolve(1).then(() => console.log("Promise") ) ;
// // promise also go into web-API . so, it will come after "end"
// console.log("end") ;

// // // Output : starting
// // //            end
// // //           Promise
// // //           Set-Time Out



// // Micro-Task Queue :-->

// // In javascript , event queue is Macrotask queue Promises don't come this way . Promises have another 
// // Which is known as - MicroTask Queue . through this promises come in call stack .
// // Promises are Like VIP's


// console.log("starting") ;

// setTimeout(() => {
//     console.log("Set-Time Out") ; 
// }, 0);

// Promise.resolve(1).then(() => console.log("Promise 1st") )  ;
// Promise.resolve(1).then(() => console.log("Promise-2nd") )  ;
// Promise.resolve(1).then(() => console.log("Promise-3rd") )  ;

// console.log("end") ;


// // Output : starting
// //            end
// //           Promise 1st
// //           Promise-2nd
// //           Promise-3rd
// //           Set-Time Out



// // Question number- 6: If there is Reject Present ??
// // Resolve has more priority than Reject . so, Reject will be pushed to last


// console.log("starting") ;

// setTimeout(() => {
//     console.log("Set-Time Out") ; 
// }, 0);


// Promise.reject(1)
// .then(() => console.log("Promise 1st") )  
// .catch((err) => console.log("Promise 1 has error"))

// Promise.resolve(1).then(() => console.log("Promise-2nd") )  ;
// Promise.resolve(1).then(() => console.log("Promise-3rd") )  ;
// Promise.resolve(1).then(() => console.log("Promise 4th") )  ;
// Promise.resolve(1).then(() => console.log("Promise-5th") )
  
// Promise.reject(1)
// .then(() => console.log("Promise-6th ==>> Govind") ) 
// .catch((error) => console.log("Promise 6 ==>> Govind has error"))

// Promise.resolve(1).then(() => console.log("Promise 7th") )  ;
// Promise.resolve(1).then(() => console.log("Promise-8th") )  ;
// Promise.resolve(1).then(() => console.log("Promise-9th") )  ;

// console.log("end") ;


// // Output :=>>  starting
// //                end
// //                 Promise-2nd
// //                  Promise-3rd
// //                   Promise 4th
// //                   Promise-5th
// //                    Promise 7th
// //                     Promise-8th
// //                      Promise-9th
// //                       Promise 1 has error
// //                         Promise 6 ==>> Govind has error
// //                           Set-Time Out




// //  JavaScript is  Multi  Paradigm  Programming  Language , it supports 
// // OOPs (" Object  Oriented  Programming  system")   and  Functional  Programming

// // In JavaScript Class and Function  both are  same .

// // Class  is  a  syntactic  sugar (easy way of writing) of  function .
// // async await  is  a syntactic sugar (easy way of writing) of  Promise .


// function  person(name , age) {
//     this.name = name ;
//     this.age = age ;

//     console.log(this) ;
//     return this ;
// }
// const vasu = new person("Prakash Kumar" , 23) ;
// console.log("this Returned" , vasu) ;
// const govind = new person("govind" , 3) ;
// const rajesh = new person("rajesh" , 13) ;


// function add() {
//     console.log("Example") ;
//     this.name = "anjali" ;
//     // if I remove new then it will return 10 , because new excepts Empty Objects
//     // return 10 ;
// }

// let sum = new add() ;
// console.log("Return Empty Object" , sum);

// // Output ==>>       Example
// //                   Return Empty Object add { name: 'anjali' }


// In Industries , we use Constructor Function

class Person {
    constructor(name , age) {
        this.name = name ;
        this.age = age ;
    }
    getName() {
        return this.name ;
    }
    getAge() {
        return this.age ;
    }
}

let prakash = new Person("govind" , 56) ;
console.log(prakash.age , prakash.name) ;



// // Function Declaration are hoisted but  classes are not hoisted .
// people() ;

// function people() {
//     console.log("villagers") ;
// }


// class peoples1 {
//     constructor() {
//         console.log("villagers") ;   
//     }
// }

// new peoples1() ;



