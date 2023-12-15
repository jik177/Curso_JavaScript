/* 
    Analisis del calculo

    credito de interes directo
    Condiciones:
        Tramos de capital y de interes.
         - Hasta 24 meses tipo de interes de 6%
         - Hasta 60 meses tipo de interes del 9%
         - A partir de 60 meses tipo de interes del 12%

         credito*redito*tiempo
*/

function credito() {
    //1º recogemos las variables.
    var capital = parseFloat(prompt('Introduce tu capital de credito:'));
    var tiempo = parseInt(prompt('a lo largo de cuantos meses va ha pagar:'));
    //2ºvariable secundarias.
    var interes = 0;
    var cuota = 0;
    var pagoInteres = 0;
    //3º conjurar las variables con las condiciones planteadas, para ello
    if (tiempo <= 24) {
        interes = 1.06;
    } else if (tiempo <= 60) {
        interes = 1.09;
    } else {
        interes = 1.12;
    }
    pagoInteres = (capital * interes * (tiempo / 12));
    cuota = ((capital + pagoInteres) / tiempo);

    //4º mostrar el resultado de las variables
    document.getElementById('resultado').innerHTML =
        'Credito solicitado: ' + (capital) + ' € <br>' +
        'Tipo de interes: ' + parseInt((interes - 1) * 100) + ' % <br>' +
        'Tiempo a pagar: ' + (tiempo) + ' meses <br>' +
        'Total de interes a pagar: ' + (pagoInteres.toFixed(2)) + ' € <br>';

    document.getElementById('resulta2').innerHTML =
        'Total de cuota a pagar al mes: ' + (cuota.toFixed(2)) + ' € <br>';
    /* utilizamos la propuedad de "fixed()" para ajustar decimales de 
    las operaciones algebraicas.*/
}

function descargar() {
 window.print()   
}