//declaracion de variables


var estiloDilexia = false;
/* para este estilo buscamos redondear, bordear las estructuras*/

var estiloDaltonico = false;
/* para este estilo trabajaremos los colores, es decir,
 colores invertimos del un solido a un gris */

var estiloEpilepsia = false;
/* podemos trabajar difuminando una sombra */

function dilexia() {

    if (estiloDilexia == false) {
        /* creamos otra propiedad muy util, que 
        ayuda a trabajar no dentro del html,
        sino desde css.*/
        document.getElementById('resultado').style.border = '3px solid black';
        /* y creamos el valor para provocar el cambio. */
        estiloDilexia = true;
    } else {
        document.getElementById('resultado').style.border = '';
        estiloDilexia = false;
    }
}
function daltonico() {
    if (estiloDaltonico == false) {
        document.getElementById('resultado').style.backgroundColor = 'grey';
        document.getElementById('resultado').style.color = 'black';
        estiloDaltonico = true;
    } else {
        document.getElementById('resultado').style.backgroundColor = '#2196f3';
        document.getElementById('resultado').style.color = ' white';
        estiloDaltonico = false;
    }
}
function epilepsia() {
    if (estiloEpilepsia == false) {
        /* no utilizamos la propiedad 'style' sino .className, 
        que esta llamando a un style */
        document.getElementById('resultado').className='sombra';
        estiloEpilepsia = true;
    } else {
        document.getElementById('resultado').className='';
        estiloEpilepsia = false;
    }
}