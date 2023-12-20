//Atencion!! recoger lavariable con metodos no directos, necesita:


function algoritmo() {
    var InputBase = parseInt(base.value);
    console.log(base)
    /* variable secindaria */
    var contenido = '';

    for (var i = 1; i <= 10; i++) {
        /* gestion de valores del 1 al 10 */
        contenido += 'Base: ' + InputBase + ' ^ ' + 'Poentencia' + i + ' = ' + (Math.pow(InputBase, i)) + '<br>';
        console.log(contenido)
    }
    document.getElementById('resultado').innerHTML = contenido;
}