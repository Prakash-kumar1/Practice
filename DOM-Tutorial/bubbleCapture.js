// Question no:-1 =>>  what is Event bubbling in JavaScript ??
// Answer =>>  The Event bubbling in JavaScript is a type of event propagation. The event triggers the innermost target element
//          & consecutively triggers the parent element of the target element in the same hierarchy until it triggers the outermost element. -->


const grandParent = document.querySelector(".grandparent") ;
const Parent = document.querySelector(".parent") ;
const child = document.querySelector(".child") ;

// child.addEventListener("click", ()=>{
//     console.log("you clicked on child") ;
// })

// Parent.addEventListener("click", ()=>{
//     console.log("you clicked on parent") ;
// })

// grandParent.addEventListener("click", ()=>{
//     console.log("you clicked on grandparent") ;
// })

// document.body.addEventListener("click", ()=>{
//     console.log("you clicked on document.body") ;
// })



// // Question no:-1 =>>  what is Event Capturing in JavaScript ??
// // Answer =>> Event capturing is one of two ways to do event propagation in the HTML DOM. In event capturing, an event propagates 
// //            from the outermost element  to the target element. Capturing happens before bubbling.
// //             It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements.


// child.addEventListener("click", ()=>{
//     console.log("Capturing events on child") ;
// }, true) ;

// Parent.addEventListener("click", ()=>{
//     console.log("Capturing events on parent") ;
// }, true) ;

// grandParent.addEventListener("click", ()=>{
//     console.log("Capturing events on grandparent") ;
// }, true) ;

// document.body.addEventListener("click", ()=>{
//     console.log("Capturing events on document.body") ;
// }, true) ;



// Question no:-1 =>>  what is Event Delegation in JavaScript ??
// Answer =>> Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling  pattern that
//       allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

grandParent.addEventListener("click", (e) => {
    console.log(e);
  console.log(e.target);
});


















































































