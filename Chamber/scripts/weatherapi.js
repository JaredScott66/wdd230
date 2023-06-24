const url = "https://api.openweathermap.org/data/2.5/weather?q=Clarksville&units=imperial&id=524901&appid=8326b5a42df01eacbb6ff9514169d75f"

// const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherSpot = document.querySelector(".weatherapi");

async function apiFetch () {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayResults(data);
        } else {
            throw Error(await response.text()); 
        }
    }   catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    let temp = document.createElement("p");
    let speed = document.createElement("p");
    let windChill = document.createElement("p");

    const wind = weatherData.wind.speed;
    const temp1 = weatherData.main.temp;

    const chill = (0.0817*(3.71*(Math.pow(wind, 0.5))+
    5.81-0.25*wind)*(temp1-91.4)+91.4);
    
    if (temp >= 50, wind < 5) {
        windChill.innerHTML = `Wind Chill: N/A`;
    } else {
        windChill.innerHTML = `Wind Chill: <strong>${chill.toFixed(0)}</strong>&deg;F`;

    }

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    temp.innerHTML = `Temp: <strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;
    temp.setAttribute("class", "weatherGad");

    speed.innerHTML = `Speed: <strong>${weatherData.wind.speed.toFixed(1)}</strong> mph`;
    speed.setAttribute("class", "weatherGad");
    

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    weatherSpot.appendChild(speed);
    weatherSpot.appendChild(temp);
    weatherSpot.appendChild(windChill);
}


apiFetch();