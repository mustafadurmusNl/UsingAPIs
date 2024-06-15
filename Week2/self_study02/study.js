//sending a post request
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({  //converts a JavaScript object or value to a JSON string
    name: 'John Doe',
    salary: '3000',
    age: '30',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
