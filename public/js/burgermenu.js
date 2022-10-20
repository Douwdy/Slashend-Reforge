// Hamburger menu

function burgerMenu() {
    let menu = document.getElementById("myLinks");
    if (menu.classList.contains("active") === true) {
    menu.classList.remove("active");
    menu.classList.add("inactive");
    } else {
    menu.classList.remove("inactive");
    menu.classList.add("active");
    }
}
