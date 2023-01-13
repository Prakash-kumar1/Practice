// // #################    Prototypes  and  it  works     #################

// Question -1: What is meaning of prototype in JavaScript?
//               Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
//               we should use prototypes if we wish to declare a "non-static" method of the object. 
//               var myObject = function () { }; myObject. prototype. getA = function (){ alert("A"); }; myObject.

let mobile = function(model_no){
// Instance Member
    this.model = model_no;
    this.price = 12000 ;
}
let samsung = new mobile('Galaxy');
let apple = new mobile('Pro max');
let POCO = new mobile('x2');
let Redmi = new mobile('xiaomi11');
// Adding color property
samsung.color = 'Blue' ;
// color is available for samsung in console
console.log(samsung) ;
// color is not available for apple , POCO , Redmi in console
console.log(apple) ;
console.log(POCO) ;
console.log(Redmi) ;

// // using this approach , color property is only available for samsung. Assuming we have 1000 different company mobiles we want this color property for that too. writing this way code is too complicated. For solving this problem we use =>> " Prototype "


 // Prototype Syntax ==>>  classname.Prototype.key = 'value' ;
 // Prototype Member ==> when use .prototype that is Prototype Member

mobile.prototype.camera = 'Ultra pro MAX - HD' ;
// camera is available for all objects in console . click on prototype , we can see 
console.log(samsung) ;
console.log(apple) ;
console.log(POCO) ;
console.log(Redmi) ;

 // In JS , function creates two objects . 
 // 1 ==>> Constructor (Function name ) 
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
// output in console : {constructor: ƒ}
//                       {constructor: ƒ}
//                        true 


// As we can see , Both constructors are same

console.log(Mobile === Me.__proto__.constructor ) ;
console.log(Mobile === Mobile.prototype.constructor ) ;
// // output :=>  Both are True


// // #################    Prototypical Inheritance  (21-August session)   #################


let nums = [1,2,3,4,5] ;
// All properties of array inherited(comes in) nums
console.log(nums.__proto__  ===  Array.prototype)   //true
// Prototype prints Available methods
// __proto__ prints Parents methods
// nums.__proto__   gives  Array methods
// nums.__proto__.__proto__   gives  object methods
// nums.__proto__.__proto__.__proto__   gives  Null


let person = {
    name : "Prakash" ,
    age : 23,
    getInfo : function() {
        // console.log((this.name)+ "is" +(this.age)+ "years old") ;
        console.log(` ${this.name} is ${this.age} years old `) ;                
    },
} ;

let person2 = {
    name : "Anjali" ,
} ;

// Never ever do this in your code
person2.__proto__ = person ;
console.log(person2.age)               // 23
console.log(person.age)               // 23
console.log(person2.name)             // Anjali (local has more Priority)
console.log(person2.getInfo())       // Anjali is 23 years old
console.log(person.getInfo())       // Prakash is 23 years old

 // ######### Polyfills (Creating own method)  ########


 // Making own method :- 

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

// // Example no. ==>>1     In case of  Numbers

// const numss = [2, 3, 4, 65, 6, 7, 8, 808];

// const sum = numss.reduce((acc, curr, index, arr) => {

//     // if there is no intial value , it takes first element of array as value for accululator
//     return acc + curr;

// })

// console.log(sum);

// // Example no. ==>>2     In case of  Strings

// const reduceStrings = ["sachin","tendular","breaks all" , "records","in Cricket"].reduce(
//     (acc , current) => {
//         console.log(acc , current) ;
//         return  acc + " " + current;
//     } ,10           // 10 is intial value.By default intial value is Zero.you can write anything in place of string.
// );
// console.log(reduceStrings) ;

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
//     // console.log("this ==>>" , this);
//     let myArr = this ;

// let newArr = [];
//    for(let i=0; i<myArr.length; i++){
//     let data = callbackfn(myArr[i] , i , myArr) ;
//     newArr.push(data) ;
//    }
//    return newArr ;
// } ;       

// // / #### Polyfills for map done , Now we done Differnt Operations ####

// let nums4 = [12,24,37,49] ;
// let result = nums4.myMap(function (num){
//     // console.log(num);
//     return num*2 ;
// }) ;
// console.log(result);
// // Output ==>>  [ 24, 48, 74, 98 ]

// // #### Polyfills for map done , it works completely like map ####


// // Making Polyfill  for Filter :-

//  Array.prototype.myFilter = function(callbackfn){
//         // console.log("this ==>>" , this);
//         let myArr = this ;
    
//     let newArr = [];
//        for(let i=0; i<myArr.length; i++){
//         if(callbackfn(myArr[i])){
//             newArr.push(this[i]) ;
//         }
//        }
//        return newArr ;
//     } ;       

