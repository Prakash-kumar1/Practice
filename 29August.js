// // Normal Function
// function addNormal(n1 , n2){
//     return n1+n2 ;
// }

// //Currying Function
// function addCurry(n1){
//     return function(n2){
//         return n1+n2 ;
//     } ;
// }

// console.log(addNormal(10,5)) ;

// console.log(addCurry(10)(5)) ;    //15
// // OR
// let sum = addCurry(20) ;
// console.log(sum(30)) ;      //50


// // Comparing Normal Function  and Currying Function using Examples

// function validate(userName , password){
//     originalUserName = "Prakash" ;    //username from DB => 1sec
//     originalPassword = "123" ;    //Password from DB => 1sec

//     if(userName === originalUserName && password === originalPassword)
//         return true ;
//         return false ;
// }
// console.log(validate("Prakash" , "123"))      //true
// // but when we give false value , returns false
// console.log(validate("anjali" , "123"))      //false

// // in this case Ist it will check userName through DB in 1 sec , then it
// // it find userName is wrong but it won't stop . it go and checks Password from DB in 1 sec
// // this process taking 2 second .

// // Currying Function for above example

// function validateUserName(username){
//    originalUserName = "Govind Verma" ;    //username from DB => 1sec
//    if(username === originalUserName){
//     return function validatePassword(password){
//         originalPassword = "123" ;  //Password from DB => 1sec
//        if(password === originalPassword){
//         return true ;
//        } 
//        return false ;
//     } ;
//    } 
//    return false ;
// }

// console.log(validateUserName("Govind Verma") ("123"))      //true

// // if there is error , it will stop . don't go further
// // console.log(validateUserName("Gayatri") ("123"))      //Error

// // ###$$$$%%%%*****  READ ON IT YOUR OWN  ###$$$$%%%%*****

// // 7 layers of OSI Model (Networking concepts) by Kunal Kushwaha
// // Fetch  AND  Blob
// // Https  vs  Http
// // methods in https
// // status code

// // Methods ==>> Get , Post , Put , Patch , Delete

// // GET ===>>>  get some data from the Server.
// // POST ===>>>  storing some data in the Server. (adding new data)
// // PUT ===>>     Replace  the  Entire Data .
// // PATCH ==>>    Replace  the  Particular Data .
// // DELETE ===>>  Deleting the  Data .


// Local Storage and  session storage
// //  session storage=> data is persisted only for the perticular session , as soon as i claose the window, alll data will gone-->
// //  local storage is same as session storage but the advantage is it doesnt clr itself, even if we close the tab or shut down laptop and again restart it the dtata is still persisted over there inn browser -->
// // local storage have higher memory capacity than session storage 


