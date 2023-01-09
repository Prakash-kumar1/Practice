// @@@###444--->>> Interview Questions given by Prakash Sir <<<---444####@@@ 

// Question no-1 => what is asynchronous non blocking ?
// Answer => Non-Blocking methods are executed asynchronously. Asynchronously means that the program may not necessarily execute line by 
// line. The program calls the function and move to the next operation and does not wait for it to return.


// Question no-2 => What are the differences between nonblocking and asynchronous IO system calls?? 
// Answer => a non blocking read() returns immediately with whatever data available; 
// an asynchronous read() requests a transfer that will be performed in its entirety, but that will complete at some future time.


// Question no-3 =>Is node JS asynchronous non-blocking?
// Answer=> All of the methods in the Node. js standard library provide asynchronous versions, which are non-blocking, and 
//          accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync .


// Question no-4=>how does javascript handle asynchronous behaviour??
// Answer=> With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other 
// tasks in parallell. But, asynchronus programmes are difficult to write and difficult to debug. Because of this, 
// most modern asynchronous JavaScript methods don't use callbacks.
//        JavaScript provides three methods of handling asynchronous code: callbacks, which allow you to provide functions to call 
//        once the asynchronous method has finished running; promises, which allow you to chain methods together; and async/await 
//        keywords, which are just some syntactic sugar over promises.


// Question no-5=> What is callback Function ??
// Answer => A callback function is a function passed into another function as an argument, which is then invoked inside 
//           the outer function to complete some kind of routine or action.

// Here is a quick example:

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();


//   Question no-6=> What is Promise ??
//   Answer => A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation,
//             and its resulting value. A Promise is in one of these states:

//   pending: initial state, neither fulfilled nor rejected.
//   fulfilled: meaning that the operation was completed successfully.
//   rejected: meaning that the operation failed.


//   Question no-7=> basic difference between async await and promise ??
//   Answer => Promise creation starts the execution of asynchronous functionality. await only blocks the code execution within 
//             the async function. It only makes sure that the next line is executed when the promise resolves. So, if an 
//             asynchronous activity has already started, await will not have any effect on it.


//   Question no-8=> how to handle error in async await ??
//   Answer =>  For handling error in async await, we can use try and catch.

//   async function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }

// async function run() {
//     try {
//         await thisThrows();
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log('We do cleanup here');
//     }
// }

// run();

// // Output:
// // Error: Thrown from thisThrows()
// //   ...stacktrace
// // We do cleanup here


// Question no-9=> What is a React Router ??
// Answer =>  React Router is a standard library for routing in React. It enables the navigation among views of various  
//            components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.


// Question no- 10 => What is Virtual DOM ??
// Answer => React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. 
// When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.


// Question no- 11=> What is useRef in React JS?
// Answer => The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
//           Syntax: const refContainer = useRef(initialValue); 
//           The useRef returns a mutable ref object. This object has a property called .


// Question no- 12=> What is class based component  ?
// Answer => class based components are made up of multiple functions that add functionality to the application. 
//           All class based components are child classes for the Component class of ReactJS.


// Question no- 13=> difference between map and foreach ??
// Answer=> The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through 
//          the elements of an array. The map() method can be used with other array methods, such as the filter() method, 
//          whereas the forEach() method cannot be used with other array methods.


// Question no-14=> What is Event loop ??
// Answer =>  An event loop is something that pulls stuff out of the queue and places it onto the function execution stack 
//            whenever the function stack becomes empty.


// Question no-15=> What is  this keyword ??
// Answer => In regular function,  this keyword  represents global object that called the function which could be window, the document, 
//           a button or whatever. with arrow functions  this keyword  always represents the object that define arrow functions. 


// Question no-16=> What is PolyFill ??
// Answer => A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers
//            that do not natively support it.

// Question no-17=> Write Polyfill for map ??
// Answer => // // Making Polyfill  for map :-

// Array.prototype.myMap = function(callbackfn){
//     // console.log("this ==>>" , this);
//     let myArr = this ;

// let newArr = [];
//    for(let i=0; i<myArr.length; i++){
//     let data = callbackfn(myArr[i] , i , myArr) ;
//     newArr.push(data) ;
//    }
//    return newArr ;
// } ;       

// // #### Polyfills for map done , Now we done Differnt Operations ####

// Question no-18=> What is Currying ??
// Answer => Currying is a process in functional programming  in which we can transform a function with multiple arguments 
//            into a sequence of nesting function . It returns a new function that excepts the next argument inline .

//  Example:-1
// function sum(a){
//     return (b) =>{
//      return (c) =>{
//         return (d) =>{
//            return a+b+c+d ;
//         }
//      }  
//     }
// }
// console.log(sum(10)(20)(30)(40)) ;


// Question no-19=> What is debouncing and throttling ??
// Answer =>         Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function  
//                   frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, 
//                   and API calls and improve performance.
// Throttling implies limiting the number of times a function gets called in a certain time period. It will prohibit a 
// function from executing if we have invoked it “recently.” Throttling also guarantees that a function runs at a consistent rate.


// Question no-20=> flatten array using recursion ??
// Answer => 
function flattenArray(inpuArray){
    let outputArray = [] ;
    recursion(0, inpuArray, outputArray) ;
    return outputArray ;
}

function recursion(index, inpuArray, outputArray){
    if(index >= inpuArray.length) return;

    if(Array.isArray(inpuArray[index])){
        recursion(0, inpuArray[index], outputArray)
    } else{
        outputArray.push(inpuArray[index])
    }
    recursion(index + 1, inpuArray, outputArray )
}
let flatArray = flattenArray([1,2,[3,[4,[5]],6],7,[8,9],10])
console.log(flatArray) ;



