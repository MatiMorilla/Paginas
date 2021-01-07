function acertada(tarjetas){
    tarjetas.forEach(function(elemento){
        elemento.classList.add("acertada");
    })
}

function errada(tarjetas){
    tarjetas.forEach(function(elemento){
        elemento.classList.add("error");
    })

    setTimeout(function(){
        tarjetas.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
        })
    }, 1500);
}
