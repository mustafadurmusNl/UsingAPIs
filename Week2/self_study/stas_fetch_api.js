// exercise01
//1st way
function searchShows02(query) {
    const url=`http://api.tvmaze.com/search/shows?q=${query}`
    return fetch(url)
   
}

searchShows02('friends')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))


//2nd way
function searchShows(query) {
    const url=`http://api.tvmaze.com/search/shows?q=${query}`
    //document.getElementById('loadingIndicator').style.display = 'block';
     fetch(url)
    .then(response => response.json())
    .then(data => {  
        document.getElementById('loadingIndicator').style.display = 'none';                      //the data is an array
        data.map(item => {
            console.log(item.show.name)
            displayTheSeries(data)
            document.getElementById('errorMessage').innerText=''    //remove the error message
        })
    })
    .catch(error => {
        document.getElementById('loadingIndicator').style.display = 'none'; 
        document.getElementById('errorMessage').innerText=error
        displayTheSeries([])  //remove the previous results with an empty array
    })  
}
searchShows('game of thrones') 

//**************** */
// exercise02

 function displayTheSeries(data) {
    const displayElement=document.getElementById('resultsList')
    displayElement.innerHTML=''
    data.map(item => {
        const liElement=document.createElement('li')
        const imgElement = document.createElement('img');
        imgElement.src = item.show.image ? item.show.image.medium : ''; // Add picture if available
        imgElement.alt = item.show.name;
        imgElement.style.width = '50px'; // Set image size
        imgElement.style.height = 'auto';
        liElement.appendChild(imgElement);
        const textNode = document.createTextNode(item.show.name);
        displayElement.appendChild(liElement)
    })

 }
 let searchTimeoutToken=0;
window.onload = () => {
    const searchFieldElemenet=document.getElementById('searchField')
    searchFieldElemenet.onkeyup = () => {
        clearTimeout(searchTimeoutToken)
        if(searchFieldElemenet.value.trim().length===0) return;
       searchTimeoutToken= setTimeout(() => {
            searchShows(searchFieldElemenet.value)
        }, 1000)
          
    }
}




// exercise03   
//Add CSS for the loading indicator
const style = document.createElement('style');
style.innerHTML = `
    #loadingIndicator {
        display: none;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }
`;
document.head.appendChild(style);

// Create loading indicator element
const loadingIndicator = document.createElement('div');
loadingIndicator.id = 'loadingIndicator';
loadingIndicator.innerText = 'Loading...';
document.body.appendChild(loadingIndicator);