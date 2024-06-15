//async function with fetch
async function getCurrencies(url) {
    const data = await (await fetch(url)).json();
    return data;
  }
getCurrencies('https://api.exchangerate-api.com/v4/latest/USD')
.then(data=>console.log(data)); // {base: "USD", date: "2021-09-02", time_last_updated: 1630579201, rates: {…}}
getCurrencies('https://api.exchangerate-api.com/v4/latest/USD').then((data) =>
  console.log(data.rates.TRY),
); //32.37


//example 2
async function getCurrencies02(url) {
    const response =  await fetch(url);
    return response;
  }
getCurrencies02('https://api.exchangerate-api.com/v4/latest/EUR')
.then((response) =>response.json()
.then(data=>console.log(data.rates.TRY))); //34.94


//example 3  example ot wrong url XXXXXXX
async function getCurrencies03(url) {
  
    try{
        const response =  await fetch(url);
if(response.ok){    
        const data = await response.json()
        return data;
    }
    throw new Error('Request failed!!!!!!!!!!!!!!!!!!');
    
  } catch(err){
        console.log("heyyyy"); 
  }
}
getCurrencies03('https://api.exchangerate-api.com/v4/latestXXXXXX/USD')
.then((data) => console.log(data.rates.AED)).catch(err=>console.log(err)); //heyyyy

//example 4
async function getWeather(){
    const API_KEY = "40780f584ae83749b62a5335ccf1e583"
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric&lang=en`);
    const data = await response.json();
    return data;
}
getWeather().then(data=>console.log(data.main.temp)); //16.68
getWeather().then(data=>console.log(data.weather[0].description)); //clear sky
