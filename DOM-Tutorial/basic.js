// <!-- Question no:-1  what is DOM ??
// answer :-  The Document Object Model (DOM) is a programming interface for web documents. It represents the 
//            page so that programs can change the document structure, style, and content. The DOM represents
//             the document as nodes and objects; that way, programming languages can interact with the page.


// !!!@@@###$$$===>>>>>   select element using get element by id     <<<===!!!@@@###$$$===
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

//  !!!@@@###$$$===>>>>>  select element using query selector       <<<===!!!@@@###$$$===
const mainHeading1 = document.querySelector("#main-heading");
console.log(mainHeading1);

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);


//!!!@@@###$$$===>>>>>   Text Content :- using this property we get Text whatever written and also change the text.
const mainHeading2 = document.getElementById("main-heading");
console.log(mainHeading2.textContent);
// changing the text on UI
mainHeading2.textContent = "This is something else"
console.log(mainHeading2.textContent);


//!!!@@@###$$$===>>>>>   innerText :- using this property we get Text whatever written but we can't change the text.
const mainHeading3 = document.getElementById("main-heading");
console.log(mainHeading3.innerText);


//!!!@@@###$$$===>>>>>   Change the styles of elements
const mainHeading4 = document.querySelector("div.headline h2");
// console.log(mainHeading4.style);

mainHeading4.style.color = "red" ;
mainHeading4.style.border = "20px double yellow" ;
mainHeading4.style.backgroundColor = "blue" ;


//!!!@@@###$$$===>>>>>   get attribute
const link = document.querySelector("a") ;
console.log(link) ;
// for getting attribute value, we use getAttribute()
console.log(link.getAttribute("href")) ;

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


//!!!@@@###$$$===>>>>>   set attribute : using this property we can set the value
link.setAttribute("href", "https://codprog.com") ;
// let check it's change or not
console.log(link.getAttribute("href")) ;


// *********************************************************************************************************************************************************************************************

// get multiple elements using " getElements by class name "  and  " querySelectorAll "

// getElements by class name gives HTML collection 
const navItems = document.getElementsByClassName("nav-item")
console.log(navItems)

// querySelectorAll gives node List
const navItems1 = document.querySelectorAll("nav-item")
console.log(navItems1)

// <!-- Question no:-2  difference between nodelist and htmlcollection ??
// answer :-  HTMLCollection is a collection of document elements. A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
//            HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed by their index number.


// array like objects means you can use  "Indexing"  and  "Length property"


// !!!@@@###$$$===>>>>>  using For loop in DOM     <<<===!!!@@@###$$$===

// example-1
const navItems3 = document.getElementsByClassName("nav-item")
for(let i=0; i<navItems3.length; i++){
    console.log(navItems3[i]) ;

// storing in a variable, applying style on it
    const navItem = navItems[i] ;
    navItem.style.backgroundColor = "magenta" ;
}

// example-2
const todo = document.getElementsByClassName("todo-btn")
for(let i=0; i<todo.length; i++){
    console.log(todo[i]) ;

// storing in a variable, applying style on it
    const todoItem = todo[i] ;
    todoItem.style.backgroundColor = "black" ;
    todoItem.style.color = "gold" ;
    todoItem.style.fontWeight = "bold" ;
    todoItem.style.border = "5px dotted blue" ;
}

// OR i can also use For-of loop
for(let nav of navItems){
    console.log(nav)
}

for(let to of todo){
    console.log(to)
}


// *********************************************************************************************************************************************************************************************

// !!!@@@###$$$===>>>>>   innerHtML (to add HTML element)   !!!@@@###$$$===>>>>>  
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// // adding a new Button
// headline.innerHTML += "<button class= \"btn\"> using Inner html  </button>" 
// console.log(headline.innerHTML);

const todoList = document.querySelector(".todo-list") ;
console.log(todoList.innerHTML);
// Adding some new todo's but don't use this method because it has some performance issues
todoList.innerHTML += "<li>Gym</li>"
todoList.innerHTML += "<li>Marriage</li>"
todoList.innerHTML += "<li>teach Students</li>"

// *********************************************************************************************************************************************************************************************

// Classlist :- returns collection  of the class attributes of the element
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// adding a new class
sectionTodo.classList.add('bg-dark') ;

// removing a  class
sectionTodo.classList.remove('container') ;      // removing container class, now it takes whole width


// #### classList.toggle =>>  The toggle() button is used for toggling classes to the element. It means if the class is not present
//                            then it adds a new class or if the class is present then it removes the existing classes.
// example
sectionTodo.classList.toggle("bg-dark") ;        // Now, bg-dark is removed
sectionTodo.classList.toggle("container") ;        // Now, container is added


