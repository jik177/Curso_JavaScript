/* 
    -----Las funciones: interactividad-----

    Entendidas y por ello edfinidas como una declaracion o expresiones funcionales.
    Presentara una palabra reservada 'function'.
    Sintaxis:

    1.) nombre de la funcion(sera sensible a las grafias, minuscula inicial).
    2.) Lista de parametros que la define, estaran entre parentasis y separados por 
        comas. ej: (parametro1, parametro2, parametro3, ....)
    
    3.) Acotacion de su ambito. definidapor las llaves '{}' dentro de dichas llaves
        seran el ambito de accion de nuestra funcion.
        ej:
            function(){
                el conjunto de directivas a ejecutar
                (puede ser desde directivas hasta otra function)
            }

*/
/* 
    -----Entorno de las variables-----

    El entorno lo define su ambito, es decir, globales o locales
    => Variables glovales:
            + Hasta ahora las variables han sido referenciadas glovalmente.
            + Se puede acceder a su tipo y valor desde cualquier punto del
              script(ventaja).
            + Permanece cargada en la memoria adyacente (desventaja).
            + Uso exclusivo cuando necesitanos acesso transversal.
            + Las variables glovales son las variables eje.
    ejemplo:
*/
var nombre = prompt('Escribe tu nombre: ');
function saludar() {
    swal('hola!, bienbenido: ' + nombre)
}
/* 
    => Variables Locales:
            - Cuando se encuantre dentro del entorno acotado de la funcion.
            - Su acceso queda restringido a la accion de la funcion.
            - Su ejecucion carga a la llamada de la funcion.
            - La variable, al solo ejecutar a la accion de la funcion no se
              aloja en carga de memoria. Carga en la ejecucion y es desalojada
              de la memoria al finalizar la funcion.
            - Uso de propiedad, estara asociada a la arquitactura de la funcion
              concreta en la que se encuentra.
            - Las varaibles son tomadas como complementarias o secundarias.
            - Por defecto, no podemos accder a dichas variables desde ningun
              otro ambito que no sea la de la funcion
    ejemplo:
*/
function despedida() {
    var apellido = 'Doe'
    swal('vuelve pronto: ' + nombre + ' ' + apellido)
}