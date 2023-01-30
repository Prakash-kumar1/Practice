// OPtional chaining : Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that 
                    //    might currently be nil . If the optional contains a value,  the property, method, or
//                         subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil .

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber);

// Function inside object is known as Method 
const person = {
    fname : "prakash",
    age : 23,
    about : function(){
        console.log(`person name is ${this.fname}`)
        console.log(`my age is ${this.age}`)
        console.log(this)
    }
}
person.about() ;


// Another example
function personInfo(){
    console.log(`person name is ${this.fname} and favourite food is ${this.food}`)
}

const person1 = {
    fname : "Roshani",
    age : 23,
    food : "egg-Roll",
    about : personInfo
}

const person2 = {
    fname : "Gayatri",
    age : 32,
    food : "Chicken Biryani",
    about : personInfo
}

const person3 = {
    fname : "anjali",
    age : 13,
    food : "Idli-Dosa",
    about : personInfo
}

person1.about() ;
person2.about() ;
person3.about() ;


// call method :- binds the this value, invokes the function, and allows you to pass a list of arguments.
const person4 = {
    fname : "Sneha shinde",
    age : 20,
    food : "mutton",
    aboutMe : function(hobby, singer){
        console.log(this.fname ,"loves", this.food, hobby, singer)
    }
}

const person5 = {
    fname : "Shweta",
    age : 23,
    food : "pork and beef",
}

const person6 = {
    fname : "archana",
    age : 33,
    food : "Chhola Bhatura",
}

person4.aboutMe("", "Arjit singh") ;
person4.aboutMe.call() ;
person4.aboutMe.call(person5, "Tabla", "Rangnathan") ;
person4.aboutMe.call(person6,"", "Nick Jonas") ;


// apply method :- similar to call method. binds the this value, invokes the function, and allows you to pass arguments as an array.

function aboutMe(hobby, singer){
    console.log(this.fname ,"loves", this.food, hobby, singer)
}

const person7 = {
    fname : "Sneha shinde",
    age : 20,
    food : "mutton",
}

const person8 = {
    fname : "Shweta",
    age : 23,
    food : "pork and beef",
}

const person9 = {
    fname : "archana",
    age : 33,
    food : "Chhola Bhatura",
}

aboutMe.call(person8, "guitar", "Louis")
aboutMe.call(person9, "Harmonium", "")

// OR WE can write for appply this way

aboutMe.apply(person8, ["guitar", "Louis"])
aboutMe.apply(person9, ["Harmonium", ""])


// Bind Method :- binds the this value, returns a new function, and allows you to pass in a list of arguments.

function aboutMy(hobby, singer){
    console.log(this.fname ,"loves", this.food, hobby, singer)
}

const person10 = {
    fname : "Sneha shinde",
    age : 20,
    food : "mutton",
}

const person11 = {
    fname : "Shweta",
    age : 23,
    food : "pork and beef",
}

const func = aboutMy.bind(person10, "Shenai", "Ravi shankar")
func() ;


// Another example
const person12 = {
    fname : "Juli singh",
    gender : "Transgender",
    drink: "Sprite, mazza",
    details: function(){
        console.log(this.fname, this.gender, this.drink)
    }
}

// without using bind it shows Error 
const myFunc = person12.details.bind(person12)
// console.log(myFunc)  // when myFunc is variable, no need of Bind
myFunc() ;

// in case of arrow function, this  takes one level up means window object
// with arrow function, this keyword always represents the object that define arrow function.
const person13 = {
    fname : "arti",
    gender : "female",
    drink: "coca-cola",
    details: () =>{
        console.log(this) ;   
        console.log(this.fname, this.gender, this.drink)
    }
}
person13.details()

// example:-2 
let me = { 
    name: "Ashutosh Verma", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   
   me.thisInArrow(); 
   me.thisInRegular();


// / function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);


// @@###  If we want this function for multiple objects then it becomes too large and repeated.
// ###@@@$$$  For solving this problem, we take function outside and call their reference
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return "tu jaane na"
    }
}
function userInfo(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}

