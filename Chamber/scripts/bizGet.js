const file = "data/data.json";

async function getBizData(){
    const response = await fetch(file);
    const data = await response.json();

    displayBusinesses(data.businesses)
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.cards");

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

        url.innerText = `Click to Site`;
        url.setAttribute("href", business.url);

        level.innerText = `Member Level: ${business.memberLvl}`;
        level.setAttribute("class", "bizInfo");


        card.appendChild(img);
        card.appendChild(name);
        
        li.appendChild(address);
        li.appendChild(phone);
        li.appendChild(url);
        li.appendChild(level);
        ul.append(li)

        card.appendChild(ul);
        cards.append(card);
    });
}

getBizData();