// // Callback is a function  which gets passed as a Parameter .

// // Asynchronous  Programming


// function obj(id){
//     setTimeout(() => {
//         console.log("reading data from the database....") ;
//         return{id: id , githubUserName: "Prakash-kumar"} ;
//     }, 2000) ;
// }

// console.log('before') ;
// let user = getUser(1) ;
// console.log(user) ;
// // it give result after 2sec . so, my JS program don't wait. by this time the value (Output) is " Undefined " .
// // and again it will print After
// console.log('after') ;

// // Output :- before
// //           undefined
// //           after
// //           reading data from the database....


// // If we want to print {id: id , githubUserName: "Prakash-kumar"} ; then used  Callback function .

function getUser(id , callback){
    console.log(callback) ;
    setTimeout(() => {
        console.log("reading data from the database....") ;
        let object = ( {id: id , githubUserName: "Prakash-kumar"} );
        callback(object) ;
    }, 2000) ;
}

console.log('before') ;
const object = getUser(1 , function callback(object){
    console.log(object) ;
 }) ;

console.log('after') ;

// we can also used  Arrow Function

function gitUser(id , callbackfn){
    console.log(callbackfn) ;
    setTimeout(() => {
        console.log("I am eating my Breakfast") ;
        let object = ( {id: id , githubUserName: "Govind-verma"} );
        callbackfn(object) ;
    }, 20000) ;
}

console.log('Lunch') ;
const objec = gitUser(5 , (objec) => {
    console.log(objec) ;
 }) ;

console.log('Dinner') ;













