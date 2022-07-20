// // // Objects -: 

Circle = {
    radius : 1,
    location: {
        x : 2,
        y : 2,
    },
};
console.log(Circle["location"] , Circle["location"]["x"] , Circle["location"]["y"])
// // OR But prefer Array property donot use Dot Operator
console.log(Circle.location , Circle.location.x , Circle.location.y)

// // we can also use Function inside  of Objects.

Circle = {
    radius : 1,
    location: {
        x : 2,
        y : 2,
    },
    draw: function() {
    //   console.log("Drawing Circle") 
        return "drawing circle" ;
    },
    paint : function() {
        console.log("Painting the circle Radius")
    },
};
console.log(Circle.draw() , Circle.radius)
console.log(Circle.paint() , Circle.location)



// // Using Function we can find  Radius and location of many Circles.

function createCircle(radius , location) {
    const Circle = {
            radius : radius,
            location: location ,
            draw: function() {
                return "drawing circle" ;
            },
            paint : function() {
                return ("Painting the circle Radius")
            },
        };  
        return Circle ;
}

let Circle1 = createCircle(1,{
    x : 2 ,
    y : 2 ,
}) ;

console.log(Circle1) ;
console.log(Circle1.radius , Circle1.draw()) ;
console.log(Circle1.location , Circle1.paint()) ;

let Circle2 = createCircle(16,{
    x : 23 ,
    y : 28 ,
}) ;

console.log(Circle2) ;
console.log(Circle2.radius , Circle2.draw()) ;
console.log(Circle2.location , Circle2.paint()) ;


// Example :- 2  using Function we can find many person Datas.

function createPerson(fullname,job,place,food){
    return{
        fullname: fullname ,
        job: job,
        place: place,
        food: food,
    };
}

let prakash = createPerson("PrakashKumarSingh","Frontend-Engineer","Noida","Dosa")
console.log(prakash);
console.log(prakash.job);
console.log(prakash["food"]);

let santosh = createPerson("SantoshGond","Technition","Obra","Chicken")
console.log(santosh);
console.log(santosh.fullname);
console.log(santosh["place"]);



// // Example-3: in a function if we take default parameter and we can't pass any value it will automatically take default value.

function createEmployees(fullname, job = "TG-IInd" ,place, food = "paneer"){
    return{
        fullname: fullname ,
        job: job,
        place: place,
        food: food,
    };
}


// // // here we not pass food value it will take default value "Paneer"
let praksh = createEmployees("prakashKumar","Frontend-Engineer","Noida")
console.log(praksh);
console.log(praksh.job);
console.log(praksh["food"]);


//  here we not pass job value it will take default value "TG-IInd"
let santsh = createEmployees("SantoshGond","Obra","Chicken")
console.log(santsh);
console.log(santsh.fullname);
console.log(santsh["place"]);


// // Any function which creating Objects is called --> "Factory"
// // Any function which taking Arguments returns new Objects is called --> "Factory method"
// // Any variable Present inside the Object is known as "Property"  and Present outside the Object is called Variable .


// // Read about ------->  "DOM"    &     "window Object" (it uses renders html on web pages)       <------------  


 // // Constructor  Method : in Javascrript  function and classes are same .

function Chicken(breed){
    name = "Prakash"
// this is a global object read on MDN .
    console.log(this) ;
}
Chicken() ;


function Chicken(breed){
    this.breed = breed ;
    this.cut = function() {
        return "cutting the Chicken" ;
    };
    return this ;
}
let shopify = Chicken("desi murga")  ;
console.log(shopify , shopify.cut()) ;

let shopkeeper = Chicken("Farm murga")  ;
console.log(shopkeeper , shopkeeper.cut()) ;

// in output we can see so many global objects which doesn't need so for creating new objects we use --->>> " new keyword "

function Chicken(breed){
    this.breed = breed ;
    this.cut = function() {
        return "cutting the Chicken" ;
    };
    return this ;
}
let shop = new Chicken("desi murga")  ;
console.log(shop , shop.cut()) ;

let shopkeper = new Chicken("Farm murga")  ;
console.log(shopkeper , shopkeper.cut()) ;


//  we can add oject in function


function createCircle(radius , location) {
    const Circle = {
            radius : radius,
            draw: function() {
                return "drawing circle" ;
            },
            paint : function() {
                return ("Painting the circle Radius")
            },
        };  
        return Circle ;
}
let Circle3 = createCircle(10) ;
// Adding new Object
Circle1.name = "Prakash" ;

console.log(Circle3) ;
console.log(Circle3.radius , Circle3.draw() , Circle3.name) ;
console.log(Circle3.paint() , Circle3.name) ;


// // Some examples of  "new "  keyword : when we are writing any function , string , number it will store by creating Objects.

let num =  10 ;
let num1 = new Number(78) ;
console.log(num , num1)



let names = "Prakash"  ;
let lname = new String("Kumar")  ;
console.log(names , lname)

// // Basic Function

function add(num1){
    console.log(num1) ;
    console.log(num1 + 10) ;
    console.log(num1 - 10) ;
    console.log(num1 * 10) ;
}
add(234) ;
