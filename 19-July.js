// // // Findind each value in Object

// // // in array we use For loop  for finding values but in Object we use "For in loop" .it is used to get keys of 
// // Object.

// // In object if i want to access one by one then using ""For in Loop " "
// // if i want only keys i used " Object.keys "
// // / if i want only values i used " Object.values "


let car = {
    company : "BMW",
    model : "Q3" ,
    year : 2022 ,
    type : "SUV" ,
};

// // // // it will convert object Into String.
console.log(JSON.stringify(car)) ;

// // // // Using "For in Loop " to print all the values
for(let key in car){
   console.log(key) ;
   console.log(key , car[key]) ;
}

// // // // Example-2: using  " " For in Loop " " in Array 

let names = ["Prakash" , "vasanth" , "shivansh" , "govind"]
for(let name in names){
  // console.log(name) ;
   console.log(name , names[name]) ;
 }

// //  OR Use this 

 console.log(Object.keys(car)) ;
 console.log(Object.keys(names)) ;

// // // // // // for printing Values

 console.log(Object.values(car)) ;

// // // // // // for printing Particular(specific) Values

console.log(car["year"]) ;
console.log(car["model"]) ;


// // Printing car Object values in array
console.log(Object.entries(car));

 // // for printing Particular(specific) Values in array

let carProperties =  (Object.entries(car));
console.log(carProperties[1])
 console.log(carProperties[0][0],carProperties[0][1]) ;
 console.log(carProperties[1][1],carProperties[2][1]) ;

// //   OR Simple Way

console.log(car["company"])
console.log(car["model"])

// // // Adding keys and values using For in Loop


var keys = [];
var values=[];

for(let key in car){
    (keys.push(key)) ;
    // console.log(keys) ;

    values.push(car[key]);
  // console.log(values) ;
 }

 console.log(keys) ;
console.log(values) ;



// //  Revising the whole Object which Study Above

let family = {
    father : "Santosh" ,
    mother : "Rinki" ,
    son  :  "Arnab"  ,
    Daughter : "GunGun",
    place : "Obra" ,
}
 console.log(family) ;
 console.log(family["son"]) ;

// // // Using " For-in-loop " to print all the keys in Family  Object

for(let key in family){
    // console.log(key) ;
    console.log(key , family[key]) ;
}

// // // // OR using In-built method for printing "Keys"

console.log(Object.keys(family)) ;

// // // for printing  Values

 console.log(Object.values(family)) ;

// // // // for printing Particular(specific) Values

console.log(family["son"]) ;
console.log(family["mother"]) ;

// // // for printing Object values into Arrays
 console.log(Object.entries(family)) ;


// // // // for printing Particular(specific) Values in array

 let familyPeople =  (Object.entries(family));
 console.log(familyPeople[1])
 console.log(familyPeople[3])
 console.log(familyPeople[0][0],familyPeople[0][1]) ;
console.log(familyPeople[1][1],familyPeople[2][1]) ;

//   OR Simple Way

 console.log(family["father"]) ;
console.log(family["son"]) ;
console.log(family["mother"]) ;


// // // Adding keys and values using For in Loop

 keys = [] ;
 values = [] ;

for(let key in family){
    keys.push(key) ;
    // console.log(keys) ;

    values.push(family[key]);
    // console.log(values) ;
}
console.log(keys) ;
console.log(values) ;





























































// // // // Applying Object Method in Array

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


// // // Reference Data Type

// let nums = [1,2,3,4,5];

// function change(arr) {
//     console.log("before changing" , nums , arr)
//     arr[0] = 20 ;
//     console.log("after changing" , nums , arr)
// }
// change(nums) ;