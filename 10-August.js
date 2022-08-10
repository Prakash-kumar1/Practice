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


function preparationofFood(){
    return new Promise((resolve , reject) => {
        let vegetablesPresent =  true ;
        if(vegetablesPresent){
            setTimeout(() => {
                console.log("Prepareing the PavBhaji... ")
                console.log("server  delivering food to the table ")
                resolve() ;
            }, 3000);
        }else{
            reject("No vegetable is Present") ;
        }
     })
    }
   
    function eatingFood() {
        return new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log("eating the PavBhaji... ")
        resolve() ;
    }, 2000);
});
}

function payment() {
    return new Promise((resolve , reject) => {
        let pursePresent = true ;
        if(pursePresent){
            console.log("paying the bill") ;
            console.log("leaving the hotel ") ;
            resolve() ;
        }else{
            reject("go and washing the Plates ")
        }
        
    }) ;
}

function dinnerScenario() {
    console.log("entering into the Hotel")
    console.log("Calling  the server and order PavBhaji")
    console.log("server informing the chef to prepare food")
preparationofFood()
          .then(() => console.log("food prepared succesfully & delievered"))
          .catch((error) => console.log("error block-->>" , error)) ;

        //   eatingFood()
        //   .then(() => console.log(" succesfully ate the food"))
         
}

dinnerScenario() 