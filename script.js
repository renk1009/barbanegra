const hamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".nav-menu");
let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}));

window.addEventListener("load", function () {
    this.document.querySelector(".logo-header").classList.add("loaded");
    this.document.querySelector(".bnburguer").classList.add("loaded");
    this.document.querySelector(".top-pedido").classList.add("loaded");
});
