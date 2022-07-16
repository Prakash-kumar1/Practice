// Question No.-1: find unique characters ?

let chars = ["a", "b", "a", "c", "b"]
let uniqueArray = []
for(let i=0; i< chars.length; i++){
    if(! uniqueArray.includes(chars[i])){
        uniqueArray.push(chars[i]) ;
    }
}
console.log(uniqueArray) ;

//  solving above question using Callback Function.
























