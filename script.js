const hamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelector(".nav-item")

hamburguer.addEventListener("click", () => {
   hamburguer.classList.toggle("active");
   navMenu.classList.toggle("active");
   navItem.classList.toggle("active"); 
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("clock", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    navItem.classList.toggle("active");
}))