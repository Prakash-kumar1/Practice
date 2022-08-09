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

var count = 1;

function counter(){
    count++ ;
console.log(count) ;
}
                                                 // Output
counter() ;                                       // 2 
counter() ;                                           // 3 
counter() ;                                         // 4





























































































