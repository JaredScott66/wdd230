function toggleMenu() {
    console.log("help");
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hambergerBtn").classList.toggle("open");
}

const x = document.getElementById("hambergerBtn");
x.onclick = toggleMenu;