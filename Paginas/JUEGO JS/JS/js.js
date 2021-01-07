var arregloEmojis = ["😀", "😬", "🤔", "😌", "😍"];
var arregloX2 = arregloEmojis.concat(arregloEmojis);

function reparteTarjetas(){
    var mesa = document.querySelector("#mesa");
    mesa.innerHTML = " ";

    arregloX2.forEach(function(elemento){
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML ="<div class='tarjetas'>" +
                            "<div class='contenido__tarjetas'>" +
                            elemento +
                            "</div>"
                            "</div>"

        mesa.appendChild(tarjeta);
    })
}


reparteTarjetas();