// Closures
 

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

// In this case , whenever I  return  a function it will take a reference of variable count and return . this is known as Lexical  Environment














































































