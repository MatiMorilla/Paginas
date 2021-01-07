function barajarCartas(){
    var barajada;
    
    barajada = total.sort(function(){
        return 0.5 - Math.random();
    })

    return barajada;
}

function repartirCartas(){
    var mesa = document.querySelector("#mesa");
    var masoBarajado = barajarCartas();
    mesa.innerHTML = " ";

    masoBarajado.forEach(function(elemento){
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML ="<div class='tarjeta' data-valor= " + elemento + ">" +
        "<div class='tarjeta__contenido'>" +
        elemento +
        "</div>" +
        "</div>";

        mesa.appendChild(tarjeta);
    })

    /*contadorAciertos = document.createElement("div");
    cantidadAciertos.forEach(function(elemento){
        contadorAciertos.innerHTML = "<div class='contador'>" +
        elemento + 
        "</div";
    })*/
}

