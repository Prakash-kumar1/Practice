// Example of Closure ==>> how to print "aircampus" ?? 

function main(){
    var firstName = "Aircampus" ;
    function writeResult(){
        console.log(firstName)
    }
    writeResult() ;
}
main() ;


// Functional Programming means Passing the arguments and getting the Results .There are  3 Types
// Pure Function , HOF , Currying Functions

// Normal Function
function add(a,b,c,d){
    return a+b+c+d ;
}
console.log(add(1,2,3,4)) ;     //10


// Currying Function :- Currying is a process in functional programming in which we can transform a function with 
//                      multiple arguments into a sequence of nesting function . It returns a new function that 
//                      excepts the next argument inline .

// Example:-1
function sum(a){
     return (b) =>{
      return (c) =>{
         return (d) =>{
            return a+b+c+d ;
         }
      }  
     }
}
console.log(sum((10,20,30,40)))       //No Output
// this is the way , you can pass argument in  Currying Function
console.log(sum(10)(20)(30)(40)) ;


// Example:-2
function power(a){
    return (b) =>{
     return (c) =>{
        return (d) =>{
           return a**b**c**d ;
        }
     }  
  }
}
// this is the way , you can pass argument in  Currying Function
console.log(power(2)(2)(1)(0)) ;      //4

// Example:-3
function sub(a){          //main(1) main(3)  main(6) a=10
    return (b) =>{       //b=2    b=4    b=" "
        if(b) return sub(a+b)     //main(3) main(6)  main(10)
        return a ;
    }
}
console.log(sub(1)(2)(3)(4)()) ;

// Example:-4
let addition = function(a,b){
    return a+b ;
}
let addition1 = addition.bind(this,1)
console.log(addition1(3,5))       //4


// Example:-5
let addition3 = function(a,b){
    return a+b ;
}
let addition4 = addition3.bind(this,2,7)
console.log(addition4(3,5))       //9


// Example:-6
let addition5 = function(a,b,c,d){
    return a+b+c+d ;
}
let addition6 = addition5.bind(this,2,7)
console.log(addition6(1,2))       //12


// Example:-7
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(6)(3));
console.log(sum(2)(6));        //it will not accept because one parameter is missing
console.log(sum(2));            //it will not accept because Two parameter is missing


// Example:-8
let userObj = {
    name: "Prakash Kumar",
    age: 23,
    food: "Chicken Biryani",
    occupation: "Frontend Developer",
    package: "13LPA",
}

function userInfo(obj){
    return function(userInfo){
        return obj[userInfo] ;
    }
}

let response = userInfo(userObj) ;
console.log(response('food')) ;
console.log(response('name')) ;
console.log(response('package')) ;


// Q2--

// evaluate("sum")(4)(2) => 6
// evaluate("mul")(4)(2) => 8
// evaluate("sub")(4)(2) => 2
// evaluate("divide")(4)(2) => 2

function evalute(operation) {
    return function(a) {
        return function(b) {
            if (operation === "sum") return a + b;
            else if (operation === "mul") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "sub") return a - b;
            else return "Invalid Opertion";
        }
    }
}

console.log(evalute("sum")(4)(2));
console.log(evalute("mul")(4)(2));
console.log(evalute("sub")(4)(2));
console.log(evalute("divide")(4)(2));


//!!!@@@###$$$%%%++++>>>>>  Interview Question:=>  Infinite Currying in JavaScript   //!!!@@@###$$$%%%++++>>>>>  

function addition(a){
    return function(b){
        if(b) return addition(a+b) ;
        return a ;
    }
}

console.log(addition(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)(15)())


