// // Callback is a function  which gets passed as a Parameter .

// // Asynchronous  Programming

// console.log('before') ;

// setTimeout(() => {
//     console.log("reading data from the database....") ;
//     return{id: 1 , githubUserName: "Prakash-kumar"} ;
// }, 2000) ;

// console.log('after') ;
// // Output :- before
// //            after
// //            reading data from the database....



// function getUser(id){
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
//     }, 3000) ;
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

// // // prepareFood is my Higher order function , eatRotis my callback function which passed as a parameter 
//     prepareFood(eatRotis) ;
// }
// hotelVisit() ;


// // Example :- 2

// // enter userID --> calling my database with userID --> get the userData --> display the userData in Github page .

// function readDataInDB(display) {
//  setTimeout(() => {
//     console.log("reading account date in the DataBase") ;
//     let user = ( {id: 11 , githubUserName: "Pro-Abhi"} );
//         display(user) ;
//  }, 2000);
// }

// function displayDataonScreen(user){
//     console.log("returning the user data" , user) ;
//     console.log("display the content in the Github Page") ;
// }

// function githubLogin(){
//     console.log("Enterning the user ID as 11") ;
//     console.log("Clicking the Submit Button") ;
//     readDataInDB(displayDataonScreen) ;
// }
// githubLogin() ;


// // Adding some more Callback function in Example no.- 2

function readDataInDB(display) {
    setTimeout(() => {
       console.log("reading account date in the DataBase") ;
       let user = ( {id: 198 , githubUserName: "shivanshRawat"} );
           display(user) ;
    }, 2000);
   }
   
   function displayDataonScreen(userData){
       console.log("returning the user data" , userData) ;
       console.log("display the content in the Github Page") ;
       getRepositries();
   }

   function getRepositries() {
    console.log("getting the repos") ;
    let repos = ["add" , "calculator" , "forms"];
    console.log(repos) ;
    getCommits(repos[0]) ;
   }

   function getCommits(repo) {
    let commits = {

    add: ["intial commit" , "add function"] ,
    calculator: ["intial" , "design" , "add event listener" , "give color"] ,
    forms : ["intial" , "forms UI" , "add functionality"] ,

    };
    console.log("commited" , commits[repo]) ;
   }
   
   function githubLogin(){
       console.log("Enterning the user ID as 11") ;
       console.log("Clicking the Submit Button") ;
       readDataInDB(displayDataonScreen) ;
   }
   githubLogin() ;

// //  This is also an example of Callback Hell :- when one function calling another function & 
// // that function calling another  function  like this it's  keep going . 


// // Promises :-->> Pending  , success(Resolved()) , failed(Reject())
// // Syntax  ===>>>         let Promises = new Promises((resolve , reject) => {
// //                         resolve() ;
// //                         reject() ;
// //                      }) ;



// let momPromise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("Collected All golds") ;
//         reject("killed by Adheera . ")
//     } , 5000) ;
//  }) ;

//  momPromise.then((result) => console.log("Climax: =>>" , result)) ;

// // //  Output :- It will wait for 5sec then print -->>  Climax: =>> Collected All golds



// momPromise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         // resolve("Collected All golds") ;
//         reject("killed by Adheera . ")
//     } , 5000) ;
//  }) ;

//  momPromise
//  .then((result) => console.log("Climax: =>>" , result))
//          .catch((error) => console.log(error)) ;

// // //  Output :- It will wait for 5sec then print -->>  killed by Adheera .


// // Example

// console.log("Entering the user id" , 1) ;

//  function getUserData(id) {
//  return new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let user =  {id: id , userName: "prakash"} ;
//         resolve(user) ;
//     }, 2000);
//  }) ;
// }

// function getRepositries(userName) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             let repos =  {
//                 prakash : ["add" , "calculator" , "forms"] ,
//                 govind : ["subtract" , "Telescope" , "paper"] ,
//                 rajesh : ["Divide" , "Microscope" , "Replit"] ,
//             } ;
//              resolve(repos[userName]) ;
//         }, 3000);
//     }) ;
// }

// function getCommits(repo) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             let commits = {

//                 add: ["intial commit" , "add function"] ,
//                 calculator: ["intial" , "design" , "add event listener" , "give color"] ,
//                 forms : ["intial" , "forms UI" , "add functionality"] ,
//            };
//     resolve(commits[repo]) ;
//         }, 2000);
//     }) ;
// }

// getUserData(1)
//     .then((userData) =>{ 
//         console.log("userData =>> " , userData) ;
//         let repos = getRepositries(userData.userName) ;
//         return repos ;
//     })
//     .then((repos) => {
//         console.log("repos" , repos) ;
//         let commits = getCommits(repos[0]) ;
//         return commits ;
//     }) 
//     .then((commits) => console.log("commited" , commits)) ;