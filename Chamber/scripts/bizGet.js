
const file = "data/data.json";

async function getBizData(){
    const response = await fetch(file);
    const data = await response.json();
    console.log(data);

    displayBusinesses(data.businesses);
    getSpotData(data.businesses)
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.cardsG");
    

    businesses.forEach((business) => {
        let card = document.createElement("section");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let img = document.createElement("img");
        let name = document.createElement("h2")
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let level = document.createElement("p");

        img.setAttribute("src", business.webPic);
        img.setAttribute("alt", `${business.name} Logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "260");
        img.setAttribute("height", "240");

        card.setAttribute("class", "sectInfo")
        ul.setAttribute("class", "bizInfo");

        name.textContent = business.name;

        address.innerText = `${business.address}`;
        address.setAttribute("class", "bizInfo");

        phone.innerText = `Phone ${business.phone}`;
        phone.setAttribute("class", "bizInfo");

        url.innerText = `Go to Web`;
        url.setAttribute("href", business.url);

        level.innerText = `Member Level: ${business.memberLvl}`;
        level.setAttribute("class", "bizInfo");


        card.appendChild(img);
        card.appendChild(name);
        
        li.appendChild(address);
        li.appendChild(phone);
        li.appendChild(level);
        ul.append(li)

        card.appendChild(ul);
        card.appendChild(url);
        cards.append(card);

    });

    

}

const getSpotData = (businesses) => {
    const spotSect = document.getElementById("spot-sect")
    const rand = getRandomInt(10)

    for (let i = 3; i < businesses[i] ; i--) {
        let card1 = document.createElement("section");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let img1 = document.createElement("img");
        let name1 = document.createElement("h2")
        let address1 = document.createElement("p");
        let phone1 = document.createElement("p");
        let url1 = document.createElement("a");
        let level1 = document.createElement("p");
        
        img1.setAttribute("src", businesses[rand].webPic);
        img1.setAttribute("alt", `${businesses[rand].name} Logo`);
        img1.setAttribute("loading", "lazy");

        name1.textContent = businesses[rand].name;

        address1.innerText = `${businesses[rand].address}`;

        phone1.innerText = `Phone ${businesses[rand].phone}`;

        url1.innerText = `Go to Web`;
        url1.setAttribute("href", businesses[rand].url);

        level.innerText = `Member Level: ${businesses[rand].memberLvl}`;

        card1.appendChild(img1);
        card1.appendChild(name1);
        card1.appendChild(url1);

        spotSect.append(card1);
    };
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}


getBizData();

const buttonL = document.getElementById('listButton');
const buttonG = document.getElementById('gridButton');
const directory = document.querySelector('.cardsG');

buttonL.addEventListener('click', () => {
    directory.classList.replace("cardsG", "cardsL");
});

buttonG.addEventListener('click', () => {
    directory.classList.replace("cardsL", "cardsG");
});