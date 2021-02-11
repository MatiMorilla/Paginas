document.addEventListener("DOMContentLoaded", ()=>{
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 3,
        padding: 5,
        numVisiblw: 3,
        indicators: true
    })
});