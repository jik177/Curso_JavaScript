/* 1º condiciones de variables y su definicion.
    necesitamos los tramso del imc:
        a- <= 18 imc Peso por debajo del reomendado.
        b- <= 24.9 imc peso normal.
        c- <= 29.9 imc sobrepeso.
        d- <= 34.9 imc obesidad I.
        e- <= 39.9 imc obesidad II.
        f- <= 40 omc obesidad morvida.
*/

function calcularImc() {
    //2º untroducimos las variables
    var peso = parseFloat(dataPeso.value);
    var altura = parseFloat(dataAltura.value);

    //3º declaramos las variables secundarias
    var imc = 0;
    //4º declaramos la variable respuesta
    var respuesta = document.getElementById("resultado");
    // 5º Calculo matematico

    imc = peso / Math.pow(altura, 2);

    if (imc <= 18) {
        respuesta.innerHTML = 'tu imc esta por debajo de la media';
    } else if (imc <= 24.9) {
        respuesta.innerHTML = 'tu imc es correcto';
    } else if (imc <= 29.9) {
        respuesta.innerHTML = 'tu imc esta por encima del recomendado';
    } else if (imc <= 34.9) {
        respuesta.innerHTML = 'obsidad leve';
    } else if (imc <= 39.9) {
        respuesta.innerHTML = 'obesidad';
    } else {
        respuesta.innerHTML = 'obesidad morbida';
    }
}