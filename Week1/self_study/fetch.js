function getTextFile() {
  fetch('example.txt')
    .then((response) => {
      return response.text
    })
    .catch((err) => {
      console.log(err)
    })
}
getTextFile()
