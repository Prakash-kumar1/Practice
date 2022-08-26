// Fetching Text from another file

document.getElementById("btn").addEventListener("click",
makeRequest) ;

// function makeRequest(){
//     console.log("Button Clicked") ;
//     const promiseObj = fetch('data.txt') ;
//     console.log(promiseObj) ;

//     promiseObj
//                .then((res) => {
//                    console.log(res) ;
//                    return res.text() ;
//                })
//                .then((data) => {
//                console.log(data) ;
//                })
// }

// //  OR we can also write this function

function makeRequest(){
    console.log("Button Clicked") ;

    fetch('data.txt')
                      .then((res) => {
                          console.log(res) ;
                          return res.text() ;
                      })
                      .then((data) => {
                      console.log(data) ;
                      document.getElementById("print").innerText = data ;
                      })
}










