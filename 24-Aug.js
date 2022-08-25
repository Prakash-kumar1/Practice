// // Example of Closure ==>> how to print "aircampus" ?? 

// function main(){
//     var firstName = "Aircampus" ;
//     function writeResult(){
//         console.log(firstName)
//     }
//     writeResult() ;
// }
// main() ;


// // Functional Programming are of 3 Types
// // Pure Function , HOF , Currying Functions

// // Normal Function
// function add(a,b,c,d){
//     return a+b+c+d ;
// }
// console.log(add(1,2,3,4)) ;     //10


// // Currying Function

// // Example:-1
// function sum(a){
//      return (b) =>{
//       return (c) =>{
//          return (d) =>{
//             return a+b+c+d ;
//          }
//       }  
//      }
// }
// console.log(sum((10,20,30,40)))       //No Output
// // this is the way , you can pass argument in  Currying Function
// console.log(sum(10)(20)(30)(40)) ;


// // Example:-2
// function power(a){
//     return (b) =>{
//      return (c) =>{
//         return (d) =>{
//            return a**b**c**d ;
//         }
//      }  
//     }
// }
// // this is the way , you can pass argument in  Currying Function
// console.log(power(2)(2)(1)(0)) ;      //4

// // Example:-3
// function sub(a){          //main(1) main(3)  main(6) a=10
//     return (b) =>{       //b=2    b=4    b=" "
//         if(b) return sub(a+b)     //main(3) main(6)  main(10)
//         return a ;
//     }
// }
// console.log(sub(1)(2)(3)(4)()) ;

// // Example:-4
let addition = function(a,b){
    return a+b ;
}
let addition1 = addition.bind(this,1)
console.log(addition1(3,5))       //4


// // Example:-5
let addition3 = function(a,b){
    return a+b ;
}
let addition4 = addition3.bind(this,2,7)
console.log(addition4(3,5))       //9


// // Example:-6
let addition5 = function(a,b,c,d){
    return a+b+c+d ;
}
let addition6 = addition5.bind(this,2,7)
console.log(addition6(1,2))       //12


// Currrying --  Currying is a process in functional programming  in which we can transform a function with multiple arguments into a sequence of nesting function . It returns a new function that excepts the next argument inline .


// OR

// A function takes one argument at a time and return a new function expecting the next argument , then we will crete a new function which will take us another argument


// NOTE- THE NUMBER OF ARGUMNETS A FUNCTION TAKES IS ALSO CALLED ARITY.
//  here a , b is arity
// function mul(a,b) {
//     // code 
// }

// So, currying break down a function that takes multiple arguments into a series of function that each take only one arguments

// // Q1 --  sum(2)(6)(3)

// function summ(a, b, c) {
//     return a + b + c;
// }
// console.log(summ(2, 6, 3));

// // or USING CURRY


// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(2)(6)(3));
// // console.log(sum(2)(6));
// // console.log(sum(2));


// // Q2--

// // evaluate("sum")(4)(2) => 6
// // evaluate("mul")(4)(2) => 8
// // evaluate("sub")(4)(2) => 2
// // evaluate("divide")(4)(2) => 2

// function evalute(operation) {
//     return function(a) {
//         return function(b) {
//             if (operation === "sum") return a + b;
//             else if (operation === "mul") return a * b;
//             else if (operation === "divide") return a / b;
//             else if (operation === "sub") return a - b;
//             else return "Invalid Opertion";
//         }
//     }
// }

// console.log(evalute("sum")(4)(2));


// //Q3 -- Infinite Currying -> sum(1)(2)(3).....(n)


// function add(a) {
//     return function(b) {
//         if (b) return add(a + b);
//         return a;
//     };
// }
// console.log(add(2)(3)(4)());
// console.log(add(2)(3)(4)(2));