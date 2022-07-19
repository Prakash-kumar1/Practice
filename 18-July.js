// Objects -: 

Circle = {
    radius : 1,
    location: {
        x : 2,
        y : 2,
    },
};
console.log(Circle["location"] , Circle["location"]["x"] , Circle["location"]["y"])
// OR But prefer Array property donot use Dot Operator
console.log(Circle.location , Circle.location.x , Circle.location.y)

// we can also use Function inside  of Objects.

Circle = {
    radius : 1,
    location: {
        x : 2,
        y : 2,
    },
    draw: function() {
        console.log("Drawing Circle") ;
    },
    paint : function() {
        console.log("Painting the circle Radius")
    },
};
console.log(Circle.draw())
console.log(Circle.paint())