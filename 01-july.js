// With Argument without return

function changeNameInDB(name){
    console.log(`updating name ${name} in month`)
}
changeNameInDB('PRAKASH')



// With Argument with return

function greetuser(num){
    return( `Welcome !!! ${num}`)
}
const add = greetuser('PRAKASH')
console.log(add)

//         //    OR 

function getpin(id){
    return `this is ${id} in day`
}
console.log(getpin(1))

// xxxxxxxxx Using Basic Operators xxxxxxxxx

console.log(typeof 5)
console.log(typeof '5')
console.log(typeof parseInt('5'))
console.log( parseInt(5.9867))
console.log( parseFloat(5.9867))
console.log( parseInt(null))


// xxxxxxxxxx calling function from Another folder  xxxxxxxxxx 

const getsum = require('./Math');

let a = getsum(10,12)
console.log(a) ;

let b = getsum(100,12)
console.log(b) ;

let c = getsum(0,0)
console.log(c) ;

let d = getsum(10,-12)
console.log(d) ;

// getsubtract override the getsum function. the value of getsum not print in class.js Terminal.


const getsubtract = require('./Maths');

let l =  getsubtract(10,12)
console.log(l) ;

let m =  getsubtract(100,12)
console.log(m) ;

let n =  getsubtract(0,0)
console.log(n) ;

let k =  getsubtract(10,-12)
console.log(k) ;


// xxxxxxxxxxxx  completed xxxxxxxxxxxx


const spp = function(no1,no4){
    console.log('calling')
    return no1+no4
}
console.log(spp(8,9))

// xxx xxxxxxxxxxxx  Pure Function(Output same) xxxxxxxxxxxx

 function sum(num1,num2){
        return num1+num2
    }
    console.log(sum(8,9))
    console.log(sum(8,9))
    console.log(sum(8,9))


    // xxx xxxxxxxxxxxx  ImPure Function (Output not same)xxxxxxxxxxxx

 function sum(num1,num2){
        return Math.random(num1+num2)
    }
    console.log(sum(8,9))
    console.log(sum(8,9))
    console.log(sum(8,9))
    console.log(sum(8,9))


// xxxx  ->   setTimeout Function and setInterval Function both are "Higher Order Function" (HOF) because it taking function as a Parameter.  <- xxxx


// xxx xxxxxxxxxxxx  setTimeout Function xxxxxxxxxxxx

setTimeout(function(){
    console.log("Namaste Javascript")
}, 2000)
//  After 2 second it will print Namaste Javascript only one Time


// xxx xxxxxxxxxxxx  setInterval Function xxxxxxxxxxxx

setInterval(function(){
    console.log("Namaste Javascript")
}, 2000)
//  After 2 -2  second it will print Namaste Javascript multiple Times.



// In JavaScript we can also pass a Function as a Parameter and Function as a Return .

// function add() {
//     console.log('add') ;
// }

// function printadd(a) {
//     a() ;
// }

// printadd(add)


// In JavaScript we can also pass a  Function as a Return .

// function printadd() {
//     return function() {
//         console.log('Dragon Roars') ; 
//     }
// }
// let returnfxn = printadd()
// returnfxn()

// xxxxxxxxxx ->>  setTimeout and setInterval are web time API(Application programming interface)
//                 when programs runs they go into web API's and rest part goes into Call-Stack.
//                 when Call-Stack part is completed after that web time API printed .API
//                 Javascript always gives the priority to  Call-Stack part.     xxxxxxx ->>
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')
// setTimeout(function(){
//  console.log("Namaste Javascript")
//     }, 0)
//     console.log('sixth')
// console.log('fifth')
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')
// console.log('first')
// console.log('second')
// console.log('third')
// console.log('fourth')

    //  OR 

    // console.log('first')
    // setTimeout(function(){
    //  console.log("Namaste Javascript")
    //  }, 0)

    //  let i = 0
    //  while(i<=100){
    //     console.log('second' , i)
    //     i++ ;
    //  }


    //  when Call-Stack part is completed after that web time API printed .
//                 Javascript always gives the priority to  Call-Stack part.     xxxxxxx ->>


// xxxxxxx Using Recursion.  xxxxxxx

// function add(n){
//     let sum = n+10
//     console.log(sum , n)
//     add(sum)
// } add(10)


// Callback Function  --- > > > A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.


// function inhotel(message , Callback){
//     console.log(message);
//     Callback();
// }

// function orderfood(){
//     console.log('order the food');
// }

// function paybill(){
//     console.log(' paying the bill');
// }

// function eatfood(){
//     console.log('biryani');
// }

// function zomato(){
//     console.log('order in zomato');
// }


// function swiggy(){
//     console.log('order in swiggy');
// }

// inhotel('going to hotel' , orderfood)
// inhotel('eating the food' , eatfood)
// inhotel('eating over' , paybill)
// inhotel('My pizza' , zomato)
// inhotel('My Samosa' , swiggy)