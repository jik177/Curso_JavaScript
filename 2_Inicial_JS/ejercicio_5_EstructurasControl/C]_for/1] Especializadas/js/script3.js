/* 
    Atecedentes: 
        La llegada de HTML5, al apoyarse en nuevas librerias, hace que se asocie a Js

        - Resolvia de manera mas eficaz determinadas acciones de los elementos.

        - Introduce una libreria para poder seleccionar los elementos de html, al 
        igual que en CSS3, surgian los selectores.

        - Alimentando con estructuras tales como:
            I) querySelector:
                    Una Seleccion parecida al 'getElementById', con una ventaja, que
                    apunta no solo a un lugar concreto, sino a varios elementos, de
                    estilos, 'ClassName'.
            II) querySelectorAll:
                    Una seleccion parecida al 'getElementById', con una ventaha que 
                    apunta no solo a un lugar conocreto, sino a varios elementos funcionales.
*/
/*
 con este metodo consigo guardar en la "var botones" un array de los botones 
y sus eventos asociados
*/
var botones = document.querySelectorAll('button');
/* trabajando la estructura de control de For of, puedo con este array de evento 
guardarlos en una variable de objetos */
for (x of botones) {
    /* 
        Aprobechando el "x" quiero el recorrido obtenido y me saque una accion concreta, click
        para ello utilizaremos el metodo 'addEventListener()' que definimos a continuacion:
            Sintaxis:
                target.addEventListener('tipo evento', funcion a lanzar(), boolean);
            
            el  boolean sino que se pone, se entiende como true
    */

    x.addEventListener('click', function () {
        document.querySelector('.mensaje').innerHTML= 'has seeccionado' 
        /* this. sirve para  */
        + this.innerHTML;
    })
}