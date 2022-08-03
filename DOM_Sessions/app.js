document.write(document.querySelector("h1"))
console.log(document.querySelector("h1"))                       // <h1> Hello world </h1>
console.log(document.querySelector("h1").innerText)          // / Hello world



console.log(document.querySelectorAll("h1"))
// it returns a list  : -  NodeList(2) [h1, h1]

// Changing Text : it change on console as well as Web Page

alert("changing the text") ;
document.querySelector("h1").innerText = "Good Bye ! class is over"


// // Accessing IInd h1 tag

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

//  changing "vasanth"  to  "Shivansh Rawat" on web page
if (change[i].innerText === "vasanth") {
    change[i].innerText = " Shivansh Rawat"    
}
    console.log(change[i].innerText) ;                         // it change see on console
}


// An important property : 

// space --> represent inside the tag
console.log(document.querySelector("div .container")) ;                /* <p class="container">This is example of space</p> */

// Without space --> represent same tag
console.log(document.querySelector("div.contain"))  ;                  // null

// Accessing firstChild , FirstElementChild ,  LastChild , LastElementChild

console.log(document.firstChild)    ;               // <! DOCTYPE html>
console.log(document.firstElementChild) ;             // gives whole <html>
console.log(document.firstElementChild.firstElementChild) ;        // gives head tag
console.log(document.firstElementChild.lastElementChild) ;              // gives Body tag
console.log(document.firstElementChild.lastElementChild.firstElementChild)   // gives heading tag statement

// Changing Color : it gives red color on h1 tag and on console

let colr=document.querySelector('h1').style.color = 'red' ;
console.log(colr) ;

colr=document.querySelector('.IInd').style.color = 'blue' ;
console.log(colr) ;

colr=document.querySelector('div').style.color = 'violet' ;
console.log(colr) ;

colr=document.querySelector('#col').style.color = 'yellow' ;
console.log(colr) ;

colr=document.querySelector('.contain').style.backgroundColor = 'pink' ;
console.log(colr) ;

// Changing Font size

colr=document.querySelector('.contain').style.fontSize = '30px' ;
console.log(colr) ;

colr=document.querySelector('.container').style.fontSize = '50px' ;
console.log(colr) ;

// Changing anchor tag

let link = document.querySelector('a')
console.log(link) ;                     /* <a href="http://google.com">Go to Google</a> */

// Finding link
link = document.querySelector('a').getAttribute('href')
console.log(link) ; 
// it returns Google link : -  "http://google.com" 

// Changing link
link = document.querySelector('a').setAttribute('href' , 'https://javascript.info/')
console.log(link) ; 
// we click on "Go to Google" , but we go on Javascript tutorial

link = document.querySelector('a').setAttribute('href' , 'https://www.facebook.com/')
console.log(link) ; 
// we click on "Go to Google" , but we go on Facebook Log in Page





















