var hoy = new Date();

function inicioReloj() {
    //declaracion de variables

    //variables secundarias reloj
    var horas = hoy.getHours();
    var min = hoy.getMinutes();
    var seg = hoy.getSeconds();
    //var secindarias calendario
    var Ndia = hoy.getDate();
    var dia = hoy.toLocaleDateString('es-eu',{weekday:'long'});
    var mes = hoy.getMonth();
    var anyo = hoy.getFullYear();



    document.getElementById('reloj').innerHTML =
        '' + horas + ' : ' + min + ' : ' + seg + '.';

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

}
