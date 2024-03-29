// // 2D - Array : Revise on your own . 

let nums = [2, 3, 5, 6, 7, 8]
let target = 8

let leftindex = 0
let rightindex = nums.length - 1

while(leftindex < rightindex){
    if(nums[leftindex] + nums[rightindex] == target){
        console.log(nums[leftindex] , nums[rightindex]);
        leftindex += 1 ;
        rightindex -= 1 ;
    }else if(nums[leftindex] + nums[rightindex]  >  target){
        rightindex -= 1 ;
    }else if(nums[leftindex] + nums[rightindex]  <  target){
        leftindex += 1 ;
    }
}


// matrix : 
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(matrix[2][2])
console.log(matrix[3][2])
console.log(matrix[1][2])
console.log(matrix[3][4])

// Question Number-1 : how many Rows are there ?
let Rows = matrix.length
console.log(Rows)

// Question Number-2 : how many Columns are there ?
let cols = matrix[0].length
console.log(cols)


// Question Number-3 : find the sum of all Element in matrix ?
let sum = 0;
for(let i=0; i<Rows; i++){
   for(let j=0; j<cols; j++){
    sum += matrix[i][j]
   }
}
console.log(sum)


// Question Number-3 : find the sum of all Element in matrix ??

// formula : Sum of first 1  to  'n'  Numbers --->   (n(n+1)/2) 

const add = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24]
]

let sum1 = 0;
for(let i=0; i<6; i++){
   for(let j=0; j<4; j++){
    sum1 += add[i][j]
   }
}
console.log(sum1)



// Question Number-4 : find the sum of Diagonal Element in matrix ?
let matrix1 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
let Rows1 = matrix1.length
let cols1 = matrix1[0].length

     let sum3 = 0;
    for(let i=0; i<Rows1; i++){
       for(let j=0; j<cols1; j++){
       if(i == j){
    sum3 += matrix1[i][j]
       }
       }
    }
    console.log(sum3)

// OR WE can use short method
let matrix2 = [
   [1, 2, 3, 4],
   [5, 6, 7, 8],
   [9, 10, 11, 12],
   [13, 14, 15, 16]
]
let Rows2 = matrix2.length
let cols2 = matrix2[0].length
// There is no need of J loop.
let sum4 = 0;
for(let i=0; i<Rows2; i++){
sum4 += matrix2[i][i]
   }
console.log(sum4)


// Question Number-4 : find the sum of Reverse Diagonal Element in matrix ?
let matrix4 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [18, 14, 15, 16]
    ]
let Rows4 = matrix4.length
let cols4 = matrix4[0].length

     let sum5 = 0;
    for(let i=0; i<Rows4; i++){
       for(let j=0; j<cols4; j++){
       if(i+j == 3){
    sum5 += matrix4[i][j]
       }
       }
    }
    console.log(sum5)


// Question Number-5 : find the sum of first column in matrix ?

let matrix5 = [
   [1, 2, 3, 4],
   [5, 6, 7, 8],
   [9, 10, 11, 12],
   [13, 14, 15, 16]
]
let Rows5 = matrix5.length
// change the value of start like 0,1,2,3 and you will get the sum of each Column.
let start = 3
// There is no need of J loop.
let sum6 = 0;
for(let i=0; i<Rows5; i++){
sum6 += matrix5[i][start]
   }
console.log(sum6)


// // Question Number-5 : find the sum of first Row in matrix ?

// let matrix = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [13, 14, 15, 16]
// ]
// let cols = matrix[0].length
// // change the value of start like 0,1,2,3 and you will get the sum of each Row.
// let start = 0
// // There is no need of J loop.
// let sum = 0;
// for(let i=0; i<cols; i++){
// sum += matrix[start][i]
//    }
// console.log(sum)


// // Question Number-5 : find the sum of Diagonals using Start in matrix ?

// let matrix = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [16, 14, 15, 16]
// ]
// let Rows = matrix.length
// // change the value of start like 0,1,2,3 and you will get the sum of each Column.
// let start = 0
// // There is no need of J loop.
// let sum = 0;
// for(let i=0; i<Rows; i++){
// sum += matrix[i][start]
//    start += 1 ; 
//    }
// console.log(sum)

// // Question Number-6 : find the sum of Reverse Diagonals using Start in matrix ?

// let matrix = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [16, 14, 15, 16]
// ]
// let Rows = matrix.length
// // change the value of start like 0,1,2,3 and you will get the sum of each Column.
// let start = matrix[0].length - 1
// // There is no need of J loop.
// let sum = 0;
// for(let i=0; i<Rows; i++){
// sum += matrix[i][start]
//    start -= 1 ; 
//    }
// console.log(sum)

// // Question Number -7: Print the even Number of Rows ?

// let matrix = [[1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [16, 14, 15, 16]
//    ]

//    let Rows = matrix.length
//    let cols = matrix[0].length
// for(let i=0; i<Rows; i++){
//    if(i%2 == 0){
//    for(let j=0; j<cols; j++){
//       console.log(matrix[i][j])
//    }
//    }
// }


// // Question Number -8: Print the  Number of cols ?

// let matrix = [[1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [16, 14, 15, 16]
//    ]

//    let Rows = matrix.length
//    let cols = matrix[0].length
// for(let i=0; i<Rows; i++){
//    if(i%2 == 0){
//    for(let j=0; j<cols; j++){
//       console.log(matrix[i][j])
//    }
//    }else{
//       for(let j=cols-1; j>=0; j--){
//          console.log(matrix[i][j])
//       }  
//    }
// }

