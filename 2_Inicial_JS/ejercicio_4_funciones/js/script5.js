//1º declaramos las variables.

var cantidad = 0;
var incremento = 0;

// A] buscamos el  incremento con variables funcionales 
function incrementarClick() {
    incremento = (++cantidad);

    document.getElementById('resultado').innerHTML = cantidad;
}

function resest() {
    cantidad = 0;

    document.getElementById('resultado').innerHTML = cantidad;
}

// B] buscamos el  incremento con variables recurentes

function incrementarClickV2() {

    sumarclick(++cantidad);
}

function sumarclick(cantidad) {
    document.getElementById('resulta2').innerHTML = (cantidad);
}

function resestV2() {
    cantidad = 0;
    sumarclick(cantidad)
}