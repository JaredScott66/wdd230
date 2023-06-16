const url = "https://swapi.dev/api/people/1/";
var outputElement = document.querySelector("#data");

function addSite() {
    outputElement.innerHTML = `${facts}`;
    console.log = data;
    
}

async function factGrap(url) {
    const response = await fetch(url);
    const facts = await response.json();
    outputElement = facts;
    addSite();
    console.log = facts;
}

console.log("Working");


factGrap(url);
