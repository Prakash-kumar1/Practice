// function message(){
//     let name = "Prakash" ;

//     function result(){
//         console.log(name) ;
//     }
//     result()
// }
// message()


for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
// output 6 6 6 6 6


for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
// output 1 2 3 4 5 6



