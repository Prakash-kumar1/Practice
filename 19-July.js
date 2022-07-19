// // Findind each value in Object

// // in array we use For loop  for finding values


// let car = {
//     company : "BMW",
//     model : "Q3" ,
//     year : 2022 ,
//     type : "SUV"
// };

// it will convert object Into String.
// console.log(JSON.stringify(car))


// for(let key in car){
//     console.log(key)
//     console.log(key , car[key])
// }

// //   OR Use this 

// console.log(Object.keys(car)) ;

// // for printing Values

// console.log(Object.values(car)) ;
// console.log(car["year"]) ;

// // Printing car values in array

// console.log(Object.entries(car));


// // Applying Object Method in Array

// let nums = [1,2,3,4];
// console.log(Object.entries(nums)) ;
// console.log(Object.values(nums)) ;
// console.log(Object.keys(nums)) ;


// // // Flat method : - Converting nth Dimensional array into  1-D Array

// let nos = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// console.log(nos.flat());

// in flat() parameter we pass Depth value

// Example no-2 

// Javascript object notation (JSON)








// // Primitive Data Type

// let num = 10;

// function change(value) {
//     console.log("before changing" , num , value)
//     value = 20 ;
//     console.log("after changing" , num , value)
// }
// change(num) ;


// // Reference Data Type

let nums = [1,2,3,4,5];

function change(arr) {
    console.log("before changing" , nums , arr)
    arr[0] = 20 ;
    console.log("after changing" , nums , arr)
}
change(nums) ;