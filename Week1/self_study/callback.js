const languages = ['Python', 'JAva', 'C++']
function addLanguage(language, callback) {
  setTimeout(() => {
    languages.push(language)
    console.log(`${language} added`)
    callback()
  }, 2000)
}
function getAllLanguages() {
  setTimeout(() => {
    languages.forEach((language) => {
      console.log(language)
    })
  }, 1000)
}
addLanguage('JavaScript', getAllLanguages)

//another example
function getFirstName(callback) {
  setTimeout(() => {
    const name = 'John'    //assume this is fetched from a server
    console.log(name)
     const lastName = 'Doe' //assume this is fetched from a server
    callback(lastName)
  }, 2000)
}
function getLastName(lastName) {
  setTimeout(() => {
    console.log(lastName)
  }, 1000)
}
getFirstName(getLastName)


//another example
getFirstName(()=>{   //this is the callback function--> (anonymous function)
console.log("hoiii")
})   