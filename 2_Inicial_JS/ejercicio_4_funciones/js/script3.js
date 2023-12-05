/* 
        -----Metodo: .getElementById()-----
    1) Nos ayuda a devolver la estructura a un elemento que contenga eñ atributo id="";
    2) El valor que especifica, traslada como vehiculo de referencia a la estructura 
        definida en el script.
    3) Sintaxis:
            1º)dirigirnos al lugar donde se ejecuta el metodo
          Metodo            
            ↓       2º Metodo()
            ↓           ↓
            ↓           ↓
        document.getElemetById('3º nombre del id, que hace referencia al lugar del elemeto de html') 
*/

/* 
Introduccion :
JavaScript, tendra unas funciones glovales, cargadas en su metalenguaje, que no dejan de ser 
una libreria de funciones a nuestra disposicion.
Pero que accedemos a ellas como objetos.
*/
/* 
    A] objeto match() 
nos aporta, de forma inmediata de acceder a las funcionalidades algoritmicas simple, compleja
o derivadas.
*/

function matematicas() {
    var numero = 8

    document.getElementById('resultado').innerHTML =
        '<h3>Objeto Match() y sus aplicaciones:</h3>' +
        'logaritmo:' + Math.log(numero) + '<br>' +
        'expomencial: ' + Math.exp(numero) + '<br>' +
        'raiz cuadrada: ' + Math.sqrt(numero) + '<br>' +
        'Potencia: ' + Math.pow(numero, 2) + '<br>' +
        'Valor absoluto: ' + Math.abs(-1000) + '<br>' +
        'redondeo a la baja: ' + Math.floor(6.3459) + '<br>' +
        'redondeo a la alta: ' + Math.ceil(6.3459) + '<br>' +
        'redondeo medio: ' + Math.round(6.3459) + '<br>' +
        'ramdon o semilla nº:' + Math.random() + '<br>' +
        'ramdon de intervalo: ' + Math.random() * 10 + '<br>' +
        'valor maximo: ' + Math.max() + '<br>' +
        'valor minimo: ' + Math.min() + '<br>' +
        'coseno de ₶: ' + Math.cos(Math.PI) + '<br>' +
        'seno de ₶: ' + Math.sin(Math.PI) + '<br>' +
        'tangente de ₶: ' + Math.tan(Math.PI) + '<br>' +
        /* 
        como paso de numero a String, hasta ahora, teniamos claro, que los 
        datos que vienen desde la interfaz del usuario era string y 
        podiamos con el metodo 'Parse' pasarlo a numero , como pasaremos de 
        numero a string 
        */
        'cambio de tipo a String: ' + numero.toString();
}
/* 
B] objeto 
*/
function textos() {

}
/* 
C] objeto
*/
function textos() {

}