const user4 = userInfo('harshit', 'vashsith', 'harshit@gmail.com', 9, "Dwarka");
const user2 = userInfo('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = userInfo('mohit', 'Bhardwaj', 'hemant@gmail.com', 17, "Janakpuri");
console.log(user4.about());
console.log(user3.about());
console.log(user3.sing());


// !!!@@@###$$$%%%%^^^&&&&****(()) -->> !!!@@@###$$$%%%%^^^&&&&****(())

const obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}

let obj2 = {
    key4: "item4"
}

console.log(obj2.key4)   // item4
console.log(obj2.key2)   //undefined, key2 not present in obj2

// but agar main chahta hoon ki ye obj1 se le le
obj2 = Object.create(obj1)
console.log(obj2.key2)   //value2
console.log(obj2.key3)   //value3

console.log(obj2.__proto__)   // it gives obj1, because Object.create makes obj1 prototype of obj2

// !!!@@@###$$$%%%%^^^&&&&****(()) -->> !!!@@@###$$$%%%%^^^&&&&****(())


const userMethods1 = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return "har har mahadev"
    },
    food : function(){
        return "Bahubali thaali"
    },
    company : function(){
        return "Microsoft"
    },
}
function userData(firstName, lastName, email, age, address){
    const user = Object.create(userMethods1);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
// suppose there are 1000 functions, then writing this way is too large
    // user.about = userMethods1.about;
    // user.is18 = userMethods1.is18;
    // user.sing = userMethods1.sing;
    // user.food = userMethods1.food;
    // user.company = userMethods1.company;
    return user;
}

