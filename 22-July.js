// ////  Question no-1 find Power of a number using Function ?


function getPower(base , exponential){
    let total = 1 ;
for(let i=0; i<exponential; i++){
    total *= base ;
}
return total ;
}
console.log(getPower(2,4))


// // Using Base Condition (line-19) & Error condition (line-18)


function getPower(base , exponential){
    if(exponential < 0) return -1 ;
    if(exponential == 0) return 1 ;
    let total = 1 ;
for(let i=0; i<exponential; i++){
    total *= base ;
}
return total ;
}
console.log(getPower(2,-1)) 


// // Question no-2  find Power of a number using Recursion ?

function Power(base , exponent){
        if(exponent === 0) return 1 ;
    return  base * Power(base , exponent - 1) ;
    }
    console.log(Power(2,5));



// // Question no-3 Write a program to make nth dimensional array into 1-D Array not use "Flat()" ??


let arr =  [[1, 2, 3, 4]] ;

function flatter(arr){
  let flatterArray = [] ;

for(let i=0; i<arr.length;i++){
    if(Array.isArray(arr[i])){
        flatterArray = [...flatterArray , ...flatter(arr[i])] ;
    }else{
        flatterArray.push(arr[i]) ;
    }
}
   return flatterArray ;
}

console.log(flatter(arr)) ;
console.log(flatter([1,2,['vasanth',4],[],5])) ;
console.log(flatter([1,2,['vasanth',[4,'Prakash','govind',[67],'pooja'],'shivansh'],5])) ;
console.log(flatter([1,2,3,[4,5,6,[7,8,9],[],10,null,"hello"]])) ;


//  ------>>> Sorting  Algorithms  


// Selection Sort 

function SelectionSort(arr){
  for(let i=0; i < arr.length; i++){
    let min = arr[i] ;
    for(let j=i+1 ; j < arr.length; j++){
        if(arr[j] < min){
            min = arr[j] ;
        }
    }
    let minIndex = arr.indexOf(min);
    console.log(minIndex) ;
//   }
let temp = arr[i] ;
arr[i] = arr[minIndex] ;
arr[minIndex] = temp ;
  }
  return arr ;
}
console.log(SelectionSort([9,8,7,6,5,4,3,2,1])) ;
console.log(SelectionSort([3,5,1,6,2,9,4])) ;


// // Bubble sort : 

function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
      for(let j=0 ; j < arr.length; j++){
          if(arr[j] > arr[j+1]){
              let temp = arr[j] ;
              arr[j] = arr[j+1] ;
              arr[j+1] = temp ;
          }
          console.log(arr) ;
        }

    }
    return arr ;
  }
  console.log(bubbleSort([9,8,7,6])) ;

    












