// Question no.-1 :  How  Internet  works ??

// server :- A Computer without  OS 

// Advantage  of class using  over  Function ??

class Human {
    constructor(name , age , color) {
        this.name = name ;
        this.age = age ;
        this.color = color ;
    }

eat() {
    // console.log("eating") ;
    return eating ;
}

think() {
    // console.log("thinking") ;
    return thinking ;
}

sleep() {
    // console.log("sleeping") ;
    return sleeping ;
}
}

let prakash = new Human ("Prakash" , 22 , "Alpha Male") ;
console.log(prakash , prakash.think()) ;
let rani =  new Human ("Rinki" , 20 , "Female") ;

// Inheritance :

class Parent {
    car() {
        console.log("maruti espresso") ;
    }
}

class Child extends Parent{} 

let vaanth = new Parent() 
vaanth.car () ;

let aditya = new Child() 
aditya.car() ;