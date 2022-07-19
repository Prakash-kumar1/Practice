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

