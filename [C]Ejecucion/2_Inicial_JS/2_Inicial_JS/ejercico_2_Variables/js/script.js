/* 
            -----Variables-----

    1º) instancias de variables (crear las variables)
        Sintaxis:
    var(palabra reservada) nombre_variable(minusculas) =(asignacion)_ asociacion de un'valor'; 
    
    - En el momento que definimos una palabra reservada en el script 'a lo que sea' 
    queda cargado en memoria.

        1.1º) Explicita:
                a) generamos la variable:
                    var laVida;
                    laVida = 'Antonio'

        1.2º) Implicita:
                a) generamos la variable:
                    var laVida = 'Antonio'
*/

var nombre = 'Jik 177';

swal({
    title: 'tecnico: ' + nombre,
    text: 'Centro Formacion Calderon',
    timer: 4000,    
    button: false,
    icon: 'info',
});