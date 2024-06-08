//getting text from example.txt FILE By FETCH API

function getTextFile() {
  fetch('example.txt')    //fetch () returns a promise
    .then((response) => response.text())     //text() returns a promise
    .then((data) => console.log(data))
    .catch((err) => err.text)
}
getTextFile()

//getting text from example.json FILE By FETCH API
function getJsonFile() {
  fetch('example.json')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
getJsonFile()

//https://api.exchangeratesapi.io/latest
function getExternalAPI() {
  fetch('https://freetestapi.com/api/v1/currencies')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
getExternalAPI()