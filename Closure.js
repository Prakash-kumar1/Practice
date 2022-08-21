// // Calling  Function

function foo(){
    console.log("function foo called") ;
}


let Bar = function(){
    console.log("function foo called") ;
} ;

foo() ;                                            // output => function foo called
Bar();                                                          // function foo called
console.log(Bar) ;                                               // [Function: Bar]



// // var is Global scoped it means it can accessible ouside of the Block  but  let and const are block scoped

let name = "Prakash" ;
if(name === "Prakash") {
// here if we use let then it gives "ReferenceError" in output
    var department = "Engineerig" ;
}

console.log(name) ;                                                               // Prakash
console.log(department) ;                     // Engineerig (due to var , we can access from outside of the block)


// // Closure:-

// // / For Every Closure we have 3 scopes :-
// // (a) => Local(own) Scope
// // (b) => Outer Function Scope (inner function access the outer function variable)
// // (c) => Global Scope


// //  Definition =>> 1 :  A Closure is a function having access to the parent scope , it preserve the data 
// //                         from outside .

let i = 10 ;
function show() {
    let j = 20 ;
    console.log(j) ;
// // outer variable i access inside function . this is closure
    console.log(i) ;
}
show() ;


// // Definition =>> 2 :   A Closure is a inner function that has access to the outer(enclosing)
// //                          function's variables .

function foo(){
    let x = "X is a local variable of outer function."
    console.log(x) ;
    function innerFunc() {
        let y = "Y is a local variable of Inner Function ." 
        console.log(y) ;
// // outer function X access by inner function . this is closure
            console.log(x) ;
    }
    innerFunc() ;

    console.log(x) ;                    //  x is outer so it gives Output
    console.log(y) ;                // it gives error because y is inner function , we can't access from outside .
    
}
foo() ;



// Example-1:   Lexical Scope read on it your Own .(Technical suneja - youtube)

let sum = function(a){
    console.log("Live Viewers " + a) ;
let c = 4 ;
    return function(b){
        return  a+b+c;
    }
    }

let store = sum(2) ;   // calling
console.log(store(5)) ;


// Example-2:   Lexical Scope read on it your Own .(Technical suneja - youtube)

let add = function(a,b,c){
    return {
        getSumTwo:function(){
            return  a+b;
        } ,
        getSumThree:function(){
            return  a+b+c;
    } 
    }
    }

        

let storing = add(3 , 4 ,5) ;   // calling
console.log(storing.getSumTwo()) ;
console.log(storing.getSumThree()) ;


let store1 = add(10 , 40 ,50) ;   // calling
console.log(store1.getSumTwo()) ;
console.log(store1.getSumThree()) ;









