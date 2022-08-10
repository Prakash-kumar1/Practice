// // Using CallBack for this example

// entering into the Hotel ,
// order items ,
// preparation of food in kitchen,
// server  delivering food to the table,
// start eating food ,
// paying the bill ,
// leaving the hotel . 


function preparationofFood(callbackOfeatingFood){
    setTimeout(() => {
        console.log("Prepareing the PavBhaji... ")
        console.log("server  delivering food to the table ")
        callbackOfeatingFood() ;
    }, 3000);
}

function eatingFood() {
    setTimeout(() => {
        console.log("eating the PavBhaji... ")
        console.log("paying the bill")
        console.log("leaving the hotel ")
    }, 2000);
}

function dinnerScenario() {
    console.log("entering into the Hotel")
    console.log("Calling  the server and order PavBhaji")
    console.log("server informing the chef to prepare food")
preparationofFood(eatingFood) ;    
}
dinnerScenario() ;