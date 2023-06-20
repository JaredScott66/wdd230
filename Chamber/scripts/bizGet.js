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

        url.textContent = "Link to Website";
        name.textContent = business.name;

        img.setAttribute("src", business.webPic);
        img.setAttribute("alt", `${business.name} Logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "340");
        img.setAttribute("height", "440");

        ul.setAttribute("class", "bizInfo");

        address.innerText = `${business.address}`;
        address.setAttribute("class", "bizInfo");

        phone.innerText = `Phone ${business.phone}`;
        phone.setAttribute("class", "bizInfo");

        url.setAttribute("href", business.url);


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(ul);
        ul.appendChild(li)
        li.appendChild(address);
        li.appendChild(phone);
        li.appendChild(url);

        cards.append(card);
    });
}

getBizData();