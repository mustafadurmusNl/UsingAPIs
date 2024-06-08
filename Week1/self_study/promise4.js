new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // We wait 1 second and then resolve with value 1
  })
    .then(function(result) {
      console.log(result); // Result: 1
      return result * 2;
    })
    .then(function(result) {
      alert(result); // Result: 2
      return result * 2;
    })
    .catch(error => {
      console.log(error);
    });