let p = new Promise((resolve, reject) => {
  let = a = 1 + 1
  if (a == 2) {
    resolve('success')
  } else {
    reject('failed')
  }
})
p.then((data) => console.log(data)).catch((err) => console.log(err))

//webdefsimplified example
const userLeft = true
const userWatchingCatMeme = false

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'user left',
        message: ':(',
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'user watching cat meme',
        message: 'webdevsimplified <cat',
      })
    } else {
      resolve('thumps up and subscribe')
    }
  })
}
watchTutorialPromise()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//promise all
const recorVideoOne = new Promise((resolve, reject) => {
  resolve('video 1 recorded')
})
const recorVideoTwo = new Promise((resolve, reject) => {
  resolve('video 2 recorded')
})

Promise.all([recorVideoOne, recorVideoTwo])
  .then((data) => console.log(data))           //['video 1 recorded', 'video 2 recorded']
  .catch((err) => console.log(err))


  //
  const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});
myPromise.then(data=>console.log(data)).catch(err=>console.log(err))

//
