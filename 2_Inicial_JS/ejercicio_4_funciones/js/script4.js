/* 
            Recogida de la variable II (control mas directo)
    a) Se realizara desde la propiedad .value, es decir,vamos a acceder al valor
    de la variable que en ese momento es insertada en el input.
    b) Mostaremos el lugar donde apunta dicha variable con la propiedad 
        .getElementById
    Sintaxis: Combinacion de ambas propiedades
        document.getElementById('agujero donde apunta la variable').value

    -OS RECUERDO QUE LAVARIABLE A RECOGER SIEMPRE ES DE TIPO STRING-
*/

function entrar() {
    //1º definimos variables
    var elNombre;
    var elApellido;
    var elEmail;

    //2º recoger la variable apuntando a su lugar

    elNombre = document.getElementById('nombre').value
    elApellido = document.getElementById('apellidos').value
    elEmail = document.getElementById('email').value

    //3º mostrar las variables
    document.getElementById('resultado').innerHTML =
        'AUTORIZACION DE ACCESO: ' + elNombre + ' ' +
        elApellido + ' con el email: ' + elEmail + '.';
}