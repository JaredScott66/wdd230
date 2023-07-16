const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&id=524901&appid=8326b5a42df01eacbb6ff9514169d75f"

// const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherSpot = document.querySelector("#weatherGadget");
const forcastDiv = document.querySelector("#forcast");

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
    let humidity = document.createElement("p");


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    temp.innerHTML = `Temp: <strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>&deg;F`;
    temp.setAttribute("class", "weatherGad");

    humidity.innerHTML = `Humidity: <strong>${weatherData.list[0].main.humidity.toFixed(0)}</strong>`;
    humidity.setAttribute("class", "weatherGad");

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    weatherSpot.appendChild(temp);
    weatherSpot.appendChild(humidity);

    for (let i = 1; i < 4; i++) {
        let day = document.createElement("div");
        let fig = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        let figImg = document.createElement("img");
        let date = document.createElement("p");
        let temp = document.createElement("p");
        
        let index = i * 9;
        let gramDate = ""

        let forcastDay1 = weatherData.list[index].dt_txt[8];
        let forcastDay2 = weatherData.list[index].dt_txt[9];

        let dateDay = forcastDay1 + forcastDay2;
        console.log(dateDay);

        if (dateDay == 1) {  
            gramDate = "st"
        } else if (dateDay == 2) {
            gramDate = "nd"
        } else if (dateDay == 3) {
            gramDate = "rd"
        } else {
            gramDate = "th"
        }
        
        let forcastTemp = weatherData.list[index].main.temp.toFixed(0);

        let forcastIconsrc = `https://openweathermap.org/img/w/${weatherData.list[i].weather[0].icon}.png`;
        let forcastDesc = weatherData.list[index].weather[0].description;

        date.innerHTML = `Date: <strong>${forcastDay1}${forcastDay2}${gramDate}</strong>`;
        
        figImg.setAttribute("src", forcastIconsrc);
        figImg.setAttribute("alt", forcastDesc);

        temp.innerHTML = `Temp: <strong>${forcastTemp}</strong>&deg;F`;


        figCap.innerHTML = `<strong>${forcastDesc.toUpperCase()}</strong>`

        fig.appendChild(figImg);
        fig.appendChild(figCap);
        day.appendChild(fig);
        day.appendChild(temp);
        day.appendChild(date);


        forcastDiv.append(day);
        
    }

}


apiFetch();