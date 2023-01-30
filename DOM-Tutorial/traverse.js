const rootNode = document.getRootNode();
console.log(rootNode) ;

// for getting childNode
console.log(rootNode.childNodes) ;

// childNodes are array like object means it has indexing and length
const htmlElementNode = rootNode.childNodes[2];
console.log(htmlElementNode)

// for getting childNode of htmlElementNode 
 console.log(htmlElementNode.childNodes);    //  NodeList(4) [script, head, text, body]

// using indexing for getting childNode 
const headElementNode = htmlElementNode.childNodes[1];
const textNode1 = htmlElementNode.childNodes[2];
const bodyElementNode = htmlElementNode.childNodes[3];
console.log(headElementNode, textNode1, bodyElementNode);

// parent node: for getting parent element
console.log(headElementNode.parentNode)
console.log(headElementNode.parentNode.parentNode)
console.log(headElementNode.parentNode.parentNode.parentNode)


// #####$$$$%%%&&&+++>>>    sibling relation    #####$$$$%%%&&&+++>>>  
console.log(headElementNode.nextSibling)
console.log(headElementNode.nextSibling.nextSibling)
console.log(headElementNode.nextSibling.nextSibling.nextSibling)

// *********************************************************************************************************************************************************************************************

// First select h1, then selecting their parent means div applying style
const h1 = document.querySelector("h1");
const div = h1.parentNode.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333"

// Directly selecting the body
const body = document.body
body.style.color = "black";
body.style.backgroundColor = "gold"

// childnodes 
const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);

// children removes text node
const container = document.querySelector(".container");
console.log(container.children);

// *********************************************************************************************************************************************************************************************












































































































