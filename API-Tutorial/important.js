// Question no. - 1: What is Debouncing in Javascript ??
// answer :- Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the 
//           performance of the web page. In other words, it limits the rate at which a function gets invoked.

// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page that 
// requires time-consuming computations. If such a method is invoked frequently, it might
//  greatly affect the performance of the browser, as JavaScript is a single-threaded language. 

// Basic Example
let counter = 0 ;

function getData(){
    console.log("fetching data =>>" + counter++)
}

function myDebounce(call, delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)

    timer = setTimeout(() => {
            call() ;
        }, delay)
    }
}
const betterFunction = myDebounce(getData, 1000)


// *****************************************************************************************************************************************************************************************************


// Question no. - 2: What is Throttling in Javascript ??
// answer :- Throttling or sometimes also called throttle function is a practice used in websites. Throttling is used to  call a
//            function after every millisecond or a particular interval of time only the first click is executed immediately.

const myThrottle = (fxn, d) => {
    return function(...args){
        document.getElementById("myid").disabled = true ;

        setTimeout(() =>{
            fxn() ;
        }, d) ;
    }
}

const newFunc = myThrottle(()=>{
    document.getElementById("myid").disabled = false ;
    console.log("user Clicked !!!")
}, 5000) ;


// *****************************************************************************************************************************************************************************************************

// Question no. - 3: What is Memonization in Javascript ??
// answer :-  Memoization is a technique for speeding up applications by caching the results of expensive function
//             calls and returning them when the same inputs are used again.

// Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving
// previous input to something called cache and returning the results from it.

let sum = 0;
const calc = (n)=>{
    for(let i=0; i<=n; i++){
        sum += i ;
    }
    return sum ;
}

const memoize = (fun) => {
    let cache = {} ;
    return function(...args){
        let n = args[0] ;

        if(n in cache){
            console.log("cache ->> for in loop") ;
            console.log(cache)
            return cache[n] ;
        }else{
    console.log("calculating First time")
        let result = fun(n) 
        cache[n] = result ;
        return result ;
        }
    }
}


console.time() ;
const efficient = memoize(calc) ;
console.log(efficient(5)) ;
console.timeEnd() ;

console.time() ;
console.log(efficient(5)) ;
console.timeEnd() ;


// console.time() ;
// console.log(calc(5)) ;
// console.timeEnd() ;