const user6 = userData('harshit', 'vashsith', 'harshit@gmail.com', 9, "Dwarka");
const user7 = userData('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user8 = userData('mohit', 'Bhardwaj', 'hemant@gmail.com', 17, "Janakpuri");

console.log(user6.company());
console.log(user8.food());
console.log(user8.sing());

// In javascript, we can also treat function like objects
function hi(){
    console.log("Functions treat like objects")
}
// hi() ;

// you can add your own properties
hi.myOwnProperty = "adding new property" ;
console.log(hi.myOwnProperty)
console.log(hi.name)

// only function provide prototype property
hi.prototype.name = "Gautam" ;
hi.prototype.class = "Aircampus" ;
hi.prototype.sing = function(){
    return "Dhoom machale"
} ;
console.log(hi.prototype)
console.log(hi.prototype.class)
console.log(hi.prototype.sing())

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.


// Question no:-11 =>> what is new keyword in javascript
// Answer =>>  New keyword in JavaScript is used to create an instance of an object that has a constructor function.
//            On calling the constructor function with 'new' operator, the following actions are taken: 
// A new empty object is created. means this refers to empty object {}
// return this means returning empty object
// 


function userDetails(firstName, age){
    this.firstName = firstName ;
    this.age = age ;
}

userDetails.prototype.aboutSelf = function(){
    console.log(this.firstName, this.age)
}

const user11 = new userDetails("govind verma", 92)
console.log(user11)
console.log(user11.aboutSelf())

// Another example
function UserInformation(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
UserInformation.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};

UserInformation.prototype.is18 = function (){
    return this.age >= 18; 
}

UserInformation.prototype.sing = function (){
    return "la la la la ";
}


const user21 = new UserInformation('Yogesh', 'vashsith', 'yoga@gmail.com', 18, "chudi gali");
const user22 = new UserInformation('monika', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user23 = new UserInformation('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

console.log(user21) ;
console.log(user22.is18()) ;
console.log(user22.sing()) ;

// if we want key
for(let key in user1){
// it gives also keys from prototypes
    // console.log(key);

// For avoiding keys from prototype
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}


// Question no- 12:=>>  what is class in javascript ??
//  Answer =>>  A class is a type of object template. The class statement initiates a JavaScript class. Properties and methods are assigned 
//              in the constructor() method. The constructor() method is called each time a class object is initialized.

// class keyword 
// class are fake

class CreateData{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }
}

const user31 = new CreateData('Sanjeeta', 'singh', 'harshit@gmail.com', 18, "my address");
const user32 = new CreateData('harsh', 'mastani', 'harshit@gmail.com', 19, "my address");
const user33 = new CreateData('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

// console.log(Object.getPrototypeOf(user1));
console.log(user31) ;
console.log(user32.is18()) ;
console.log(user33.sing()) ;

// Another example
class Animal{
    constructor(name, age){
        console.log("Animal constructor called")
        this.name = name ;
        this.age = age ;
    }

    eat(){
        return `${this.name} is eating`
    }
    aged(){
        return this.age <= 3 ;
    }
    isCute(){
        return true ;
    }
}

const animal1 = new Animal("khushi",2)
const animal2 = new Animal("Rocky",7)
console.log(animal1.eat())
console.log(animal1.aged())
console.log(animal2)
console.log(animal2.isCute())


// by using this animal class, we can create Dog class cat class or any other class but then we repeat our code
// for removing this problem we use "extends" keyword.

class Dog extends Animal{

}
const tommy = new Dog("tommy", 2);
console.log(tommy) ;   // these property comes from Animal class
console.log(tommy.isCute())

class Cat extends Animal{

}
const Billa = new Cat("Billa", 3);
console.log(Billa) ;   // these property comes from Animal class
console.log(Billa.eat())

class Bird extends Animal{
}
const moti = new Bird("moti", 2);
console.log(moti) ;   // these property comes from Animal class
console.log(tommy.aged())


// Question no- 14:=>>  What is super () used for?
// Answer =>>   The super() function is used to give access to methods and properties of a parent or sibling class.
//              The super() function returns an object that represents the parent class.

// But if i want to add a new parameter like speed, then i am using super()
class Tiger extends Animal{
    constructor(name, age, speed){
        super(name, age) ;      // here, animal class is super class
        this.speed = speed ;
    }

    eat(){
        return `Modified Eat=>> ${this.name} is eating deer meat`
    }

    run(){
        return `${this.name} is running at ${this.speed} km per hr`
    }

}
const shera = new Tiger("sher khan", 2, 87);
console.log(shera) ;   
console.log(shera.run()) ;   
console.log(shera.eat()) ;   


// !!!@@@@####$$$%%%^^^&&& ==>>  ||  getters and setters || <<==!!!@@@@####$$$%%%^^^&&&
class Student{
    constructor(firstName, lastName, gender){
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.gender = gender ;
    }
// using get keyword, we can use Fullname as a property
    get fullName(){
        return `${this.firstName} ${this.lastName} =>> ${this.gender}`
    }

//  using set keyword, we can set the property value.
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName ;
        this.lastName = lastName ;
    }
}

const student1 = new Student("prabhat","verma","male")
const student2 = new Student("Shiksha","vishwkarma","Female")

// here, i am using fullname as a Method
// console.log(student1.fullName())
// console.log(student2.fullName())

// But if i want same output using fullname as property. then i use "get"
console.log(student1.fullName)
console.log(student2.fullName)

// if i want to change value from outside like objects, then i used "Set" keyword
student2.fullName = "Anjali Yadav" ;
console.log(student2)


// Question no.=>> 16 :-  what is Hoisting in javascript ??
// Answer:- During the creation phase in Global execution context, the JS engine moves the function declarations, variables or classes 
//          to the top of their scope. this feature is known as Hoisting.

// Question no.=>> 15 :-  what is temporal dead zone in javascript ??
// Answer:- The time between hoisting && code execution is known as "Temporal Dead Zone". 
//          Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. TDZ  starts
//  when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed.

// !!!!@@@####$$$$++++====>>>  Important website for scopes and Lexical Environment  <<<<=== !!!!@@@####$$$$++++====>>>
//                  https://anuradha.hashnode.dev/scope-chain-and-lexical-environment-in-javascript




