// Concepts of Closures  property
 

// var has a functional scope . so, Outside " console.log(name)"  shows Reference error .(name is not defined) 
function demo() {
    var name = "Prakash" ;
    console.log(name) ;
}
demo() ;
// console.log(name) ;                                  // it shows ReferenceError


// // In this case counter create a new execution context at each time on calling . so the value always starts from 1.

// function counter(){
//     var count = 1;
//     count++ ;
// console.log(count) ;
// }
//                                                  // Output
// counter() ;                                       // 2 
// counter() ;                                           // 2 
// counter() ;                                         // 2 



// // In this case counter create only one new execution context on calling because var is declared outside. so the value starts from 1 and increases on clling.

// var count = 1;

// function counter(){
//     count++ ;
// console.log(count) ;
// }
//                                                  // Output
// counter() ;                                       // 2 
// counter() ;                                           // 3 
// counter() ;                                         // 4


// In this case variable age  &  function check present inside the counter execution context 
var count = 1;

function counter(){
    var age = 10; 
    function check(){
        console.log("Inside counter" , age , count) ;
    }
    check() ;
    count++ ;
console.log(count) ;
}
                                                 // Output
counter() ;                                       // 2 
counter() ;                                           // 3 
counter() ;                                         // 4


// Lexical Environment :-   A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to 
// the name of variables/functions, and the variable is the reference to actual object [including function object or primitive value]. 
// Lexical in general means in hierarchy or in a sequence.


function createCounter(){
    let count = 1 ;
    // let age =  10 ;

    function  counterIncrement(){
        count++ ;
        return count ;
    }

    return counterIncrement ;
}

let county = createCounter() ;
console.log(county()) ;                          // 2 
console.log(county()) ;                         // 3
console.log(county()) ;                         // 4 
console.log(county()) ;                         // 5

// In this case , whenever I  return  a function it will take a reference of variable count and return . this is known as Lexical  Environment

// Print only on when 3rd  time calls . 

function print(){
    let count = 1 ;
    return function() {
  if(count % 3 === 0){
    console.log("Printing" , count) ;
  } 
  console.log(count) ;
      count += 1 ;   
    };
}

let coin = print() ;
coin() ;
coin() ;
coin() ;


// In this we access the  data  but we can't  change 

function getCredentials(){
    let username = "Prakash" ;
    let password =  "12345"  ;


    return function () {
        let credentials  =  {
            username : username ,
            password :  password ,
        } ;
        return credentials ;
    } ;

}

let prakashCredentials =  getCredentials() ;
console.log(prakashCredentials()) ;


// for changing  the  data , we are going to use  Closures . similarly , like above it will print 3rd
// time .



function getCredent(){
    let username = "Prakash Kumar" ;
    let password =  "zyx#123@31"  ;
    let count = 1 ;

    return function() {
      let credentials = {
        username : username ,
        password :  password ,
      } ;
      if(count % 3 == 0){
        count += 1 ;
        return credentials ;
      }
      count += 1 ;
        } ;
    } ;


let fhgf =  getCredent() ;
console.log(fhgf()) ;
console.log(fhgf()) ;
console.log(fhgf()) ;


// setTimeout will go into WebAPI with reference  of  i , then it will print 5 times 5 .

for(var i = 0; i<5; i++){
    setTimeout(() => {
        console.log(i) ; 
    }, 1000);
}

// For printing  numbers , making IIFE function ,passing i as a parameter .

for(var i = 0; i<5; i++){
    (function(j){
        setTimeout(() => {
            console.log(j) ; 
        }, 1000);
    })(i) ;
}

//  let has Block - Scoped.

 for(let i = 0; i<5; i++){
    (function(j){
        setTimeout(() => {
            console.log(j) ; 
        }, 1000);
    })(i) ;
}

// closures create Memory Leak (Heap memory filled out)Problem 

