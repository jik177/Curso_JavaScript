// 1º declaracion de variables locales

function cta() {
    var usuario = document.getElementById('user').value;
    /* Importante reduccion de la recogida de la variable,
    es decir, el script va adaptandose y muta a menores caracteres. */
    var password = pw.value;
    document.getElementById('resultado').innerHTML =
        'Acceso permitido ' + usuario + ' con clave: ' + password + '.';
}

function borrar() {
    document.getElementById('resultado').innerHTML = '';
}

function redireccion() {
    /* location.href = 'https://www.warhammer-community.com/'; */
    location.href = '5_variablesFuncionales.html';
}