// !!!@@@###$$$===>>>>>  Clonning Nodes
const ul = document.querySelector(".todo-list")
const li = document.createElement("li") ;
li.textContent = "creating new node (line no- 155)" ;
ul.append(li) ;
// prepend will ake this above all items
ul.prepend(li) ;

// there is only one process apply either append or prepend but if i want to append and prepend li then i need to clone the node.
const li2 = li.cloneNode(true)          // true for deep clonning
ul.append(li2) ;


// !!!@@@###$$$===>>>>>  append child
const ul1 = document.querySelector(".todo-list")
const li1 = document.createElement("li") ;
li1.textContent = "using append child" ;
ul.appendChild(li1) ;
// removing the child
ul.removeChild(li1) ;


// !!!@@@###$$$===>>>>>  Static list  vs  live list
// querySelectorAll  gives Static list 
// getElementsBySomething gives Live list

const listItems = document.querySelectorAll(".todo-list li") ;
console.log(listItems) ;
const sixthLi = document.createElement("li") ;
sixthLi.textContent = "item 7 (Static list  vs  live list)" ;

const ul2 = document.querySelector(".todo-list") ;
ul2.append(sixthLi) ;
console.log(listItems) ;

// !!!@@@###$$$===>>>>> How to get Dimensions of Element

// getBoundingClientRect() :- it gives all information like height, width, left and Right margin about an element.
const sectionTodo1 = document.querySelector(".section-todo") ;
const info = sectionTodo1.getBoundingClientRect() ;
console.log(info) ; 

// for getting only height
const info1 = sectionTodo1.getBoundingClientRect().height ;
console.log(info1) ; 


// *********************************************************************************************************************************************************************************************


// <!-- Question no:-4  what is event in javascript ??
// answer =>>   JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.
//              When the page loads, it is called an event. When the user clicks a button, that click too is an event.

// The addEventListener() method attaches an event handler to the specified element. 
const btn = document.querySelector(".btn-headline") ;

function clickMe(){
    console.log("you clicked me using addEventListener()")
}

btn.addEventListener("click", clickMe) ;

// or we can also write this way
const btn1 = document.querySelector(".done") ;

btn1.addEventListener("click", function(){
    console.log("you clicked Done !!!")
}) ;


// or we can also write this way
const btn2 = document.querySelector(".remove") ;

btn2.addEventListener("click", () => {
    console.log("you clicked Remove using arrow Functions !!!")
}) ;


// !!!@@@###$$$===>>>>>  Keypress Event
const body = document.body ;
body.addEventListener("keypress", (e)=>{
    console.log(e) ;
    console.log(e.key) ;
})

// !!!@@@###$$$===>>>>>  Mouseover Event
const mainButton = document.querySelector(".btn-headline") ;
mainButton.addEventListener("mouseover", (e)=>{
    console.log("mouseover event occured !!!") ;
})

mainButton.addEventListener("mouseleave", (e)=>{
    console.log("mouseleave event occured !!!") ;
})


// *********************************************************************************************************************************************************************************************

// Creating To Do
const todoForm = document.querySelector(".form-todo") ;
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList1 = document.querySelector(".todo-list") ;
console.log(todoInput) ;

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault() ;
    // console.log("submit event")
console.log(todoInput.value) ;

const newTodoText = todoInput.value ;
const newLi = document.createElement("li") ;

const newLiInnerHtml = `
                    <span class="text">${newTodoText}</span>
                    <div class="todo-buttons">
                      <button class="todo-btn done">Done</button>
                      <button class="todo-btn remove">Remove</button>
                    </div> ` ;

        newLi.innerHTML = newLiInnerHtml ;
        console.log(newLi) ;

// appending in ul for displaying on screen
todoList1.append(newLi) ;

todoInput.value = "" ;
})


// Adding Functionality on Done and Remove button by using Event DElegation

todoList1.addEventListener("click", (e)=>{
    console.log(e.target) ;

//check if user clicked on Done OR Remove Button
// console.log(e.target.classList) ;

//check if user clicked only on Done Button
if(e.target.classList.contains("done")){
console.log("great !!!") ;

const liSpan = e.target.parentNode.previousElementSibling ;
liSpan.style.textDecoration = "Line-through" ;
}

//check if user clicked only on remove Button
if(e.target.classList.contains("remove")){
console.log("Do you want to remove something ?? ") ;

const targetedLi = e.target.parentNode.parentNode ;
targetedLi.remove() ;
}

})


// *********************************************************************************************************************************************************************************************

