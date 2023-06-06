const visitsDisplay = document.querySelector("#visits")

let numVisits = Number(window.localStorage.getItem("visits-ls"));

visitsDisplay.textContent = `Visits: ${numVisits}`;
numVisits ++;

localStorage.setItem("visits-ls", numVisits);

