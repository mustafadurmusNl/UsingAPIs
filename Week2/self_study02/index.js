document.getElementById('getText').addEventListener('click', getText);
function getText() {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        displayText(data);
        console.log(data)
    })
    .catch((err) => console.log(err));
}

function displayText(data) {
  const output = document.createElement('div');
  output.id = 'output';
    output.innerHTML = data
    document.body.appendChild(output);
}
 //
 document.getElementById('getUsers').addEventListener('click', getUsers);
 function getUsers() {
   fetch('users.json')
     .then((res) => res.json())
     .then((data) => {
         displayUsers(data);
         console.log(data)
     })
     .catch((err) => console.log(err));
 }
 function displayUsers(data) {
 const outputDiv = document.createElement('div');

 let output = '';
    data.forEach(user => {
        output +=`
        <ul>
        <li>id: ${user.id}</li>
        <li>name: ${user.name}</li>
        <li>salary: ${user.salary}</li>
        <li></li>age: ${user.age}</li>
        </ul>
        `
    });
 
outputDiv.innerHTML = output;   
document.body.appendChild(outputDiv);
 }
 document.getElementById('getPosts').addEventListener('click', getPosts);
 function getPosts() {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then((res) => res.json())
   .then((data) => {
  data.forEach(post => {
    displayPosts(post);
   })
})
.catch((err) => console.log(err));
 }
function displayPosts(post) {
  const postDiv = document.createElement('div');
  postDiv.innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.body}</p>
  `;
  document.body.appendChild(postDiv);
}
//
document.getElementById('addPost').addEventListener('submit', addPost);
function addPost(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({title: title, body: body})
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
}