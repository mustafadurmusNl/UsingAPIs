//Async Await saves us from then chain
function sayingHello() {
  //this function returns a string

  return 'hello bro'
}
console.log(sayingHello()) // hello bro

//*** */ ******
async function sayHello() {
  //this function returns a Promise<String>

  return 'hello bro'
}
console.log(sayHello()) //Promise {<fulfilled>: 'hello bro'}
//since  async function returns a Promise then we have to handle it by then ()
sayHello().then((data) => console.log(data)) //hello bro

//  getting sada from api server in 2 ways  i)by promise ii)by  async await

//1st way by using promise
document
.querySelector('#button-return-post').addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>response.json())
    .then(post=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then(response=>response.json())
        .then(comments=>{
            for(let comment of comments){
                console.log(comment.name)
            }
        }

        )
    })
})

//2nd way by async await
document
  .querySelector('#button-return-post')
  .addEventListener('click', async () => {
    const post = await (
      await fetch('https://jsonplaceholder.typicode.com/posts/1')
    ).json()

    const comments = await (
      await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      )
    ).json()

    for (let comment of comments) {
      console.log(comment.name)
    }
  })
