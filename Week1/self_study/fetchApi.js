console.log(11)
//fetch api request is way more advance of xmlhttprequest

/*   an example

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
}
    */

//fetch returns a promise and json() also returns a promise
//fetch() returned a prmoisr in response format
//***   fetch returns Promise<Response>
//      json() returns Promise<any>
function getStudents(url) {
  fetch(url) //it takes a url and returns a Promise<Response>
    .then((response) => response.json()) //json returns a Promise<any> thats why we handle with then again
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getStudents('students.json')

//from fake api   1st way is recommended  do everything inside the function
//1st way : we handle and manage the response inside the function
function getData(url) {
  fetch(url) // returns a Promise<Response>
    .then((response) => response.json()) // json() returns a Promise<any>
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
getData('https://jsonplaceholder.typicode.com/users')

//2nd way  : we can handle and manage  the response when we call the function
function getData02(url) {
  return fetch(url) // returns a Promise<Response>
}
getData02('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))



//fetch api for Post request simulation  its not a real url  **********
const postAData = {
  name: 'Emke',
  age: 35,
  salary: 5000,
}
function saveStudents(url) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postAData),
  })
  .then(response=>response.json())
  .then(data=>console.log('success',data))
  .catch(err=>console.log('error',err))
}
saveStudents('https://jsonplaceholder.typicode.com/users')//not  a real url to sent post request


