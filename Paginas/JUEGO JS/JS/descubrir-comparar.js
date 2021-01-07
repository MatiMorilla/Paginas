function descubrir(){
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if(totalDescubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");;

    if(descubiertas.length < 2){
        return;
    }

    compararTarjetas(descubiertas);
}

function compararTarjetas(tarjetas){
    if(tarjetas[0].dataset.valor === tarjetas[1].dataset.valor){
        acertada(tarjetas);
    }
    else
    {
        errada(tarjetas);
    }
}