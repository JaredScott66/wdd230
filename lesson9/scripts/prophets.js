const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
   // console.table(data.prophets);
   displayProphets(data.prophets);  
  }

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let dateBirth = document.createElement("p");
        let dateDeath = document.createElement("p");
        let birthP = document.createElement("p");
        let children = document.createElement("p");

        h2.textContent = `${prophet.name} ${prophet.lastname}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} _________`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        dateBirth.innerText = `Born, ${prophet.birthdate}`;
        dateBirth.setAttribute("class", "info");

        dateDeath.innerText = `Died, ${prophet.death}`;
        dateDeath.setAttribute("class", "info");

        birthP.innerText = `Birthplace, ${prophet.birthplace}`;
        birthP.setAttribute("class", "info");

        children.innerText = `Children, ${prophet.numofchildren}`;
        children.setAttribute("class", "info");

        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(dateBirth);
        card.appendChild(dateDeath);
        card.appendChild(birthP);
        card.appendChild(children);

        cards.appendChild(card);
    });
}

  getProphetData();