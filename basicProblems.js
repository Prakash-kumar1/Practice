// some Basic Array Problems without In-Built method 

//Find max
let arr=[13,45,67,23];
let max=0;
for(let i=0; i<arr.length; i++){
  if(max<arr[i]){
    max=arr[i];
 }
}
console.log(max);


//Find min 
let arr1=[1,-23,45,70];
let min=0;
for(let i=0; i<arr1.length; i++){
  if(min>arr1[i]){
    min=arr1[i];
 }
}
console.log(min);



// //Search an element in the given array:-

let array1=[1,2,3,4];
let searchElement=3;
for(let i=0; i<array1.length; i++){
  if(array1[i] == searchElement){
    console.log('element is present');
  }else{
    console.log('element is not present')
  }
}



//sorting an array:-
 array = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 1; i < array.length; i++)
    for (let j = 0; j < i; j++)
        if (array[i] < array[j]) {
          let x = array[i];
          array[i] = array[j];
          array[j] = x;
        }

console.log(array);


//delete an element from an array:-

let array3 = [12,34,2,45,67,32];
let index = 3 
for(let i=0; i < array3.length; i++){
  if(i==index){
   array3.splice(i,1);
  }
}
console.log(array3);


// //updating
// let array=[1,23,4,5,6];
// array.forEach((res,i,output)=>output[i]=res+10)
// console.log(array)



//Square each element of an array:-

const numbers = [1, 2, 3, 4, 5];
function power2(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
}
power2(numbers)
console.log(numbers); //[1,4,9,16,25]


// Converting 1D array into 2D array

let arr5 = [1,2,3,4,5,6,7,8] ;
let NewArr = [] ;
while (arr5.length > 0){
  NewArr.push(arr5.splice(0,3)) ;
}
console.log(NewArr) ;


// Printing the numbers which Index Position is Odd as well as element is Odd

let arr6 = [1,2,3,7,5,9] ;
let NewArray = [] ;

for(let i in arr6){
  if( i%2 != 0 && arr6[i]%2 != 0){
    NewArray.push(arr6[i]) ;
  }
}
console.log(NewArray) ;


