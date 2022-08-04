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


// // event capturing : it is also called Trippling

// grandParent.addEventListener("click" , () => {
//     console.log("grandParent Bubbling");                                      
// }) ;

// Parent.addEventListener("click" , () => {
//     console.log("Parent Bubbling") ;
// });

// Child.addEventListener("click" , () => {
//     console.log("Child Bubbling");                                       
// }) ;

// grandParent.addEventListener("click" , () => {
//     console.log("grandParent Capturing");                                      
// },{capture : true}) ;

// Parent.addEventListener("click" , () => {
//     console.log("Parent Capturing") ;
// },{capture : true});

// Child.addEventListener("click" , () => {
//     console.log("Child Capturing");                                       
// },{capture : true}) ;

// // Output :- grandParent Capturing
// //           Parent Capturing
// //           Child Capturing
// //           Child Bubbling
// //           Parent Bubbling
// //           grandParent Bubbling


// // Stop Propogation:- if we want to stop on Bubbling  and  Capturing , pass event as a parameter , use event.stopPropagation() ; on that  function.
// // here we apply on parent , so it will not go to grandParent.

// grandParent.addEventListener("click" , () => {
//     console.log("grandParent Bubbling");                                      
// }) ;

// Parent.addEventListener("click" , (event) => {
//     event.stopPropagation() ;
//     console.log("Parent Bubbling") ;
// });

// Child.addEventListener("click" , () => {
//     console.log("Child Bubbling");                                       
// }) ;

// grandParent.addEventListener("click" , () => {
//     console.log("grandParent Capturing");                                      
// },{capture : true}) ;

// Parent.addEventListener("click" , () => {
//     console.log("Parent Capturing") ;
// },{capture : true});

// Child.addEventListener("click" , () => {
//     console.log("Child Capturing");                                       
// },{capture : true}) ;


// an Important Property on Bubbling :- 'if we want to print only one time on click not IInd time'

function printGrandParent(){
    console.log("grandParent Bubbling");    
}

grandParent.addEventListener("click" ,printGrandParent);   
// passing reference , removeEventListener automatically calls the function


setTimeout(() => {
    console.log("removing Grandparent")
    grandParent.removeEventListener("click" ,printGrandParent); 
}, 2000);

Parent.addEventListener("click" , () => {
    console.log("Parent Bubbling") ;
});

Child.addEventListener("click" , () => {
    console.log("Child Bubbling");                                       
}) ;


// output :- Child Bubbling
//               Parent Bubbling
//                grandParent Bubbling
//                removing Grandparent
//                Child Bubbling
//                Parent Bubbling
//                Child Bubbling
//                Parent Bubbling
//                Child Bubbling
//                Parent Bubbling



// Adding  new  elements :  use "Append"

const newDiv = document.createElement("div")
newDiv.style.width = "10rem" ;
newDiv.style.height = "10rem" ;
newDiv.style.backgroundColor = "blue"  ;
const para = document.createElement("p");
para.innerText = "Prakash Kumar" ;
newDiv.append(para) ;
document.body.append(newDiv) ;


// Adding in Grand parent
const par = document.createElement("p");
par.innerText = "vasanth Kumar" ;
grandParent.append(par) ;

// Taking Input 
function change(event){
    console.log(event.target.value) ;
}

// Read about some event and apply them on their own

// using For loop to make some new Divs

let colors = ["red" , "pink" , "yellow" , "tomato" , "purple"]

for(let i=0; i<5; i++){
 let newDiv1 = document.createElement("div")
    newDiv1.style.width = "10rem" ;
    newDiv1.style.height = "5rem" ;
    newDiv1.style.backgroundColor = colors[i]  ;
    newDiv1.style.marginTop = "10px" ;
    document.body.append(newDiv1) ;
}
// if we use newDiv1.remove() , it will only remove last one (purple div) in case "var" but not in let . so write 
// var newDiv1 = document.createElement("div") then use ,  newDiv1.remove()

// "This" in DOM

function test(){
    console.log(this) ;
}
grandParent.addEventListener("click" , test) ;
// when we click on grandParent , it will give "<div class="grandParent">"gp"  similarly for child
Child.addEventListener("click" , test) ;
// "<div class="child">"c"


// eval() Function :- all mathematical expressions are evaluated
console.log(eval(10*5 / 2)) ;
console.log(eval(10**5 / 2)) ;