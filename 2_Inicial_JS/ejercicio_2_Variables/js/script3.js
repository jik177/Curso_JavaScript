/* 
    Las posivilidades de entrar el la interfaz del sistema operativo 
    del propio usuario son muy restrictivas. Pero para algunas aplicaciones 
    pueden ser muy utiles aunque no ofrezcan una vision estatica muy lograda

    document. era una estructuta de partida del script.
    windows. 
    */


//declaracion de variable

var nombre;
var apellido;
var edad

nombre = window.prompt('escribe tu nombre: ');
console.log(nombre);

apellido = window.prompt('escribe tu apellido: ');
console.log(apellido);

edad = window.prompt('escribe tu edad: ');
console.log(edad);

/* 
    aqui el metodo prompt() genera dialogo, asocia a dos botones
    percibimos como absorbe el valor la variable al introducir 
    los datos del usuario.
    ⚠️☣️☢️IMPORTANTE☢️☣️⚠️:
    Todo, TODO ¡¡¡¡TODO!!!! valor que recogemos en el interfaz 
    del usuario siempre vendra definido por el tipo de 
    variables STRING.
 */

document.write('<h3>hola </h3> <p>' + nombre + ' ' + apellido + ' ' 
+ ' con edad de: ' + edad + '<br>' + 'bienvenido a la pagina</p>');