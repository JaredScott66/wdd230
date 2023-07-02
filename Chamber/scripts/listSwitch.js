const button = document.getElementById("#listButton");
const directory = document.querySelector(".cards");


function toggleMenu() {
    console.log("Hmm, crunchy code");
    directory.classList.replace(".cards", "cardsList");
    document.getElementById("listButton").classList.toggle("open");
}


button.addEventListener("click", toggleMenu())