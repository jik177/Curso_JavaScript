var numero1 = parseFloat(prompt("Introduce el primer numero: "));

var numero2 = parseFloat(prompt("Introduce el segundo numero: "));


function sumar(){
    var resultado = numero1 + numero2;
    swal('la suma de ' + numero1 + ' + ' + numero2 + ' = ' + resultado);
};

function restar(){
    swal('la suma de ' + numero1 + ' - ' + numero2 + ' = ' + (numero1-numero2));
};

function multiplicar(){
    var resultado = numero1 * numero2;
    swal('la multiplicacion de ' + numero1 + ' * ' + numero2 + ' = ' + resultado);
};

function dividir(){
    swal('la division de ' + numero1 + ' / ' + numero2 + ' = ' + (numero1/numero2));
};