// Destructuring :

let nums = [1,2,3,4,5] ;
// // Ist value copy into num1 & IInd value copy into num2
// let [num1 , num2] = nums ;
// console.log(num1 , num2)


// for getting all elements use Rest Operator

let [num1 , num2, ...num3] = nums ;
console.log(num1 , num2 , num3)
// This called "Array Destructuring"


// if we pass extra parameter , it will gives Defined

// let nums = [1,2] ;
//  let [num1 , num2, num3] = nums ;
// console.log(num1 , num2 , num3)


// // Object Destructuring

let obj = {
    name : 'satya',
    Class : "Frontend" ,
   age: 67,
    profession: 'developer',
};

let {name , age} = obj ;
console.log(name , age)

// Using rest operator it will print new object with all elements
let {Class , ...rest} = obj ;
console.log(obj)


// // Recursion : - Calling function again and again. it is based on "Divide & Conquere approaches" . Recursion are mostly use tree data structure , graph algorithm etc.

// // Example-1 : it calling itself continous 
// function add() {
//     console.log("calling");
//     add();
// }
// add();


// // Question no-1 find factorial using Recursion ?

function getFactorial(num){
  if(num == 1){
    return 1 ;
  }
  return num * getFactorial(num-1) ;
}
console.log(getFactorial(5));
console.log(getFactorial(4));

// // JavaScript has limit of 16 digits as output after that it will gives Infinity
console.log(getFactorial(265));


// // Question no-1 find factorial of negative number using Recursion ?

function getFactorial(num){
    if(num < 0){
      return  -1 ;
    }
    if(num === 1 || num === 0){
        return  1 ;
      }
    return num * getFactorial(num-1) ;
  }
  console.log(getFactorial(5));
  console.log(getFactorial(-4));



// //  Question no-2 find sum of all elements in array using Recursion ?


let numbers = [1,2,3,4,5] ;

function findSum(arr) {
    if(arr.length === 1){
        return arr[0] ;
    } 

// if we pop , it will give same value .
    let firstElement = arr.shift() ;

   return firstElement + findSum(arr) ;
}

console.log(findSum(numbers)) ;
console.log(findSum([1,2])) ;
console.log(findSum([1,21,100])) ;



// //  Question no-2 find sum-range between two numbers using Recursion ?

function getSumRange(first , last){
    if(first === last){
        return 0 ;
    }
    return first + getSumRange(first+1 , last)
}
console.log(getSumRange(5,7)) ;
console.log(getSumRange(5,5)) ;


// // if we want sum range till last number
function getRange(first , last){
    if(first === last){
        return first ;
    }
    return first + getRange(first+1 , last)
}
console.log(getRange(5,7)) ;
console.log(getRange(5,5)) ;