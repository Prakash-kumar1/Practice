// Recursion -->>

// function add(n){
//     let sum = n+10 ;
//    console.log(sum , n);
//    add(sum)
// }
// add(10)

// Any Recursion problem solved by Loops.

// Using For Loop  

// function countdown(n){                                                                               
//     for(let i=n; i>0; i--){                                       
//         console.log(i) ;
//     }
//     console.log('ended')
// }
// countdown(10)


// Using Recursion

function countdown(n){
//base condition
if(n <= 0){
    console.log('ended');
    return ;
}
console.log(n) ;
countdown(n-1)
}
countdown(10)
countdown(5)