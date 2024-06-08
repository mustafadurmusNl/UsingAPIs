const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if (request.readyState === 4) {
        reject('error getting resource')
      }
    })
    request.open('GET', resource)
    request.send()
  })
}

getTodos('luigi.json')
  .then((data) => {
    console.log('promise resolved: ', data)
  })
  .catch((err) => {
    console.log('promise rejected:', err)
  })

//get data from server by api request
function getUsers(url) {
  return new Promise((resolve, reject) => {
    const xhrequest = new XMLHttpRequest()
    xhrequest.addEventListener('readystatechange', () => {
      try {
        if (xhrequest.readyState === 4 && xhrequest.status === 200) {
          resolve(JSON.parse(xhrequest.responseText))
        }
      } catch {
        reject(error)
      }
    })
    xhrequest.open('GET', url)
    xhrequest.send()
  })
}

getUsers('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    console.log(data)
    data.forEach((user) => {
      console.log(user.name)
    })
  })
  .catch((err) => console.log(err))

//get user post
function getUserCommentsByID(url) {
  return new Promise((resolve, reject) => {
    const xhrequest = new XMLHttpRequest()
    xhrequest.addEventListener('readystatechange', () => {
      try {
        if (xhrequest.readyState === 4 && xhrequest.status === 200) {
          resolve(JSON.parse(xhrequest.responseText))
        }
      } catch {
        reject(error)
      }
    })
    xhrequest.open('GET', url)
    xhrequest.send()
  })
}
//1st way to get comment of a user
//   getUserCommentsByID('https://jsonplaceholder.typicode.com/users/3').then(data=>{
//     console.log(data)
//   }).catch(err=>console.log(err))

// 2nd way to get comment of a user  ***then chain
getUsers('https://jsonplaceholder.typicode.com/users/3')
  .then((data) => {
    console.log(data)
    return getUserCommentsByID('https://jsonplaceholder.typicode.com/users/3') //return a promise  must be handled with then or catch
  }) //we take  that out and handle it outside
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

/// promise all
const p1 = Promise.resolve('first promise is successfull')
const p2 = Promise.resolve('second promise is successfull')
const p3 = Promise.resolve('third promise is successfull')
//if all promises are resolve then it return resolve as an array of resolve otherwise it returns reject
Promise.all([p1, p2, p3])
  .then((response) => {
    console.log(response) //response =first promise is successfull
    for (let value of response) {
      console.log(value)
    }
  })

  .catch((err) => console.log(err))
