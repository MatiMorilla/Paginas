const form = document.querySelector(".form");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const button = document.querySelector(".btn");


button.addEventListener("click", (e) => {
    e.preventDefault();
    let alerta = document.createElement("span");

    if(nombre.value.length <= 2)
    {
        alerta.innerHTML += `¡Debes completar el nombre!`
        alerta.classList.add("alert");
        form.insertAdjacentElement("afterbegin", alerta);
        nombre.style.border = "2px solid #f00";
    }

    if(edad.value.length <= 0)
    {
        alerta.innerHTML += `<br>¡Debes completar la edad!`
        alerta.classList.add("alert");
        form.insertAdjacentElement("afterbegin", alerta);
        edad.style.border = "2px solid #f00";
    }
})