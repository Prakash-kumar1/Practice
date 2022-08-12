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


// console.log("starting") ;

// setTimeout(() => {
//     console.log("Set-Time Out") ; 
// }, 0);

// Promise.resolve(1).then(() => console.log("Promise 1") )  ;
// Promise.resolve(1).then(() => console.log("Promise-2") )  ;
// Promise.resolve(1).then(() => console.log("Promise-3") )  ;

// console.log("end") ;

// // Output : starting
// //            end
// //           Promise 1
// //           Promise-2
// //           Promise-3
// //           Set-Time Out


// // Classes ==>>  JS is  Multi  Paradigm  Programming  Language
// // OOPs ==>>  Object  Oriented  Programming  system
// // Functional  Programming
// // Class  ==  Function
// // Class  is  a  syntactic  sugar  of  function .
// // async await  is  a syntactic  of  Promise .


// function  person(name , age) {
//     this.name = name ;
//     this.age = age ;

//     console.log(this) ;
//     return this ;
// }
// const vasanth = new person("vasanth" , 30) ;
// console.log("this Returned" , vasanth) ;
// const govind = new person("govind" , 3) ;
// const rajesh = new person("rajesh" , 13) ;




// class Person {
//     constructor(name , age) {
//         this.name = name ;
//         this.age = age ;
//     }
//     getName() {
//         return this.name ;
//     }
//     getAge() {
//         return this.age ;
//     }
// }

// let prakash = new Person("govind" , 56) ;
// console.log(prakash.age , prakash.name) ;



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



