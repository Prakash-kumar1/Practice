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

// // formula : Sum of first 'n'  Numbers --->   (n(n+1)/2) 

let sum = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
]

