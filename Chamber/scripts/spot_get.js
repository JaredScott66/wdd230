const file = "data/data.json";

async function getBizData(){
    const response = await fetch(file);
    const data = await response.json();
    console.log(data);
    getSpotlight(data.businesses);
}

const getSpotlight = (businesses) => {
    const spot = document.getElementById("spot-sect");
    const array = ["spot1", "spot2", "spot3"]
    
    
    array.forEach((spot) => {
        const rand = getRandomInt(9)
        let doc = document.getElementById(spot)

        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let url = document.createElement("a");
        let level = document.createElement("h3");
        
        img.setAttribute("src", businesses[rand].webPic);
        img.setAttribute("alt", businesses[rand].name);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "170");
        img.setAttribute("height", "160");

        div.setAttribute("class", "spotStyle");

        h2.textContent = businesses[rand].name;

        level.textContent = `Member Level: ${businesses[rand].memberLvl}`;

        url.innerText = `Go to Web`;
        url.setAttribute("href", businesses[rand].url);

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(level);
        div.appendChild(url);

        doc.append(div);
    });
    
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

getBizData();