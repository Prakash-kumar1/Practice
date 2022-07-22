////  Question no-1 find Power of a number using Function ?


function getPower(base , exponential){
    let total = 1 ;
for(let i=0; i<exponential; i++){
    total *= base ;
}
return total ;
}
console.log(getPower(2,4))


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
console.log(getPower(2,-1)) 


// Question no-2  find Power of a number using Recursion ?

function Power(base , exponent){
        if(exponent === 0) return 1 ;
    return  base * Power(base , exponent - 1) ;
    }
    console.log(Power(2,5));



// Question no-3 Write a program to make nth dimensional array into 1-D Array not use "Flat()" ??












