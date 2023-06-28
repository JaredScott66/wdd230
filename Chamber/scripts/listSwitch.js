const button = document.querySelector("#listButton");
const listSect = document.querySelector(".discPhotos");
const listDiv = document.querySelector(".gridView");


function toggleMenu() {
    console.log("Hmm, crunchy code");
    document.getElementById("discover").classList.toggle("listView");
    document.getElementById("listButton").classList.toggle("open");
}

const x = document.getElementById("hambergerBtn");
x.onclick = toggleMenu;