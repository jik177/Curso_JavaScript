/* 
            -----Tipos de variables-----

    introduccion: Son 4 conceptos que definen a 
    la variable:
        1º) Declaracion.
        2º) Tipo de variable:
            a) Strin: gcadena de caracteres, seran el conjunto 
            de palabras que esntiende y percibe el usuario.
            b) Number: cualquier numero real asociado a un 
            algoritmo.
            c) Boolean: Define la filosofia del lenguaje binario,
            es decir, define esta variable con la duelidad:
             si/no, true/false, verdadero/Falso.  
        3º) Valor.
        4º) Concepto del valor (=).
    En ocasiones el tipo y el valor se definiran mutuamente.
*/


//1º)

var texto;
var numero;
var buleana;
var igualdad;

//2º) y 3º)
texto = 'Cadena de texto o String, es decir, cadena de caracteres';
numero = 10;
/* Reflexion de dejar la varible vacio, a la espera de un valor 

var texto = ''
var numero = 0
*/

buleana = true;

igualdad == 5;

/* trabajamos la directiva de impresion, para poder trasladar mensajes o 
impresiones al usuario 
Sintaxis:
    document.write(parametros);
*/
document.write('<h3>variable String: ' + texto + '</h3><br>');
document.write('<h3>variable Number: ' + numero + '</h3><br>');
document.write('<h3>variable Boolean: ' + buleana + '</h3><br>');


/* 
        -----Caracteres de escape-----
    Sintaxis               Descripcion:
        \n           ->    salto de linea 
        \t           ->    tabulacion
        \simbolo     ->    \ (cuando quiero poner comillas)
*/

console.log('\t',texto+ '\n' +numero+'\n' +buleana);