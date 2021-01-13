const navigation = document.querySelector(".navigation");
const nav_menu = document.querySelector(".nav-menu");
const li_menu = document.querySelectorAll(".li");

addEventListener('scroll', function(){
    let scroll = window.scrollY;
    
    if(scroll > 180)
    {
        navigation.classList.add("fixed");
    }
    else
    {
        navigation.classList.remove("fixed");
    }
})

nav_menu.addEventListener("click", ()=>{
    document.querySelector(".menu").classList.toggle("aparecer");
})


li_menu.forEach((e)=>{
    e.addEventListener("click", ()=>{
        document.querySelector(".menu").classList.remove("aparecer");
    })
})

window.addEventListener("resize", ()=>{
    let screenW = window.innerWidth;  
    if(screenW <= 675) 
    {
        document.querySelector(".about-btn").classList.remove("card");
        document.querySelector(".about-btn").classList.add("border-btn");
    }
    else{
        document.querySelector(".about-btn").classList.add("card");
        document.querySelector(".about-btn").classList.remove("border-btn");
    }
})