
// ==============>>>>  async and await  <<<<==============>>>> 
// https://www.javascripttutorial.net/es-next/javascript-async-await/

// ==============>>>>   Error Handling in async and await  <<<<==============>>>> 
// https://www.javascripttutorial.net/javascript-try-catch/


// Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution 
//        thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that
//  a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.


// Await: Await function is used to wait for the promise. It could be used within the async block only.
//        It makes the code wait until the promise returns a result. It only makes the async block wait.


// Basic Example1 of Async/await
const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);


// Basic Example-2  of Async/await
async function test(){
    console.log("A")
await  console.log("B")
    console.log("c")
}
test() ;
console.log("D")
console.log("E")


// Basic Example-3  of Async/await
async function test(){
    console.log("2 : Prakash Kumar")
await  console.log("4 : Gayatri jayantilal")
    console.log("5 : Goku, Vegeta, Gohan all are super saiyans.")
}
console.log("1 : Shivansh rawat")
test() ;
console.log("3 : Anjali yadav")


// *************************************************************************************************************************************************************************************************************************************


// / Difference Between Promise and Async/Await:

// Sr.no                        Promise                                         Async/Await
                        
// 1.	Promise is an object representing intermediate state of operation 	 Async/Await is a syntactic sugar for promises, a wrapper making 
// which is guaranteed to complete its execution at some point in future.   the code execute more synchronously.
// 2.	Promise has 3 states – resolved, rejected and pending.	             It does not have any states. It returns a promise either resolved or rejected.
// 3.	If the function “fxn1” is to executed after the promise, then    	 If the function “fxn1” is to executed after await, then await X() 
// promise.then(fxn1) continues execution of the current function after      suspends execution of the current function and then fxn1 is executed. 
// adding the fxn1 call to the callback chain.

// 4.	Error handling is done using .then() and .catch() methods.	          Error handling is done using .try() and .catch() methods.
// 5.	Promise chains can become difficult to understand sometimes.	      Using Async/Await makes it easier to read and understand the 
//                                                                           flow of the program as compared to promise chains.  

// / Basic Example-4  of Async/await
async function printName() {
    let names = ['prakash' , 'kumar']
    for(let name of names){
        await setTimeout(() => {
            console.log(name) ;
        } , 1000);
    }
}
printName()





