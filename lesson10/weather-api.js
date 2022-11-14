const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=ac1b23a1c3a50434df51d502678cb05f";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();