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
















