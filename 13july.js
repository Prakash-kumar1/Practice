// // 2D - Array : Revise on your own . 

// let nums = [2, 3, 5, 6, 7, 8]
// let target = 9

// let leftindex = 0
// let rightindex = nums.length - 1

// while(leftindex < rightindex){
//     if(nums[leftindex] + nums[rightindex] == target){
//         console.log(nums[leftindex] , nums[rightindex]);
//         leftindex += 1 ;
//         rightindex -= 1 ;
//     }else if(nums[leftindex] + nums[rightindex]  >  target){
//         rightindex -= 1 ;
//     }else if(nums[leftindex] + nums[rightindex]  <  target){
//         leftindex += 1 ;
//     }
// }


// // matrix : 
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// console.log(matrix[2][2])
// console.log(matrix[3][2])
// console.log(matrix[1][2])
// console.log(matrix[3][4])

// // Question Number-1 : how many Rows are there ?
// let Rows = matrix.length
// console.log(Rows)

// // Question Number-2 : how many Columns are there ?
// let cols = matrix[0].length
// console.log(cols)


// // Question Number-3 : find the sum of all Element in matrix ?
// let sum = 0;
// for(let i=0; i<Rows; i++){
//    for(let j=0; j<cols; j++){
//     sum += matrix[i][j]
//    }
// }
// console.log(sum)


// // Question Number-3 : find the sum of all Element in matrix with another method ?

// // formula : Sum of first 1  to  'n'  Numbers --->   (n(n+1)/2) 

// let sum = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//     [17, 18, 19, 20],
//     [21,22,23,24,25]
// ]
// // this is wrong ask sir
// let n= 20 ;
// let Element = n(n+1)/2 ;
// console.log(Element)


// // Question Number-4 : find the sum of Diagonal Element in matrix ?
// let matrix = [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16]
//     ]
// let Rows = matrix.length
// let cols = matrix[0].length

//      let sum = 0;
//     for(let i=0; i<Rows; i++){
//        for(let j=0; j<cols; j++){
//        if(i == j){
//     sum += matrix[i][j]
//        }
//        }
//     }
//     console.log(sum)

// // OR WE can use short method
// let matrix = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [13, 14, 15, 16]
// ]
// let Rows = matrix.length
// let cols = matrix[0].length
// // There is no need of J loop.
// let sum = 0;
// for(let i=0; i<Rows; i++){
// sum += matrix[i][i]
//    }
// console.log(sum)



// Question Number-4 : find the sum of Reverse Diagonal Element in matrix ?

let matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [18, 14, 15, 16]
    ]
let Rows = matrix.length
let cols = matrix[0].length

     let sum = 0;
    for(let i=0; i<Rows; i++){
       for(let j=0; j<cols; j++){
       if(i+j == 3){
    sum += matrix[i][j]
       }
       }
    }
    console.log(sum)

// // OR WE can use short method
// let matrix = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [13, 14, 15, 16]
// ]
// let Rows = matrix.length
// let cols = matrix[0].length
// // There is no need of J loop.
// let sum = 0;
// for(let i=0; i<Rows; i++){
// sum += matrix[i][i]
//    }
// console.log(sum)