//  // / #### Polyfills for Filter done , Now we done Differnt Operations ####

// let nums6 = [1,2,3,4,5].myFilter((num) => num > 2);
// // Output ==>>  [ 3,4,5 ]

// // #### Polyfills for Filter done , Now we done Differnt Operations ####


// // Making Polyfill  for Reduce  (21-August Sunday - session):-

// // By default  intialValue  is 0 

// Array.prototype.myReduce = function (callbackFn, initialValue) {
//     console.log(this);                   // this gives Array
//     let acc = initialValue;
//     for (let i = 0; i < this.length; i++) {
//       if (acc !== undefined) {
//         acc = callbackFn(acc, this[i]);
//       } else {
//         acc = this[i];
//       }
//     }
//     return acc;
//   };
  
// // #### Polyfills for Reduce done , Now we done Differnt Operations ####

//   let reducedNum = [1, 2, 3, 4].myReduce((acc, current) => {
//     // console.log(acc, current);
//     return acc + current ;
//   });
  
//   console.log(reducedNum);                //10

// // #### Polyfills for Reduce done , Now we done Differnt Operations ####


// // =====>>> ****************$$$$$$$$$$$$$@@@@@@@@@&&&&&&&&&&**************  <<<<========

// // // ######### 22 - August Session ( Object Prototypes , Call , Bind , Apply)  ########


// let Boy = {
//     name : "Govind" ,
//     age : 43,
//     getData : function() {
//         console.log(` ${this.name} is ${this.age} years old `) ;                
//     },
// } ;
// Boy.getData() ;

// let Girl = {
//     name : "Gayatari" ,
//     age : 73,
//     getData : function() {
//         console.log(` ${this.name} is ${this.age} years old `) ;                
//     },
// } ;
// Girl.getData() ;

// // For every person we are creating same function , which is no of use . leT,s see another way

// // #########  Call Method  #########
// // Example ==>> 1

// let Rajesh = {
//     name : "Rajesh Saini" ,
//     age : 14,
//     food : "Dosa",
// } ;

// // getData forms closures with Objects .
// let getData = function() {
//     console.log(` ${this.name} is ${this.age} years old . He or she loves ${this.food}`) ;                
// };

// let Hema = {
//     name : "Hema mane" ,
//     age : 13,
//     food : "Biryani",
// } ;
// getData.call(Hema) ;
// getData.call(Rajesh) ;

// // Example ==>> 2     passing  Multiple  Parameters

// let Prakash = {
//     name : "Prakash Kumar" ,
//     age : 23,
// } ;


// let getInfo = function(place ,job,package , char = "joyful") {
//     console.log(` ${this.name} is ${this.age} years old. I'm from ${place} . I'm a ${job} in microsoft with the package of ${package} as a Fresher. I am ${char}`) ;                
// };

// let Anjali = {
//     name : "Anjali Yadav" ,
//     age : 23,
// } ;
// getInfo.call(Anjali , "Delhi" ,"Electrical-Engineer" ) ;
// getInfo.call(Prakash , "Uttar Pradesh" , "Frontend-Engineer" , "50 LPA") ;


// // #########  Apply Method  #########  (accept parameters in array)

// // Borrowing function for my object is known as function Borrowing .
// // Example ==>> 1

// let Shivansh = {
//     name : "Shivansh Rawat" ,
//     age : 23,
// } ;


// let getInform = function(place ,job,package , char = "notorious") {
//     console.log(` ${this.name} is ${this.age} years old. I'm from ${place} . I'm a ${job} in microsoft with the package of ${package} as a Fresher. I am ${char}`) ;                
// };

// let Shweta = {
//     name : "Shweta Kodam" ,
//     age : 33,
// } ;

// let Raghavendra = {
//     name : "Raghavendra S Yarogappa" ,
//     age : 53,
// } ;

// getInform.apply(Shweta , ["Mumbai" ,"Content- Writer"] ) ;
// getInform.apply(Shivansh , ["Uttrakhand" , "Frontend Developer" , "15 LPA"]) ;
// getInform.apply(Raghavendra , ["TamilNadu" , "Accountant" , "5 LPA" , "Lovely"]) ;


// // In this case , we have to use apply for each data in each time this is not good way => leT,s see another way

// // Syntax ==>>         let anyName = {
// //                           {
// //                            object : {} ,
// //                            params : [""],
// //                           },
                       
// //                           {
// //                            object : {} ,
// //                            params : [""],
// //                           },
                       
// //                           {
// //                            object : {} ,
// //                            params : [""],
// //                           },
// //                     }


// let getInformation = function(place ,job,package , char = "notorious") {
//     console.log(` ${this.name} is ${this.age} years old. I'm from ${place} . I'm a ${job} in Tesla with the package of ${package} as a Fresher. I am ${char}`) ;                
// };

