document.write(document.querySelector("h1"))
console.log(document.querySelector("h1"))                       // <h1> Hello world </h1>
console.log(document.querySelector("h1").innerText)          // / Hello world



console.log(document.querySelectorAll("h1"))
// it returns a list  : -  NodeList(2) [h1, h1]

// Changing Text : it change on console as well as Web Page

alert("changing the text") ;
document.querySelector("h1").innerText = "Good Bye ! class is over"


// Accessing IInd h1 tag

console.log(document.querySelector(".IInd").innerText)    // Welcome Prakash


// // Accessing ul li  values

let list = document.querySelectorAll('ul li') ;
console.log(list) ;                            // NodeList(8) [li, li, li, li, li, li, li, li]

list = document.querySelectorAll('ul li')[0].innerText ;
console.log(list) ;       // 1

list = document.querySelectorAll('ul li')[2].innerText
console.log(list) ;            // 3

list = document.querySelectorAll('ul li')[5].innerText
console.log(list) ;  

list = document.querySelectorAll('ul li')[7].innerText
console.log(list) ;  

// // Using For loop  for printing values and also changing values

let change = document.querySelectorAll('ul li');
for (let i = 0; i < change.length; i++) {
    // console.log(i);                                    // it give index values of list
console.log(change[i].innerText) ;                               // it will give all values

//  changing "vasanth"  to  "Shivansh Rawat"
if (change[i].innerText === "vasanth") {
    change[i].innerText = " Shivansh Rawat"    
}
    console.log(change[i].innerText) ;                         // it change see on console
}







