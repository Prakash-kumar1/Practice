// Question No.-1: find unique characters ?

let chars = ["a", "b", "a", "c", "b"]
let uniqueArray = []
for(let i=0; i< chars.length; i++){
    if(! uniqueArray.includes(chars[i])){
        uniqueArray.push(chars[i]) ;
    }
}
console.log(uniqueArray) ;

//  solving above question using Callback Method.

let uniqueChars = chars.filter((char,index)=>{
    // console.log(char,index)
// if you want Duplicate character just put ( !== ) in condition
    return chars.indexOf(char) === index ;
})
console.log(uniqueChars) ;

// // Example -2 for beeter understanding of question

let arr = [1, 2,3, 1];
for(let i=0; i<arr.length; i++){
    console.log(i, arr.indexOf(arr[i]))
}


// Question No.-3: find largest numbers ?

let nums = [11, 9, 4, 17, 25, 33, 19]
// if you write b-a it will give Descending Order.
nums.sort((a,b) => a-b)
console.log(nums) ;
console.log(nums[nums.length - 1]) ;

// using another method find largest number 

function getLargest(nums , position){
    nums.sort((a,b) => b - a) ;
    console.log(nums);
    return nums[position - 1] ;
}
// if you want IInd largest or IIIrd largest just put Position.
console.log(getLargest(nums , 1))


// Question no.-4 : Find A String of bracket is valid or not ??

function isValid(String){
 let map = {
    "{":"}",
    "[":"]" ,
    "(":")" ,
 };
 let stack = [] ;
 for(let i=0; i<String.length; i++){
    // console.log(String[i]);
if(String[i] == '[' || String[i] == '(' || String[i] == '{'){
    stack.push(String[i]) ;
}else{
    let closeingBracket = String[i] ;
    // console.log("closing" , closeingBrackets) ;
    let openingBracket = stack.pop() ;
    // console.log(openingBracket , closeingBracket) ;
    if(closeingBracket  !==  map[openingBracket]){
        return false ;
    }
}
 }
 if(stack.length !== 0){
    return false ;
 }
 return true ;
}

console.log(isValid("{([])}")) ;
console.log(isValid("{([]}")) ;
console.log(isValid("}{")) ;
console.log(isValid("{[]")) ;
console.log(isValid("{[]}")) ;


// // Question no.-5 : Rotate the number by 1 character ??
let string = 'Aircampus' ;
let rotatingString = string.slice(0,2) ;
let slicedString = string.slice(1) ;
console.log(`${slicedString}${rotatingString}`) ;


// Question no.-6 : Reverse the string in same order ??

let news = "Prakash is a Technition-IInd grade in UPRVUNL. "
let newsArray = news.split(" ") ;
// console.log(newsArray) ;

for(let i=0; i<newsArray.length; i++){
    newsArray[i] = newsArray[i].split("").reverse().join("") ;
}
console.log(newsArray);


// // Question no.-7 : print 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
  
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  let top = 0,bottom = 3, left = 0, right = 3, direction = 0;
  
    while(left <= right && top<=bottom) {
      if(direction == 0) {
          for(let i=left; i<=right; i++) {
              console.log(matrix[top][i]);
          }
          top += 1;
          direction = 1;
      }
  
      if(direction == 1) {
          for(let i=top; i<=bottom; i++) {
              console.log(matrix[i][right]);
          }
          right -= 1;
          direction = 2;
      }
  
      if(direction == 2) {
          for(let i=right; i>= left; i--) {
              console.log(matrix[bottom][i]);
          }
          bottom -= 1;
          direction = 3;
      }
  
      if(direction == 3) {
          for(let i=bottom; i>=top; i--) {
              console.log(matrix[i][left]);
          }
          left += 1;
          direction = 0
      }
    }
  