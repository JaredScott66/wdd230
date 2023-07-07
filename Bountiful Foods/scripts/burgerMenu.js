function toggleMenu() {
    console.log("Hmm, crunchy code");
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hambergerBtn").classList.toggle("open");
}

const x = document.getElementById("hambergerBtn");
x.onclick = toggleMenu;