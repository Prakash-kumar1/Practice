// Question no. - 1: What is Debouncing in Javascript ??
// answer:-  Debouncing in JS is a practice used to improve browser performance. There might be some functionality in a web  
// page that requires time-consuming computations. If such a method is invoked frequently, it might  greatly affect the
//  performance of the browser. Debouncing limits the rate at which a function gets invoked.

// Basic Example:  This is Debounce polyfill
let counter = 0 ;

function getData(){
    console.log("fetching data =>>" + counter++)
}

const myDebounce = (call, delay)=>{
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
//answer :-  Throttling is a Technique to limit the execution of a event handler function even when this event triggers 
//           continously due to user action like scrolling, resizing Window.
//                                    Throttling is used to  call a  function after every millisecond or a particular 
//                                    interval of time only the first click is executed immediately.

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


// *****************************************************************************************************************************************************************************************************

// Ques-1: Create a button UI and add debounce as follows :
// ----->>>  show "Button pressed <x> Times"  every time button is pressed.
// ----->>>  Increase "Triggered <y> Times"  count after 800ms of debounce.

const btn = document.querySelector(".increment_btn") ; 
const btnPress = document.querySelector(".increment_pressed") ; 
const count = document.querySelector(".increment_count") ; 

var pressedCount = 0 ;
var triggerCount = 0 ;

// myDebounce is a polyfill of Debouncing & taking from above
const debouncedCount = myDebounce(()=>{
    triggerCount += 1 ;
    count.innerHTML = triggerCount
}, 800) ;

btn.addEventListener("click", ()=>{
   btnPress.innerHTML = ++pressedCount ;
   debouncedCount() ;
})




















