// // Objects -: 

// Circle = {
//     radius : 1,
//     location: {
//         x : 2,
//         y : 2,
//     },
// };
// console.log(Circle["location"] , Circle["location"]["x"] , Circle["location"]["y"])
// // OR But prefer Array property donot use Dot Operator
// console.log(Circle.location , Circle.location.x , Circle.location.y)

// // we can also use Function inside  of Objects.

// Circle = {
//     radius : 1,
//     location: {
//         x : 2,
//         y : 2,
//     },
//     draw: function() {
      // console.log("Drawing Circle") 
//         return "drawing circle" ;
//     },
//     paint : function() {
//         console.log("Painting the circle Radius")
//     },
// };
// console.log(Circle.draw() , Circle.radius)
// console.log(Circle.paint() , Circle.location)



// Using Function we can find  Radius and location of many Circles.

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


// Example :- 2 

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