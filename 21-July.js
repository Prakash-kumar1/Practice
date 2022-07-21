// Destructuring :

// let nums = [1,2,3,4,5] ;
// Ist value copy into num1 & IInd value copy into num2
// let [num1 , num2] = nums ;
// console.log(num1 , num2)


// for getting all elements use Rest Operator

//  let [num1 , num2, ...num3] = nums ;
// console.log(num1 , num2 , num3)


// if we pass extra parameter , it will gives Defined

// let nums = [1,2] ;
//  let [num1 , num2, num3] = nums ;
// console.log(num1 , num2 , num3)


// // Object Destructuring

// let obj = {
//     name : 'satya',
//     Class : "Frontend" ,
//    age: 67,
//     profession: 'developer',
// };

// let {name , age} = obj ;
// console.log(name , age)

// // Using rest operator it will give all elements
// let {Class , ...rest} = obj ;
// console.log(obj)

// Recursion : - Calling function again and again

function add() {
    console.log("calling");
    add();
}
add();