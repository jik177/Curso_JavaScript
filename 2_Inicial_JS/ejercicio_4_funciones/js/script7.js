/* declaramos las variables */

contador = 0;

function incrementarClick() {
    sumarclik(++contador);
    venta();
    /* document.getElementById('resultado').innerHTML = ((contador) * 103.80) + ' €'; */
}

function sumarclik() {
    document.getElementById('nºclick').innerHTML = (contador);
}

function venta() {
    var total = 0;

    total = ((contador) * 103.80);
    document.getElementById('resultado').innerHTML =
        'el coste total de su pedido es: ' + total + ' €.';
}

function borrar() {
    contador = 0;
    document.getElementById('nºclick').innerHTML = (contador);
    document.getElementById('resultado').innerHTML =
        'el coste total de su pedido es: ' + contador + ' €.';
}

/* redifusion */

function redifusion() {
    window.open('https://www.warhammer.com/es-ES/home', '_blank',);
    window.open('https://www.warhammer-community.com/', '_self');
    window.open('https://warhammerplus.com/', '_blank');
}