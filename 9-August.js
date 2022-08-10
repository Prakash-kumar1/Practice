// Callback is a function  which gets passed as a Parameter .

// Asynchronous  Programming

console.log('before') ;
setTimeout(() => {
    console.log("reading data from the database....") ;
    return{id: 1 , githubUserName: "Prakash-kumar"} ;
}, 2000) ;
console.log('after') ;