// // How  Internet  works , Server , OSI Model , Computer Networks read it on your own ??

// // class -->  it is a blue-print
// // objects -->  instance of class  OR   Real time entity

// // Example no. ==>> 1

// class Human {
//     constructor(name , age , gender) {
//         this.name = name ;
//         this.age = age ;
//         this.gender = gender ;
//     }

// eat() {
//     // console.log("eating") ;
//     return 'eating' ;
// }

// think() {
//     // console.log("thinking") ;
//     return 'thinking' ;
// }

// sleep() {
//     console.log("sleeping") ;
//     // return 'sleeping' ;
// }
// }

// let prakash = new Human ("Prakash" , 22 , "Alpha Male") ;
// console.log(prakash , prakash.think()) ;                         // Output :-    Human { name: 'Prakash', age: 22, gender: 'Alpha Male' } thinking


// let rani =  new Human ("Rinki" , 20 , "Female") ;
// console.log(rani , rani.eat()) ;                                  // Output :-      Human { name: 'Rinki', age: 20, gender: 'Female' } eating


// // Example no. ==>> 2


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
        console.log("Hollywood Songs")
    }
}

let hondaCity = new Car("2022" , "red" , "Maruti" , "Sedan") ;
console.log(hondaCity , hondaCity.run()) ;

// Output:- Car { model: '2022', color: 'red', brand: 'Maruti', type: 'Sedan' } running



// // Inheritance :

// class Parent {
//     car() {
//         console.log("maruti espresso") ;
//     }
// }

// class Child extends Parent{} 

// let vaanth = new Parent() 
// vaanth.car () ;

// let aditya = new Child() 
// aditya.car() ;



// // Polymorphism :

