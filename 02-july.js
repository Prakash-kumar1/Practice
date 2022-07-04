// Recursion -->>

function add(n){
    let sum = n+10 ;
   console.log(sum , n);
   add(sum)
}
add(10)

// Any Recursion problem solved by Loops.

// xxxxxxxxxxxxxxxxx ------->> Example 1 started   <<--------xxxxxxxxxxxxxxxxx ------->>

// Using For Loop  

function countdown(n){                                                                               
    for(let i=n; i>0; i--){                                       
        console.log(i) ;
    }
    console.log('ended') ;
}
countdown(10) ;


//Using Recursion

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

// xxxxxxxxxxxxxxxx ------->> Example 1 Completed   <<--------xxxxxxxxxxxxxxxxx ------->>



// xxxxxxxxxxxxxxxx ------->> Example - 2 started   <<--------xxxxxxxxxxxxxxxxx ------->>

// Using For Loop 

function sumofRange(n) {
    let total = 0;
    for(let i=n; i>0; i--){
        total += i ;
    }
    return total ;
}
console.log(sumofRange(10))


// Using Recursion

function sumofRange(n , total) {
    if(n <= 0){
        return total
    }
    total += n
    return sumofRange(n-1 , total)
}
console.log(sumofRange(10 , 0))


// xxxxxxxxxxxxxxxx ------->> Example - 2 Completed   <<--------xxxxxxxxxxxxxxxxx ------->>
  