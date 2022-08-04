const grandParent = document.querySelector(".grandParent") ;
const Parent = document.querySelector(".parent") ;
const Child = document.querySelector(".child") ;

// console.log(grandParent) ;
// console.log(parent) ;
// console.log(Child) ;

// // In Javascript , everything is an event like hovering , clicking etc


// // Event Bubbling: whwnever we click on child it will print 'child, parent & grandParent' and when we click on Parent it will print 'parent & grandParent'  and again and when we click on grandParent it will print ' grandParent' .clicking check last one is Event or not

// grandParent.addEventListener("click" , () => {
//     console.log("grandParent");                                      
// }) ;

// Parent.addEventListener("click" , () => {
//     console.log("Parent") ;
// });

// Child.addEventListener("click" , () => {
//     console.log("Child");                                       
// }) ;



// document.querySelector("body").addEventListener("click" , () => {
//     console.log("body") ;
// }) ;

// document.querySelector("html").addEventListener("click" , () => {
//     console.log("html") ;
// }) ;

// document.addEventListener("click" , () => {
//     console.log("document");                                       
// }) ;

// // output:-  child
// //           parent
// //           grandParent
// //           body
// //           html
// //          document
// // because when we click on body it will check that html is an event or not , if it is an Event then print ,if it is not an Event then don't print . similarly , for document , it will check


// event capturing : it is also called Trippling

grandParent.addEventListener("click" , () => {
    console.log("grandParent Bubbling");                                      
}) ;

Parent.addEventListener("click" , () => {
    console.log("Parent Bubbling") ;
});

Child.addEventListener("click" , () => {
    console.log("Child Bubbling");                                       
}) ;

grandParent.addEventListener("click" , () => {
    console.log("grandParent Capturing");                                      
},{capture : true}) ;

Parent.addEventListener("click" , () => {
    console.log("Parent Capturing") ;
},{capture : true});

Child.addEventListener("click" , () => {
    console.log("Child Capturing");                                       
},{capture : true}) ;

// Output :- grandParent Capturing
//           Parent Capturing
//           Child Capturing
//           Child Bubbling
//           Parent Bubbling
//           grandParent Bubbling













