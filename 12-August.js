// // How  Internet  works , Server , OSI Model , Computer Networks (Kunal Kushwaha youtube) ??

// // class -->  it is a blue-print
// // objects -->  instance of class  OR   Real time entity

// // Example no. ==>> 1

class Human {
    constructor(name , age , gender) {
        this.name = name ;
        this.age = age ;
        this.gender = gender ;
    }

eat() {
    // console.log("eating") ;
    return 'eating' ;
}

think() {
    // console.log("thinking") ;
    return 'thinking' ;
}

sleep() {
    console.log("sleeping") ;
    // return 'sleeping' ;
}
}

let prakash = new Human ("Prakash" , 22 , "Alpha Male") ;
console.log(prakash , prakash.think()) ;                         // Output :-    Human { name: 'Prakash', age: 22, gender: 'Alpha Male' } thinking

let rani =  new Human ("Rinki" , 20 , "Female") ;
console.log(rani , rani.eat()) ;                                  // Output :-      Human { name: 'Rinki', age: 20, gender: 'Female' } eating


// Example no. ==>> 2


class Car {
    constructor(model , color , brand , type) {
        this.model = model ;
        this.color = color ;
        this.brand = brand ;
        this.type = type ;
    }

    run() {
        return ("running") ;
    }

    playSongs() {
        // console.log("Hollywood Songs")
        return("Hollywood Songs")
    }
}

let hondaCity = new Car("2022" , "red" , "Maruti" , "Sedan") ;
console.log(hondaCity , hondaCity.run() , hondaCity.playSongs()) ;

// Output:- Car { model: '2022', color: 'red', brand: 'Maruti', type: 'Sedan' } running


// // Inheritance :


class Parent {
    car() {
        console.log("maruti espresso") ;
    }
}

class Child {}

let vasant =  new Parent() ;
vasant.car() ;                                                                // Output :-   maruti espresso

// But grand child don't access the Properties

let aditi = new Child() ;
console.log(aditi) ;                                            // Output :-   Child{}
aditi.car() ;                                                  // Output :- TypeError: aditi.car is not a function 



// // For removing This error we use  " extends "

class Parent {
    car() {
        console.log("maruti espresso") ;
    }
}

class Child extends Parent{}

let vasanth =  new Parent() ;
vasanth.car() ;                                                              // Output :-   maruti espresso

let aditya = new Child() ;
aditya.car() ;                                                             // Output :-   maruti espresso

 // // If a parent has a property then child has used it , But  if a child has a extra property  then parent  don't  access  it .



// // // // Polymorphism :

class grandParent {
    house() {
        console.log("Bunglow") ;
    }
}

class Parent extends grandParent {
    car() {
        console.log("maruti espresso") ;
    }
}


class Child extends Parent{
    bike() {
        console.log("Ducati") ;
    }
// If child want his own property
car() {
    console.log("Rolls Royce") ;
}
}


let vinay = new grandParent() ;
vinay.house() ;                                                            // Output :-  Bunglow

let vasanth =  new Parent() ;
vasanth.car() ;                                                              // Output :-   maruti espresso

let aditya = new Child() ;
aditya.car() ;                                                              // Output :-   maruti espresso
aditya.bike() ;                                                              // Output :-   Ducati

// Vasanth and aditya are children of grandParent so , they access it 

vasanth.house() ;                                                            // Output :-  Bunglow
aditya.house() ;                                                             // Output :-  Bunglow
vasanth.car() ;                                                               // Output :-   maruti espresso  
// This is called Method Over-riding in polymorphism . Child property overides parent class 
aditya.car() ;                                                               // Output :-   Rolls Royce

