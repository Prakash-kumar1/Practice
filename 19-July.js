// // // Findind each value in Object

// // // in array we use For loop  for finding values but in Object we use "For in loop" .it is used to get keys of 
// // Object.

// // In object if i want to access one by one then using ""For in Loop " "
// // if i want only keys i used " Object.keys "
// // / if i want only values i used " Object.values "


// let car = {
//     company : "BMW",
//     model : "Q3" ,
//     year : 2022 ,
//     type : "SUV" ,
// };

// it will convert object Into String.
// console.log(JSON.stringify(car)) ;

// Using "For in Loop " to print all the values
// for(let key in car){
//    console.log(key) ;
//    console.log(key , car[key]) ;
// }

 // // Example-2: using  " " For in Loop " " in Array 

// let names = ["Prakash" , "vasanth" , "shivansh" , "govind"]
// for(let name in names){
//   // console.log(name) ;
//    console.log(name , names[name]) ;
//  }

// //  OR Use this 

//  console.log(Object.keys(car)) ;
//  console.log(Object.keys(names)) ;

// // for printing Values

//  console.log(Object.values(car)) ;

// // for printing Particular(specific) Values

// console.log(car["year"]) ;
// console.log(car["model"]) ;


// // // Printing car Object values in array
// console.log(Object.entries(car));

//  // // for printing Particular(specific) Values in array

// let carProperties =  (Object.entries(car));
// console.log(carProperties[1])
//  console.log(carProperties[0][0],carProperties[0][1]) ;
//  console.log(carProperties[1][1],carProperties[2][1]) ;

// // //   OR Simple Way

// console.log(car["company"])
// console.log(car["model"])

// // // // Adding keys and values using For in Loop


// var keys = [];
// var values=[];

// for(let key in car){
//     (keys.push(key)) ;
//     // console.log(keys) ;

//     values.push(car[key]);
//   // console.log(values) ;
//  }

//  console.log(keys) ;
// console.log(values) ;



// //  Revising the whole Object which Study Above

// let family = {
//     father : "Santosh" ,
//     mother : "Rinki" ,
//     son  :  "Arnab"  ,
//     Daughter : "GunGun",
//     place : "Obra" ,
// }
//  console.log(family) ;
//  console.log(family["son"]) ;

// // // Using " For-in-loop " to print all the keys in Family  Object

// for(let key in family){
//     // console.log(key) ;
//     console.log(key , family[key]) ;
// }

// // // // OR using In-built method for printing "Keys"

// console.log(Object.keys(family)) ;

// // // // for printing  Values

//  console.log(Object.values(family)) ;

// // // // // for printing Particular(specific) Values

// console.log(family["son"]) ;
// console.log(family["mother"]) ;

// // // // for printing Object values into Arrays
//  console.log(Object.entries(family)) ;


// // // // // for printing Particular(specific) Values in array

//  let familyPeople =  (Object.entries(family));
//  console.log(familyPeople[1])
//  console.log(familyPeople[3])
//  console.log(familyPeople[0][0],familyPeople[0][1]) ;
// console.log(familyPeople[1][1],familyPeople[2][1]) ;

// //   OR Simple Way

//  console.log(family["father"]) ;
// console.log(family["son"]) ;
// console.log(family["mother"]) ;


// // // // Adding keys and values using For in Loop

//  keys = [] ;
//  values = [] ;

// for(let key in family){
//     keys.push(key) ;
//     // console.log(keys) ;

//     values.push(family[key]);
//     // console.log(values) ;
// }
// console.log(keys) ;
// console.log(values) ;


 // // Applying Object Method in Array

// let nums = [1,2,3,4];
// console.log(Object.entries(nums)) ;
// console.log(Object.values(nums)) ;
// console.log(Object.keys(nums)) ;


// // // Flat method : - Converting nth Dimensional array into  1-D Array and in parameter default value is 1 but we can pass no. of Array

// // Example number -: 1
// let nos = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// console.log(nos.flat());

// // Example number -: 2
// nos = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [[7,8],'vasanth']
// ]
// console.log(nos.flat(2));

// // Example number -: 3
// nos = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [[[7,8],'Shivansh'] ,true ]
// ]
// console.log(nos.flat(3));


// // In case of array if we change one value another values also change , similarly in object .

// let person = {
//     name : "Prakash" ,
//     age : "22" ,
//     place : "Obra",
//     food  : "Dosa" ,
// }

// let copy = person ;
// // if we change person then copy also changes
// copy["name"] = "Shivansh" ;

// console.log(person , copy);

// // Spread operator used to copying Objects

// let copy = {...person} ;

// // changing the value of age and Place

// copy["age"] = 120 ;
// copy["place"] = "Uttrakhand" ;

// console.log(person , copy);

// // But in case of nested objects only Original object  change but copy Doesn't  changes.

let rajnifamily = {
    name : "Santosh" ,
    age  : 30 ,
    Occupation : "Technitian" ,
    Food : "Chiken" ,
    Wife : {
         name : "Rinki" ,
         age : 25 ,
         Occupation : "House-wife" ,
         Food : "Mutton" ,
         Daughter : {
            name : "Gungun" ,
            age : 12 ,
            Occupation : "Student" ,
            Food : "Kurkure" , 
         }
    }
}

// // spread operator creates shallow copy(level-1) it means it will copy only in original object but in case of nested object
// //  if we make any change object inside parent object the both original and copy show changes.

// let copy = {...rajnifamily}

// rajnifamily["name"] = "Prakash" ;
// rajnifamily["age"] = 22 ;

// console.log(rajnifamily , copy)

//     //    OR 


// rajnifamily["Wife"]["name"] = "katrina" ;
// rajnifamily["Wife"]["Daughter"]["Food"] = "TakaTak" ;
// console.log(rajnifamily , copy) ;

// // Converting Object Into "String"
// let copi = JSON.stringify(rajnifamily);
// console.log(copi) ;

// // Converting "String" Into Object
// let inter = JSON.parse(copi);
// console.log(inter) ;

// // After the whole process Rajnifamily value changes but "inter" value remains Same
// rajnifamily["Wife"]["Food"] = "Hyderabadi Biryani" ;
// rajnifamily["Wife"]["name"] = "Dipika-Padukone" ;
// console.log(inter , rajnifamily)



// // Primitive Data Type

// let num = 10;

// function change(value) {
//     console.log("before changing" , num , value)
//     value = 20 ;
//     console.log("after changing" , num , value)
// }
// change(num) ;


// // Reference Data Type : passing address , it is also known call by reference

let numbers = [1,2,3,4,5];

function value(arr) {
    console.log("before changing" , numbers , arr)
    // In this both numbers and arr will changes
    arr[0] = 20 ;
    console.log("after changing" , numbers , arr)
}
value(numbers) ;

// Only For changing the value of arr , we use this : in this case pets changes but copy stores original values

let pets = ['dogs','cows','goats','buffalos','birds']
function animals(str) {

let copy = JSON.parse(JSON.stringify(str)) ;
    console.log("before" , pets , str) ;
    
    str[0] = 'Lion' ;
    console.log("after" ,pets , copy)
}
animals(pets) ;