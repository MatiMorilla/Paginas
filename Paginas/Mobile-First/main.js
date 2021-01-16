const nav_btn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
let icon_menu = document.querySelector(".fa-bars");
const li_elements = document.querySelectorAll(".li");


nav_btn.addEventListener("click", ()=>{
    menu.classList.toggle("aparecer");
    icon_menu.classList.toggle("fa-times");
})

li_elements.forEach((e)=>{
    e.addEventListener("click", ()=>{
        menu.classList.remove("aparecer");
        icon_menu.classList.remove("fa-times");
    })
})