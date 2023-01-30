// Question no. - 1 =>>          What is synchronous Programming ??
// Answer =>   As the name suggests synchronous means to be in a sequence, i.e.  every statement of the code gets
//             executed one by one. So, basically a statement has to wait for the earlier statement to get executed.

// Question no. - 2 =>>          What is Asynchronous Programming ??
// Answer =>  Asynchronous programming is a programming model where operations take place in a non-sequential fashion. 
//        This model is antithetical to synchronous programming. In such a model, operations that take time are "non-blocking." 
//        Non-blocking operations do not require the runtime to wait for their completion, and the program continues to proceed ahead. 
//        Once the operation is complete, either successfully or unsuccessfully, it raises an event that signals that the outcome is ready 
//        for any subsequent steps to be performed on it.


// // !!!@@@@#### setTimeOut
// console.log("script start") ;
// setTimeout(()=>{
//     console.log("inside Set TimeOut")
// }, 1000) ;
// console.log("script end") ;


//Question no. - 3 =>>  what is event loop in javascript ??
// Answer => Event loop in JavaScript is a mechanism through which the 'calls waiting for execution' in the callback queue can 
//         be put on the call stack. For any event from the callback queue to come to call stack, the call stack will have to be empty.


// // !!!@@@@#### setInterval
// console.log("Hello World") ;
// setInterval(()=>{
//     console.log("inside Set Interval") ;
//     console.log(Math.random()) ;
// }, 1000) ;
// console.log("Bye world !!!") ;


// // Random background Changing color
// const body = document.body;
// const button = document.querySelector("button");

// const intervalId = setInterval(() => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const rgb = `rgb(${red},${green}, ${blue})`;
//   body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//   clearInterval(intervalId);
//   button.textContent = body.style.background;
// });

// console.log(intervalId);



// !!!@@@@#### Understanding CallBack function

// example no:- =>> 1
// function myFunc(callback){
//     console.log("Function is doing Task1") ;
//     callback() ;
// }

// // or we can simply pass this function as an argument 
// // function myFunc2(){
// //     console.log("Function is doing Task2") ;
// // }

// myFunc(function(){
//     console.log("Function is doing Task2 and using like callback function") ;
// }) ;
// // myFunc2() ;


// // example no:- =>> 2
// function getTwoNumbers(number1, number2, callback){
//     console.log(number1, number2) ;
//     callback(number1, number2) ;
// }

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2) ;
// }

// getTwoNumbers(4,5, addTwoNumbers) ;
// getTwoNumbers("4","5", addTwoNumbers) ;



// // example no:- =>> 3
// function getTwoNumbersAndMultiply(number1, number2, onSuccess, onFailure){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         onSuccess(number1, number2) ;
//     }else{
//         onFailure() ;
//     }
// }


// getTwoNumbersAndMultiply("4", 5, (num1, num2) =>{
//     console.log(num1*num2) ;
// } , ()=>{
//     console.log("Wrong Data Type") ;
//     console.log("please pass numbers only") ;
// })


// //Question no.- 3 =>>  what is CallBack Hell in javascript ??
// // Answer => The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of 
//             //   the resulting code structure resembles a pyramid and hence callback hell is also called the
//             //    “pyramid of the doom”. It makes the code very difficult to understand and maintain.


// // !!!@@@@#### Understanding CallBack Hell Examples

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// // Text       Delay   Color

// // one        1s      Violet
// // two        2s      purple
// // three      2s      red
// // four       1s      Pink
// // five       2s      green
// // six        3s      blue
// // seven      1s      brown


// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)
        
//       },1000)
      
//     },2000)
    
//   },2000)
  
// },1000)

//  **************************************************************************************************************************************************************************************************************************************************************


//Question no.- 4 =>>  what is Promise in javascript ??
// Answer =>  A Promise is an object that represents the eventual completion or failure of an  asynchronous operation,
//            and its resulting value.
// A promise has 3 types of states and based upon these states, the promise executes the results.

// Pending: This state represents either an initial state or fulfilled state or rejected state.
// Fulfilled: This state represents that the asynchronous operation is successfully completed.
// Rejected: This state represents that the asynchronous operation is rejected.


const bucket = ['coffee', 'chips', 'vegetables', 'rice', 'salt'] ;

const friedRice = new Promise((res, rej)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        res("Fried Rice") ;
    } else {
        rej("Couldn't make it")
    }
})

// how to consume Promise
friedRice.then((myfriedRice) => {
    console.log("let's eat together", myfriedRice) ;
}
// jab promise reject hoga
).catch((error)=>{console.log(error)})


// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
      if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
          resolve({value:"friedrice"});
      }else{
          reject("could not do it");
      }
    })
  }
  
  
  ricePromise().then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


//     // promise && setTimeout 

// // I want to resolve / reject promise after 2 seconds 


function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})


//Question no.- 4 =>>  what is Promise Chaining in javascript ??
// Answer =>Promise chaining occurs when the callback function returns a promise. It allows you to chain on another then call
//  which will run when the second promise is fulfilled. Catch can still be called to handle any errors that might occur along the way.

function myPromiseChain(){
    return new Promise((res, rej)=>{
        res("my name is")
    })
}

myPromiseChain()
  .then((value)=>{
    console.log(value) ;
    value += "Prakash kumar" ;
    return value ;
  })
  .then((value)=>{
    console.log(value) ;
    value += "I am a Frontend developer" ;
    return value ;
  })
  .then((value)=>{
    console.log(value) ;
  })


// Example no:- 2
function promiseChaining(){
    return new Promise((resolve, reject)=>{
      resolve("foo");
    })
  }
  
  promiseChaining()
    .then((value)=>{
      console.log(value);
      value += "bar";
      return value
    })
    .then((value) =>{
      console.log(value);
      value += "baaz";
      return value;
    })
    .then(value=>{
      console.log(value);
    })

