const hamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".nav-menu");
  

hamburguer.addEventListener("click", () => {
   hamburguer.classList.toggle("active");
   navMenu.classList.toggle("active");
   
})


-document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener("load", function() {
    this.document.querySelector(".logo-header").classList.add("loaded");
    this.document.querySelector(".bnburguer").classList.add("loaded");
    this.document.querySelector(".top-pedido").classList.add("loaded");
})