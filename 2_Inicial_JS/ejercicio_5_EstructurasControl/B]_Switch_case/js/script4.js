function inicioReloj() {
    //declaracion de variables
    var hoy = new Date();
    //variables secundarias reloj
    var horas = hoy.getHours();
    var min = hoy.getMinutes();
    var seg = hoy.getSeconds();
    /* uso de la funcion perfecta para generar las decenas */
    seg = decenas(seg);
    min = decenas(min);
    horas = decenas(horas);


    //var secindarias calendario
    var Ndia = hoy.getDate();
    var dia = hoy.toLocaleDateString('es-eu', { weekday: 'long' });
    var mes = hoy.getMonth();
    var anyo = hoy.getFullYear();



    document.getElementById('reloj').innerHTML =
        '' + horas + ' : ' + min + ' : ' + seg;

    /* gestion del calendario */
    switch (mes) {
        case 0:
            mes = 'Enero'
            break;
        case 1:
            mes = 'Febrerp'
            break;
        case 2:
            mes = 'Marzo'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Mayo'
            break;
        case 5:
            mes = 'Junio'
            break;
        case 6:
            mes = 'Julio'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Septiembre'
            break;
        case 9:
            mes = 'Obtubre'
            break;
        case 10:
            mes = 'Noviembre'
            break;
        case 11:
            mes = 'Diciembre'
            break;

        default:
            mes = 'error 404'
            break;
    }

    document.getElementById('fecha').innerHTML =
        '' + dia + ', ' + Ndia + ' / ' + mes + ' / ' + anyo + '.';
    /* 
        Ejecuciones de funcion a pertir de un parametro de tiempo definido
        Dos formas de ejecucion:
        a) Ejecucion clasica
            setTimeout{funtionfintionAllamar1(),
                funtionfintionAllamar2()},temporizadas en milisegundos);

        b)  Ejecucion mutada:
             setTimeout(() => {funtionfintionAllamar1(),funtionfintionAllamar2()},timeout);

    */
    setTimeout(function () { inicioReloj() }, 1000);
}

/* ejecucion de una funcion perfecta, sera la ejecucion 
de referencia por donde quiera hacer pasar una variable.

Aparecera un comcepto nuevo, neceario de definir que es el 'return'*/

function decenas(x) {
    if (x < 10) {
        x = '0' + x;

    }
    return (x);
}