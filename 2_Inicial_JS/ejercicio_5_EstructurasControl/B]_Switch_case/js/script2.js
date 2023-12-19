function menuDia() {
    var fecha = new Date();
    var dia = fecha.getDay();
    //variable reesidual o de apoyo
    var menu = '';
    var plato1 = '';
    var postre = '';
    //estructura de control
    switch (dia) {
        case 0:
            menu = 'Menu del Domingo: Desayuno';
            plato1 = 'docena de churros';
            postre = 'cafe o chocolate';
            break;
        case 1:
            menu = 'Menu del Lunes.';
            plato1 = 'Cerrado por descanso';
            break;
        case 2:
            menu = 'Menu del Martes.';
            plato1 = 'Salmorejo cordoves';
            postre = 'cafe o postre casero';
            break;
        case 3:
            menu = 'Menu del Miercoles.';
            plato1 = 'Cachopo asturiano';
            postre = 'cafe o postre casero';
            break;
        case 4:
            menu = 'Menu del Jueves.';
            plato1 = 'Paella valenciana';
            postre = 'cafe o postre casero';
            break;
        case 5:
            menu = 'Menu del viernes.';
            plato1 = 'Pulpo a la gallega';
            postre = 'cafe o postre casero';
            break;
        case 6:
            menu = 'Menu del Sabado: Tapas.';
            plato1 = 'surtio Iberecio';
            postre = ' 2 cervezas';
            break;
        default:
            menu = 'error de conexion.';
            break;
    }
    /* Mostramos la variable */
    document.getElementById('resultado').innerHTML =
        menu + '<br> -' + plato1 + '<br> -' + postre;
}