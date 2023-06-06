const temp = 60; 
const wind_speed = 4;
const weather = document.querySelector("#windchill");


function windChill() {
    const chill = 35.74 + 0.615 * temp - 35.75 ** 0.16 + 0.4275 * temp * wind_speed ** 0.16;
    console.log(chill);
    weather.textContent = `Windchill: ${chill}`;
    document.querySelector("#windspeed").textContent = `Wind speed: ${wind_speed}`;
    document.querySelector("#temperature").textContent = `Temperature: ${temp}f`;
}


windChill()