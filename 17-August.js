// 17 August session

Promise.resolve('Success!')
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return 'actually, that worked'
  })
  .then(data => {
    throw Error('The fails!')
  })
  .catch(error => console.log(error.message))



  new Promise((resolve, reject) => {
    resolve('Welcome!!')
  })
  .then(() => {
    throw Error('Do not go anywhere')
  })
  .catch(error => {
    return "Come to the village"
  })
  .catch(error => console.log(error.message))
