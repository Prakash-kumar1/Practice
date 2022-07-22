// Sorting Algorithms

////  Question no-2 find Power of a number using Recursion ?


// function getPower(base , exponential){
//     let total = 1 ;
// for(let i=0; i<exponential; i++){
//     total *= base ;
// }
// return total ;
// }
// console.log(getPower(2,4))

// Using Base Condition (line-19) & Error condition (line-18)

function getPower(base , exponential){
    if(exponential < 0) return -1 ;
    if(exponential == 0) return 1 ;
    let total = 1 ;
for(let i=0; i<exponential; i++){
    total *= base ;
}
return total ;
}
console.log(getPower(2,3));
console.log(getPower(2,-1))