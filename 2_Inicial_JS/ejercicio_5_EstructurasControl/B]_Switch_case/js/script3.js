function aplicarDto() {
    /* recogemos la variable */
    var option = document.getElementById('opcion').value;

    /* variable donde soltamos el resultado */
    var resultado = document.getElementById('resultado');

    /*estructura de analisis de la variable que entra  */
    switch (option) {
        case 'platinum':
            resultado.innerHTML =
                'ha ganado un incremento del 25% en acienda este año.';
            break;
        case 'deluxe':
            resultado.innerHTML =
                'un descueto del 25% en su proxima compra,';
            break;
        case 'golden':
            resultado.innerHTML =
                'muestre este codigo en la caja y recibira su taza regalo.';
            break;
        default:
            resultado.innerHTML = 'Su codigo no esta premiado.'
            break;
    }
}