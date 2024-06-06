function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === 'string') {
        resolve(data)
      } else {
        reject('please enter a string')
      }
    }, 2000)
  })
}
getData('hoi')
  .then((response) => console.log(response))
  .catch((err) => console.error(err)) //logs as red color
//
function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') {
        resolve(number + 2)
      } else {
        reject('please enter a number')
      }
    }, 2000)
  })
}
addTwo(6)
  .then((response) => {
    console.log(response)
    return response + 2
  })
  .then((newResponse) => console.log(newResponse))
  .catch((err) => console.error(err))
