/* Nº divisibles entre si */

//1º recofemos todos los numeros

function divisibles() {

    for (var numero = 0; numero <= 20; numero++) {
        document.write('Probando Nº ' + numero + ': <br>');
        /* 2º evaluamos cada numero*/

        /* 2.1) comparo el nº por todos aquellos que pueda se divisible */
        for (var divisible = 1; divisible <= numero; divisible++) {
            /* 2.2) buscamos aquellos que su resto es 0 */
            if (numero % divisible == 0) {

                document.write(divisible + ', ')
            }
        }
        document.write('<br>' + '_______________________' + '<br>');

    }
}