const url = "https://swapi.dev/api/people/1/";
var outputElement = document.querySelector("#data");



async function factGrap(url) {
    const response = await fetch(url);
    const facts = await response.json();
    outputElement.innerHTML = facts.name;

    console.log = facts;
}

console.log("Working");


factGrap(url);
