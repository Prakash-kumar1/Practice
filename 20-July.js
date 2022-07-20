// function declaration --> using function keyword

function log(){
    console.log("Declaration logging") ;
}
log() ;

// Function Expression ( " Anonymous Function " )

let printing = function(){
    console.log("Expression logging") ;
};

printing() ;


// Named Function Expression (Not  useful)

let name = function Prakash (){
    console.log("Named Expression") ;
};
name() ;


//  Hoisting : Calling Function Before Declaration

pets();

function pets(){
    console.log("Pets in the home") ;
}




