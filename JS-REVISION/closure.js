// Functions can return functions
function outerFunction(){
    function innerFunction(){
         console.log("hello new file")
    }
    return innerFunction;
}
const ans = outerFunction() ;
console.log(ans) ;
ans() ;

// Question no.=>> 16 :-  what is Lexical Environment in javascript ??
// Answer:-      Lexical Environment is the environment of the function where it is written. 

// Question no.=>> 16 :-  what is Closure in javascript ??
// Answer:- a Closure is the combination of functions bundled together with references to its surrounding state
//         means Lexical Environment.  IOW, Closure gives you acces to an outer function scope from an inner Fxn.

function printFullName(fname, lname, gender){
    function printName(){
        console.log(fname, lname, "gender is", gender)
    }
    return printName;
}

const ans1 = printFullName("gayatari","jayant","female") ;
// console.log(ans1) ;
ans1() ;


// Closure Example =>> 1
function hello(x){
    const a = "varA" ;
    const b = "varB" ;
    return function(){
        console.log(a,b,x) ;
    }
}
const ans2 = hello("argument")
ans2() ;
// console.log(ans2) ;


// Closure Example =>> 2
function myFunction(power){
    return function(number){
        return number ** power
    }
}
const cube = myFunction(3);
const ans3 = cube(2) ;
console.log(ans3) ;

const square = myFunction(2);
const ans4 = square(4) ;
console.log(ans4) ;


// Closure Example =>> 3
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();


// // 17 August session (Wednesday) and 18 August session (Thursday) by Aman (Microsoft)


// // Question no. => 3  Basic  Question

var sum = 0.1+0.2
console.log(sum)       // output is =>>  0.30000000000000004

if(sum == 0.3){
  console.log("true")
}else{
  console.log("false") ;
}
// it returns false


// // Question no. => 4   what will be the Output ??

(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a) ;
    console.log(b) ;
  })(1) ;
})(0) ;


// Question no.=> 5  print  1 to  5  in a interval of  1 second ??. 

// // Solution ==>> 1
for(let i=1 ; i<=5; i++){
  setTimeout( function log() {
    console.log(i) ;
  }, i*1000);
}


function multiply(num1,num2) {
  console.log(num1*num2)
 return (num1*num2)
}
console.log ( multiply(3,4)) ;


// // setTimeout will go into WebAPI with reference  of  i , JS don't wait . so,JS increases the value of i = 1,2,3,4,5 . after 1 sec ,
// //  i will come from setTimeout then it will print 5 times 5 .

for(var i = 0; i<5; i++){
  setTimeout(() => {
      console.log(i) ; 
  }, 1000);
}

// But for printing 1,2,3,4 in case of var, we use function inside for loop 

for(var i = 0; i<5; i++){
  function a(i){
    setTimeout(() => {
        console.log(i) ; 
    }, 1000);
  }
  a(i) ;
}


// / // In this case count is inside the function.at each time on calling counter create a new execution context and after printing it 
//  // whole memory destroys . so the value always starts from 1.

function counter(){
    var count = 1;
    count++ ;
console.log(count) ;
}
                                                 // Output
counter() ;                                       // 2 
counter() ;                                           // 2 
counter() ;                                         // 2 



//  // In this case counter create a new execution context and after printing it 
//  // whole memory destroys .but value stored outside of execution context. so the value starts from 1 
//  // and increases on clling.


var count = 1;

function counter(){
    count++ ;
console.log(count) ;
}
                                                 // Output
counter() ;                                       // 2 
counter() ;                                           // 3 
counter() ;                                         // 4


// // In this case variable age  &  function check present inside the counter execution context 
// var count = 1;

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


//// Interview Question n0. =>> 1   Print only on when 3rd  time calls ??

function print(){
  let count = 1 ;
  return function counter() {
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
coin() ;




// // 17 August session (Wednesday) and 18 August session (Thursday) by Aman Sir(Microsoft)