// let students = [
//     {
//         Obj : {
//         name : "Abhishek Kholpar" ,
//         age  : 21 ,
//         qualification : "12th pass" ,
//     },

//     params : ["Pune" , "Shy"]
// },
//     {
//         Obj : {
//         name : "Amit Kumar" ,
//         age  : 24 ,
//         qualification : "Graduation" ,
//     },
//     params : ["Delhi" , "Bold"]
// },
//     {
//         Obj : {
//         name : "Sameer Varshney" ,
//         age  : 21 ,
//         qualification : "Under Graduate" ,
//     },
//     params : ["Madhya Pardesh" , "Funny"]
// },
//     {
//         Obj : {
//         name : "Archana" ,
//         age  : 21 ,
//         qualification : "Doctor" ,
//     },
//     params : ["Hyderabad" , "Confident"]
// },
//     {Obj : {
//         name : "Arti" ,
//         age  : 41 ,
//         qualification : "Ph.d" ,
//     },
//     params : ["Jharkhand" , "Dull"]}
// ]

// for(let data of students){
// //   console.log(data);                    // this will print Each Data
// // console.log(data.Obj , data.params);                      //// this will print Object and Parameters seperately
// getInformation.apply(data.Obj , data.params)                    //// this will print sentence
// }


// // Question no.=>1  Is it possible to store all params inside a variable ??
// // Answer ==>>  yes , we need to do binding . so , we use Bind method

// // #########  Bind Method  ######### 


// let Anish = {
//     name : "Anish Rangan" ,
//     profession : "doctor",
// } ;

// let Sachin = {
//     name : "sachin kashyam" ,
//     profession : "Data Enginneer",
// } ;

// let getInformation1 = function(place ,job,package, food, char ="naughty and Fool" ) {
//     console.log(` ${this.name} profession is a ${this.profession} . I'm from ${place} . I'm a ${job} in Google with the package of ${package} as a Fresher. I am ${char} in nature , My favourite food is ${food}`) ;                
// };

// let Ananya = {
//     name : "Ananya Pandey" ,
//     profession : "Actress",
// } ;

// let Arjun = {
//     name : "Arjun kapoor" ,
//     profession : "Unemployed Flop Director son's",
// } ;

// let anishData = getInformation1.bind(Anish ,"Assam" , "Carpenter" , "14LPA","Biryani" ,"Kind" ) ;
// let sachinData = getInformation1.bind(Sachin,"London" , "Driver" , "4LPA" , "Chicken","Angry") ;
// let ananyaData = getInformation1.bind(Ananya,"Juhu Beach" , "Labour" , "undefined ", "Pork" )
// let arjunData = getInformation1.bind(Arjun,"Chennai" , "Electrician" , "100 Dollar","Poop" )
// anishData() ;
// sachinData() ;
// ananyaData() ;
// arjunData();


// // // #################    Object Prototypes      #################

// // Example ==>>

// let Person11 = {
//     name : "Ritesh" ,
//     age : 27 ,
// };

// let Person12 = {
//     name : "Brijesh" ,
//     age : 47 ,
// };


// Person12.__proto__ = Person11 ;
// console.log(Object.getPrototypeOf(Person12)) ;

// // Checking property is present or not

// console.log(Object.hasOwn(Person12 , "age")) ;               //true
// console.log(Object.hasOwn(Person12 , "food")) ;              //false


// // Changing Property
// Person11["name"] = "Abhishek kholpar" ;
// console.log(Person11) ;
// // output ===>>      { name: 'Abhishek kholpar', age: 27 }

// Person11["name"] = "Satyanarayan Agrahari" ;
// console.log(Person11) ;
// // output ===>>      { name: 'Satyanarayan Agrahari', age: 27 }


// // How to stop in changing Property ??

// Object.freeze(Person11) ;

// Person11["name"] = "Durgawati " ;
// // Now it don't change
// console.log(Person11) ;


// // // Adding Property
// Person11["place"] = "Uttar Pradesh" ;
// console.log(Person11.place) ;          //Uttar Pradesh

// // OR we can use defineProperty

// Object.defineProperty(Person12 , "place" ,{
//     value : "Russia" ,
// // by default writable is false , so we can't change
//     writable : true
// })
// console.log(Person12.place) ;          //Russia

// // if writable is true then we can change
// Person12.place = "assam"
// console.log(Person12.place) ;             //assam

// // Arugments  are  also type of Objects and it is a In-built methods for Function

// function subtract(n1,n2,n3){
//     console.log(arguments[0] , arguments[1] , arguments[2]) ;
//     return n1+n2+n3 ;
// }
// subtract(5,7,16) ;


// console.log(typeof arguments) ;           //object


