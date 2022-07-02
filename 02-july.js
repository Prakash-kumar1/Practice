// Recursion -->>

function add(n){
    let sum = n+10
   console.log(sum , n);
   add(sum)
}
add(10)

// Any Recursion problem solved by Loops.

function countdown(n){
    for(let i=1; i>0; i++){
        console.log(i)
    }
}