// // function declaration --> using function keyword

// function log(){
//     console.log("Declaration logging") ;
// }
// log() ;


// // Function Expression ( " Anonymous Function " )

// let printing = function(){
//     console.log("Expression logging") ;
// };

// printing() ;


// // Named Function Expression (Not  useful)

// let name = function Prakash (){
//     console.log("Named Expression") ;
// };
// name() ;


// //  Hoisting : Calling Function Before Declaration . 

// pets();

// function pets(){
//     console.log("Pets in the home") ;
// } ;

// // Function Expression can't be Hoisted it will give  -->  Error   because  we can't access before  Intialization


// //  Arguments  in Function 

// function add(num1 , num2 ){
//     // console.log(arguments) ;
//     return (num1+num2);
// }

// console.log(add(5,10))

// //  in Javascript if we don't pass any value it will considered as "Undefined" and if we pass extra value it will considered as "Ignore"

// function add(num1 , num2){
//     return (num1+num2);
// }
// // Extra values ignored
// console.log(add(15,10,34))



// function add(num1 , num2,num3,num4){
//     // num3 , num4 are undefined
//     console.log(num1 , num2,num3,num4)
//     // it will give None
//     console.log(num1 + num4)
//         return (num1+num2);
//     }
    
//     console.log(add(10,34)) ;


// // // Rest operator(...) : whatever value passing it will converting into Array.

// function shoppingCart(...prices){
//     console.log(prices) ;
//     let total = 0;
//     for(let i=0; i<prices.length; i++){
//         total += prices[i] ;
//     }
//     console.log(total) ;
// }
// shoppingCart(100,150,50,300)

// //  whenever we use Rest operator , always use in last as a parameter . if we write anything after rest operator it will gives error

// function shoppingCart(discount , ...prices){
// console.log(discount , prices )
//     let total = 0;
//     for(let i=0; i<prices.length; i++){
//         total += prices[i] ;
//     }
//     console.log(total) ;
// }
// shoppingCart(10,50,50,30)


// function shoppingCart(discount ,coupan , ...prices){
//     // console.log(discount , prices , coupan)
//         let total = 0;
//         for(let i=0; i<prices.length; i++){
//             total += prices[i] ;
//             total = (total * discount) / 100 - coupan ;
//         }
//         return total ;
//     }
//     console.log(shoppingCart(5,60,150,300,100)) ;


// // Function Inside Object

let person = {
    fname : "Prakash" ,
    lname : "kumar" ,
    fullname() {
        return `${person.fname} ${person.lname}` ;
    },
}; 
console.log(person.fullname()) ;


//  person = {
//     fname : "Prakash" ,
//     lname : "kumar" ,
//     fullname() {
//         return `${person.fname} ${person.lname}` ;
//     },
// }; 
// //  in this if we call the person it will print fname,lname and in fullname it will print "virat-kohli"
// person.fullname = "Virat Kohli";
// console.log(person) ;


// // // Using getter and setter 


// // Using "get" keyword there is no need to call'()' a function

//  person = {
//     fname : "shivansh" ,
//     lname : "rawat" ,
//     get fullname() {
//         return `${person.fname} ${person.lname}` ;
//     },
// };
// // if we write "console.log(person.fullname()) ;" it will show Error because now it is a Getter not a Function
// console.log(person.fullname) ;



// for changing the function value we use --> "set" keyword

person = {
    fname : "Swami" ,
    lname : "Vivekanand" ,
    get fullname() {
        return `${person.fname} ${person.lname}` ;
    },

    set fullname(newName){
        // console.log("new-name" , newName) ;
      let parts = newName.split(" ") ;
    //   console.log(parts) ;
    person.fname = parts[0] ;
    person.lname = parts[1] ;
    },
};
person.fullname = "Ramkrishan Paramhans" ;
console.log(person.fullname) ;



// // this : - object that is executing current function.

// const video = {
//     title : "cricket" ,
//     play(){
//         console.log(this) ;
//     } ,
//     stop : function(){
//         console.log(this); 
//     },
// };

// video.play() ;
// video.stop() ;
// console.log(video["play"]) ;



// const match = {
//     title : "football" ,
//     players : ["messi","ronaldo","dhoni","kohli"],
//     displayPlayers(){
//         // console.log(this.title , this.players)
//         // for printing each player name
//         this.players.forEach (function(player){
//             console.log(this) ;
//         }) ;
//     },
// };
// match.displayPlayers() ;





