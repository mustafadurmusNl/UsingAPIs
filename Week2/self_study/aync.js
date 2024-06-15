//udemy mustafa murat coskun js course

async function test(data) {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}
test('HALLO').then((response) => console.log(response));

//example 2
async function testData(data) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  let response = await myPromise; //await is used to wait for the promise to resolve
  console.log(myPromise); //Promise { <pending> }
  console.log('hallo'); //waits for 2 seconds

  return response;
}
testData('my promise hallo').then((response) => console.log(response)); //my promise hallo

//example 3
//async function with fetch
async function getCurrencies(url) {
  const data = await (await fetch(url)).json();

  console.log(data.rates.TRY);
  return data;
}
getCurrencies('https://api.exchangerate-api.com/v4/latest/USD'); //32.37
getCurrencies('https://api.exchangerate-api.com/v4/latest/EUR'); //38.4

getCurrencies('https://api.exchangerate-api.com/v4/latest/USD').then((data) =>
  console.log(data.rates.TRY),
); //32.37

getCurrencies('https://api.exchangerate-api.com/v4/latest/EUR').then((data) =>
  console.log(data),
); // {base: "EUR", date: "2021-09-02", time_last_updated: 1630579201, rates: {…}}

//example 4
async function getCurrency02(url) {
  const responce = await fetch(url);//fetch returns a Promise<Response>
  const data = await responce.json();//json() returns a Promise that resolves with the result of parsing the body text as JSON ==JSON Object
 return data;
}
getCurrency02('https://api.exchangerate-api.com/v4/latest/USD').then((data) =>
  console.log(data.rates.TRY)
); //32.37




//example 5
async function post(url,data) {
  const responce = await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-type':'application/json'
    }
  });   //fetch returns a Promise<Response>
    const responseData = await responce.json();//json() returns a Promise that resolves with the result of parsing the body text as JSON ==JSON Object
return responseData;
}
post('https://jsonplaceholder.typicode.com/posts',
    {userId:1,title:'hallo',body:'hallo body'})
    .then(data=>console.log(data))//{userId: 1, id: 101, title: "hallo", body: "hallo body"



//example 6
   async function put(url,data) {
    const responce = await fetch(url,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
        'Content-type':'application/json'
        }
   });   //fetch returns a Promise<Response>
        const responseData = await responce.json();//json() returns a Promise that resolves with the result of parsing the body text as JSON ==JSON Object
return responseData;
    }





// async function fetchUser() {
//   const response= await fetch('https://jsonplaceholder.typicode.com/users')
//  const data= await response.json()
//  console.log(data)
// }
// fetchUser()
