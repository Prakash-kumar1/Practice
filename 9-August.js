// Callback is a function  which gets passed as a Parameter .

// Asynchronous  Programming


function getUser(id){
    setTimeout(() => {
        console.log("reading data from the database....") ;
        return{id: id , githubUserName: "Prakash-kumar"} ;
    }, 2000) ;
}

console.log('before') ;
const user = getUser(1) ;
console.log(user) ;
// it give result after 2sec . so, my JS program don't wait. by this time the value (Output) is " Undefined " .
// and again it will print After
console.log('after') ;