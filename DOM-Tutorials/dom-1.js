// // Get Element By ID :==>>
const title = document.getElementById("main-heading")
console.log(title)

// Get Element By Class Name :==>>
const list = document.getElementsByClassName("list-items")
console.log(list)

// Get Element By Class Name :==>>
let item = document.getElementsByTagName("li")
console.log(item)

// Query Selector
const contain = document.querySelector(".container")
console.log(contain)

const head = document.querySelector("#main-heading")
console.log(head) ;

const tag = document.querySelector("li")
console.log(tag) ;


// // DOM - Manipulation :==>>

const heading = document.querySelector('#main-heading')
// changing Heading Color
heading.style.color = 'red' ;
heading.style.background = 'yellow' ;
console.log(heading) ;


const Items = document.querySelector('.list-items')
// // changing List - Items Colors

Items.style.background = 'green' ; 
Items.style.color = 'white' ; 
Items.style.fontSize = '5rem' ; 
console.log(Items) ; 

// //This works on only one First Item , For applying on whole , we used Loop .

// for(let i=0 ; i < Items.length ; i++){
// Items[i].style.background = 'blue' ; 
// }
// console.log(Items) ;          //Loop is not working


// Checking The Text  ===>>>

const firstListItem = document.querySelector('.list-items')

console.log(firstListItem.innerText) ;    //Neo The Matrix

console.log(firstListItem.innerHTML) ;       //<span>Neo</span> 
                                            //    The Matrix

console.log(firstListItem.textContent) ;        //Neo 
//                                             //  The Matrix



// // Creating  Elements 

const ul = document.querySelector('ul') ;
const li = document.createElement('li') ;
// Adding Elements
ul.append(li) ;      // li created , check in Elements section 

// // Modifying The Text  ===>>>

li.innerText = 'The Carnage'       //You can see in list

// // Modifying The Attributes  ===>>
li.setAttribute('id' , 'main-heading') ;           //it will add in list
li.removeAttribute('id') ;       //it will remove from list


const title1 = document.querySelector('#main-heading')
console.log(title1.getAttribute('id')) ;               //main-heading


// ####    Using the Class List Method  ####     

// Example :- 1

const ul1 = document.querySelector('ul') ;
const li1 = document.createElement('li') ;
// Adding Elements
ul1.append(li1) ;      // li created , check in Elements section 

// // Modifying The Text  ===>>>

li1.innerText = 'The  Vampire => Morbious' 
li1.classList.add('list-items')          //Add in Class
li1.classList.remove('list-items')       //Remove From Class

// Remove Elements
li.remove() ;                     //Carnage Removed
li1.remove() ;         // The  Vampire => Morbious  Removed



// ###@@@$$$***  Traversing  The  DOM  ###@@@$$$***


// Parent  Node  Traversal

let ul2 = document.querySelector('ul')
console.log(ul2) ;
console.log(ul2.parentNode) ;                    //It will Give a Div
console.log(ul2.parentElement) ;                 //It will Give a Div
console.log(ul2.parentNode.parentNode) ;          //It will Give a Body
console.log(ul2.parentElement.parentElement) ;    //It will Give a Body
console.log(ul2.parentNode.parentNode.parentNode) ;          //It will Give a Whole HTML Page
console.log(ul2.parentNode.parentNode.parentNode.parentNode) ;          //It will Give a  Document (Window Object)
console.log(ul2.parentNode.parentNode.parentNode.parentNode.parentNode) ;          //It will Give a Null .

//    OR  We can apply on HTML

const html = document.documentElement ;
console.log(html.parentNode) ;                          //It will Give a  Document (Window Object)
console.log(html.parentElement) ;                        //It will Give a Null .


// Child  Node  Traversal

let ul3 = document.querySelector('ul')
console.log(ul3.childNodes) ;                       //it gives a Node List of 11 
// if we put 2 li in a line then node list will be 10 , because There is no Intendations and intendations are count as a text node   






















































































































