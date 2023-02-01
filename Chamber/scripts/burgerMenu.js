function burgerMenu() {
    document.getElementsByClassName("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hambergerBtn");
x.onclick = burgerMenu;