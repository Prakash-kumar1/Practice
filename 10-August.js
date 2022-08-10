// // Using CallBack for this example

// // entering into the Hotel ,
// // order items ,
// // preparation of food in kitchen,
// // server  delivering food to the table,
// // start eating food ,
// // paying the bill ,
// // leaving the hotel . 


// function preparationofFood(callbackOfeatingFood){
//     setTimeout(() => {
//         console.log("Prepareing the PavBhaji... ")
//         console.log("server  delivering food to the table ")
//         callbackOfeatingFood(payingBillandTips) ;
//     }, 3000);
// }

// function payingBillandTips() {
//         console.log("paying the bill")
//         console.log("leaving the hotel ")
// }

// function eatingFood(callbackOfPayment) {
//     setTimeout(() => {
//         console.log("eating the PavBhaji... ")
//         callbackOfPayment() ;
//     }, 2000);
// }

// function dinnerScenario() {
//     console.log("entering into the Hotel")
//     console.log("Calling  the server and order PavBhaji")
//     console.log("server informing the chef to prepare food")
// preparationofFood(eatingFood) ;    
// }
// dinnerScenario() ;


// // Using Promises for Above example


// function preparationofFood(){
//     return new Promise((resolve , reject) => {
//         let vegetablesPresent =  true ;
//         if(vegetablesPresent){
//             setTimeout(() => {
//                 console.log("Prepareing the PavBhaji... ")
//                 console.log("server  delivering food to the table ")
//                 resolve() ;
//             }, 3000);
//         }else{
//             reject("No vegetable is Present") ;
//         }
//      })
//     }
   
//     function eatingFood() {
//         return new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("eating the PavBhaji... ")
//         resolve() ;
//     }, 2000);
// });
// }

// function payment() {
//     return new Promise((resolve , reject) => {
//         let pursePresent = true ;
//         if(pursePresent){
//             console.log("paying the bill") ;
//             console.log("leaving the hotel ") ;
//             resolve() ;
//         }else{
//             reject("go and washing the Plates ")
//         }
        
//     }) ;
// }

// function dinnerScenario() {
//     console.log("entering into the Hotel")
//     console.log("Calling  the server and order PavBhaji")
//     console.log("server informing the chef to prepare food")
// preparationofFood()
//           .then(() =>{
//            console.log("food prepared succesfully & delievered") ;
//             eatingFood().then(() => {
//                 console.log(" succesfully ate the food");
//                 payment()
//                 .then(()=> console.log("process over go to bed and sleep"))
//                 .catch((error) => console.log("error " , error)) ;    
//             } )
//             .catch((error) => console.log(error.message)) ; 
// })
//           .catch((error) => console.log("error block-->>" , error)) ;        
// }

// dinnerScenario() 



// function dinnerScenario() {
//     console.log("entering into the Hotel")
//     console.log("Calling  the server and order PavBhaji")
//     console.log("server informing the chef to prepare food")
// preparationofFood()
// .then((success) =>{
//     console.log("food prepared succesfully & delievered" , success) ;
//     return eatingFood()
// })

// .then((atemsg) =>{
//     console.log("succesfully ate food" , atemsg) ;
//     return payment() ;
// })
// .then((payMsg)=> console.log("process over go to bed and sleep" , payMsg))
// .catch((error) => console.log("error block-->>" , error)) ;     

// }

// dinnerScenario() 


  async function dinnerScenario() {
    console.log("entering into the Hotel")
    console.log("Calling  the server and order PavBhaji")
    console.log("server informing the chef to prepare food");
    try{
        let foodMsg = await preparationofFood()
        console.log(foodMsg)
        
        let ateMsg = await eatingFood()
        console.log(ateMsg)
        
        let paymentMsg = await payment()
        console.log(paymentMsg)
    } catch (err){
        console.log("error block-->>" , err)
    }

}


// parellel  OR  concurrent  execution

// function fn1() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("process 1")
//             resolve("1") ;
//         }, 5000);
//     })
// }

// function fn2() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("process 2")
//             resolve("2") ;
//         }, 5000);
//     }) ;
// }

// // fn1()
// //    .then(() => fn2())
// //    .then(() => console.log("Process over")) ;

// Promise.all([fn1() , fn2()]).then((result) =>
// console.log("process over" , result)
// ) ;


// function fn1() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("process 1")
//             reject("1") ;
//         }, 5000);
//     })
// }

// function fn2() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("process 2")
//             resolve("2") ;
//         }, 5000);
//     }) ;
// }

// Promise.all([fn1() , fn2()])
// .then((result) => console.log("process over" , result))

// .catch((err) => console.log("error block-->>" , err))  

// .finally(() => console.log("closing connection")) ;

// Promise.race([fn1() , fn2()])
// .then((result) => console.log("process over" , result))

// .catch((err) => console.log("error block-->>" , err))  

// .finally(() => console.log("closing connection")) ;