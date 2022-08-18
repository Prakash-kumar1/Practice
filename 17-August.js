// // 17 August session

// Question no. => 1  Promise Question

// Promise.resolve('Success!')
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return 'actually, that worked'
//   })
//   .then(data => {
//     throw Error('The fails!')
//   })
//   .catch(error => console.log(error.message))


// Question no. => 2  Promise Question

//   new Promise((resolve, reject) => {
//     resolve('Welcome!!')
//   })
//   .then(() => {
//     throw Error('Do not go anywhere')
//   })
//   .catch(error => {
//     return "Come to the village"
//   })
//   .catch(error => console.log(error.message))


// 18 August session


// Question no. => 3  Basic  Question

var sum = 0.1+0.2
// console.log(sum)

if(sum == 0.3){
  console.log("true")
}else{
  console.log("false") ;
}


// Question no. => 4  Closures Question

(function immediateA(a) {
  return (function immediateA(b) {
    console.log(a) ;
  })(1) ;
})(0) ;
