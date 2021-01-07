var menu = document.querySelector(".menu");
var boton = document.querySelector(".icono-menu");


boton.addEventListener("click", function()
 {
    menu.classList.toggle("aparecer");
    boton.classList.toggle("rotar");
 });



