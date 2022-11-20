
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5295903&appid=ac1b23a1c3a50434df51d502678cb05f";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
  console.log(jsObject);
  // °F = (K - 273.15)* 1.8000 + 32.00
  document.querySelector('#temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);

  const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  
  const windspeed = jsObject.wind.speed;
  const desc = jsObject.weather[0].description;
  // document.querySelector('#icon-src').textContent = iconsrc;
  document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
  document.querySelector('#weatherIcon').setAttribute('alt', desc);
  document.querySelector('figcaption').textContent = desc;
  document.querySelector('#speed').textContent = windspeed;
  
  };
getWeather();