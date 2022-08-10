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


// // // If we want to print {id: id , githubUserName: "Prakash-kumar"} ; then used  Callback function .

// function getUser(id , callback){
//     console.log(callback) ;
//     setTimeout(() => {
//         console.log("reading data from the database....") ;
//         let object = ( {id: id , githubUserName: "Prakash-kumar"} );
//         callback(object) ;
//     }, 2000) ;
// }

// console.log('before') ;
// const object = getUser(1 , function callback(object){
//     console.log(object) ;
//  }) ;

// console.log('after') ;

// // we can also used  Arrow Function

// function gitUser(id , callbackfn){
//     console.log(callbackfn) ;
//     setTimeout(() => {
//         console.log("I am eating my Breakfast") ;
//         let object = ( {id: id , githubUserName: "Govind-verma"} );
//         callbackfn(object) ;
//     }, 20000) ;
// }

// console.log('Lunch') ;
// const objec = gitUser(5 , (objec) => {
//     console.log(objec) ;
//  }) ;

// console.log('Dinner') ;


// // Example :- 1

// // // Hotel --> Entering hotel , Order food --> preparing --> delievered to table ---> eating --> pay bill

// function prepareFood(startEating){
//     setTimeout(() => {
//         console.log("food is prepared") ;
//         console.log("deliever to the table") ;
//         startEating() ;
//     }, 10000);
// }

// function eatRotis(){
//     setTimeout(() => {
//         console.log("Eating Rotis with Daal") ;
//         console.log("Paying the Bill") ;
//     }, 5000);
// }

// function hotelVisit() {
//     console.log("Entering into the hotel") ;
//     console.log("order 2 rotis with butter chicken") ;
//     console.log("Chef preparing the order") ;

//     prepareFood(eatRotis) ;
// }
// hotelVisit() ;

// // prepareFood is my Higher order function , eatRotis my callback function which passed as a parameter 


// Example :- 2

// enter userID --> calling my database with userID --> get the userData --> display the userData in Github page .

function readDataInDB(display) {
 setTimeout(() => {
    console.log("reading account date in the DataBase") ;
    let user = ( {id: 11 , githubUserName: "Pro-Abhi"} );
        display(user) ;
 }, 2000);
}

function displayDataonScreen(userData){
    console.log("returning the user data" , userData) ;
    console.log("display the content in the Github Page") ;
}

function githubLogin(){
    console.log("Enterning the user ID as 11") ;
    console.log("Clicking the Submit Button") ;
    readDataInDB(displayDataonScreen) ;
}
githubLogin() ;