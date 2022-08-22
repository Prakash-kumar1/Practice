// #################    Prototypes  and  it  works     #################

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

// // using this approach , color property is only available for samsung. Assuming we have 1000 different company mobiles we want this color property for that too . writing this way code is too complicated. For solving this problem we use =>> " Prototype "


// // Prototype Syntax ==>>  classname.Prototype.key = 'value' ;
// // Prototype Member ==> whwn use .prototype that is Prototype Member

// mobile.prototype.camera = 'Ultra pro MAX - HD' ;
// // camera is available for all objects in console . click on prototype , we can see 
// console.log(samsung) ;
// console.log(apple) ;
// console.log(POCO) ;
// console.log(Redmi) ;

// // In JS , function creates two objects . 
// // 1 ==>> Constructor (Function name ) 
// // 2 ==>> Object  (Prototype)


function Mobile(){

}
console.log(Mobile.prototype) ;
// output in console : {constructor: ƒ}
//                      constructor: ƒ Mobile()
//                       [[Prototype]]: Object            

let Me = new Mobile() ;
console.log(Me.__proto__) ;

// verify
console.log(Mobile.prototype === Me.__proto__ ) ;
// / output in console : {constructor: ƒ}
//                       {constructor: ƒ}
//                        true 


// As we can see , Both constructors are same

console.log(Mobile === Me.__proto__.constructor ) ;
console.log(Mobile === Mobile.prototype.constructor ) ;
// output :=>  Both are True


// #################    Prototypical Inheritance     #################


let nums = [1,2,3,4,5] ;
// All properties of array inherited(comes in) nums
console.log(nums.__proto__  ===  Array.prototype)   //true
// Prototype prints Available methods
// __proto__ prints Parents methods
// nums.__proto__   gives  Array methods
// nums.__proto__.__proto__   gives  object methods
// nums.__proto__.__proto__.__proto__   gives  Null




























