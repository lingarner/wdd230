let windspeed = document.querySelector("#speed").textContent;
let temp = document.querySelector("#temp").textContent;

if (temp < 50 && windspeed > 4.8) {
  let chill = Math.round(
    35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windspeed, 0.16) +
      0.4275 * temp * Math.pow(windspeed, 0.16)
  );

  let windchill = document.querySelector("#chill");

  windchill.innerHTML = chill;
}

console.log(chill);
