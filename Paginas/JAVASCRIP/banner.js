const slider = document.getElementById("slider");
let slider_items = document.querySelectorAll(".slider-item"); 
let slider_item_last = slider_items[slider_items.length -1];

const btn_left = document.getElementById("btn-left");
const btn_right = document.getElementById("btn-right");

slider.insertAdjacentElement("afterbegin", slider_item_last);

const next = () => {
    let slider_item_first = document.querySelectorAll(".slider-item")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", slider_item_first);
        slider.style.marginLeft = "-100%";
    }, 500);
}

const prev = () => {
    let slider_items = document.querySelectorAll(".slider-item"); 
    let slider_item_last = slider_items[slider_items.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", slider_item_last);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btn_right.addEventListener("click", () => {
    prev();
})

btn_left.addEventListener("click", () => {
    next();
})

setInterval(() => {
    next();
}, 4000);