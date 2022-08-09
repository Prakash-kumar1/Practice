// Closures
 

// var has a functional scope . so, Outside " console.log(name)"  shows Reference error .(name is not defined) 
function demo() {
    var name = "Prakash" ;
    console.log(name) ;
}
demo() ;
console.log(name) ;


























































































var count = 1;

function counter(){
    count++ ;
console.log(count) ;
}

counter() ;
counter() ;
counter() ;