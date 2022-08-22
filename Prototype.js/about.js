// // #################    Prototypes  and  it  works     #################

// // Prototype  means Parent class or base class or Super class . Prototype mostly used for Methods

// let mobile = function(model_no){
// // Instance Member
//     this.model = model_no;
//     this.price = 12000 ;
// }
// let samsung = new mobile('Galaxy');
// let apple = new mobile('Pro max');
// let POCO = new mobile('x2');
// let Redmi = new mobile('xiaomi11');
// // Adding color property
// samsung.color = 'Blue' ;
// // color is available for samsung in console
// console.log(samsung) ;
// // color is not available for apple , POCO , Redmi in console
// console.log(apple) ;
// console.log(POCO) ;
// console.log(Redmi) ;

// // // using this approach , color property is only available for samsung. Assuming we have 1000 different company mobiles we want this color property for that too . writing this way code is too complicated. For solving this problem we use =>> " Prototype "


// // // // Prototype Syntax ==>>  classname.Prototype.key = 'value' ;
// // // // Prototype Member ==> whwn use .prototype that is Prototype Member

// mobile.prototype.camera = 'Ultra pro MAX - HD' ;
// // camera is available for all objects in console . click on prototype , we can see 
// console.log(samsung) ;
// console.log(apple) ;
// console.log(POCO) ;
// console.log(Redmi) ;

// // // // In JS , function creates two objects . 
// // // // 1 ==>> Constructor (Function name ) 
// // // // 2 ==>> Object  (Prototype)


// function Mobile(){

// }
// console.log(Mobile.prototype) ;
// // output in console : {constructor: ƒ}
// //                      constructor: ƒ Mobile()
// //                       [[Prototype]]: Object            

// let Me = new Mobile() ;
// console.log(Me.__proto__) ;

// // verify
// console.log(Mobile.prototype === Me.__proto__ ) ;
// // // output in console : {constructor: ƒ}
// // //                       {constructor: ƒ}
// // //                        true 


// // As we can see , Both constructors are same

// console.log(Mobile === Me.__proto__.constructor ) ;
// console.log(Mobile === Mobile.prototype.constructor ) ;
// // // output :=>  Both are True


// // // #################    Prototypical Inheritance  (21-August session)   #################


// let nums = [1,2,3,4,5] ;
// // All properties of array inherited(comes in) nums
// console.log(nums.__proto__  ===  Array.prototype)   //true
// // Prototype prints Available methods
// // __proto__ prints Parents methods
// // nums.__proto__   gives  Array methods
// // nums.__proto__.__proto__   gives  object methods
// // nums.__proto__.__proto__.__proto__   gives  Null


// let person = {
//     name : "Prakash" ,
//     age : 23,
//     getInfo : function() {
//         // console.log((this.name)+ "is" +(this.age)+ "years old") ;
//         console.log(` ${this.name} is ${this.age} years old `) ;                
//     },
// } ;

// let person2 = {
//     name : "Anjali" ,
// } ;

// // Never ever do this in your code
// person2.__proto__ = person ;
// console.log(person2.age)               // 23
// console.log(person2.name)             // Anjali (local has more Priority)
// console.log(person2.getInfo())       // Anjali is 23 years old



// // // ######### Polyfills (Creating own method)  ########


// // // Making own method :- 

// Array.prototype.prakash = function(){
//     console.log("Prakash kumar method")
// } ;
// [].prakash();                  // [] is an inBuilt method
// // Output ==>>  Prakash kumar method

// let nums1 = [10,20,30,49] ;
// console.log(nums1.prakash()) ;
// // // Output ==>>  Prakash kumar method


// // // Making own method for  Functions :- 

// Function.prototype.logger = function() {
//     console.log("making own Prototype method for  Functions ")
// } ;

// function add() {}
// console.log(add.logger()) ;
// // // output =>  making own Prototype method for  Functions 


// // // ######### Polyfills for map,filter,reduce (Interview Questions)  ########

// // basics revision of map , filter and reduce

// // 1 - map

// const numbers = [1, 2, 3, 4, 5, 6];

// const multiply = numbers.map((num, i, arr) => {
// // i  is index value
//     return num * 2 + i;
// });
// console.log(multiply);


// // 2- filter

// const num5 = [1, 2, 3, 4, 5, 6, 7, 8];

// const morethan4 = num5.filter((num, i) => {
//     return num > 4;
// });
// console.log(morethan4);


// // 3 - reduce 

// const numss = [2, 3, 4, 65, 6, 7, 8, 808];

// const sum = numss.reduce((acc, curr, index, arr) => {

//     // if there is no intial value , it takes first element of array as value for accululator
//     return acc + curr;

// })

// console.log(sum);


// // // Making Basic understandable  structure  for map :-
// Array.prototype.myMap = function(){
//     console.log("this ==>>" , this);
// // for passing values
//    for(let i=0; i<this.length; i++){
//     console.log(this[i]) ;
//    }
// } ;                  

// let nums2 = [12,24,37,49] ;
// console.log(nums2.myMap()) ;
// // output =>  this ==>> (4) [12, 24, 37, 49]

// //   OR 

// ['a','b','c','d','e'].myMap();
// // // output =>  this ==>> (5) ['a', 'b', 'c', 'd', 'e']


// // // Making Polyfill  for map :-

// Array.prototype.myMap = function(callbackfn){
//     console.log("this ==>>" , this);

// let newArr = [];
//    for(let i=0; i<this.length; i++){
//     newArr.push(callbackfn(this[i])) ;
//    }
//    return newArr ;
// } ;                  

// let nums4 = [12,24,37,49] ;
// let result = nums4.myMap(function (num){
//     console.log(num);
//     return num*2 ;
// }) ;
// console.log(result);
// // Output ==>>  [ 24, 48, 74, 98 ]

// #### Polyfills for map done , Now we done Differnt Operations ####


// Making Polyfill  for Filter :-



// #### Polyfills for Filter done , Now we done Differnt Operations ####

// Making Polyfill  for Filter :-



// #### Polyfills for Reduce done , Now we done Differnt Operations ####



let Boy = {
    name : "Govind" ,
    age : 43,
    getData : function() {
        console.log(` ${this.name} is ${this.age} years old `) ;                
    },
} ;
Boy.getData() ;

let Girl = {
    name : "Gayatari" ,
    age : 73,
    getData : function() {
        console.log(` ${this.name} is ${this.age} years old `) ;                
    },
} ;
Girl.getData() ;

//  OR 


// let Rajesh = {
//     name : "Govind" ,
//     age : 43,
// } ;


// let getData = function() {
//     console.log(` ${this.name} is ${this.age} years old `) ;                
// };

// let Hema = {
//     name : "Gayatari" ,
//     age : 73,
// } ;
// getData.call(Hema) ;
// getData.call(Rajesh) ;



let Rajesh = {
    name : "Govind" ,
    age : 43,
} ;


let getData = function(place ,job) {
    console.log(` ${this.name} is ${this.age} years old. I'm from ${place} . I'm a ${job} in microsoft`) ;                
};

let Hema = {
    name : "Gayatari" ,
    age : 73,
} ;
getData.call(Hema , "Mumbai" ,"Engineer") ;
getData.call(Rajesh , "chennai") ;




















// // #################  Object Prototypes      #################


























