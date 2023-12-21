/* Mostrar nuestro array */

var provincias = ['.....', 'Valencia', 'Madrid', 'Sevilla', 'Málaga'];

/* ahora necesitamos guardar todas las provincias que hay 
en una variable para ello usamos el el 'for' */

for (var p = 0; p < provincias.length; p++) {
    var provinciasOpcion = new Option(provincias[p]);
    document.getElementById('mostrandoProvoncias').options[p] = provinciasOpcion

}
/* 
    Oncharge, actua en los elementos de interacccion donde hay una conexion de interface 
    con el usisario, es decir, lo encontraremos en los:
        - Los input
        - select
        - textaera
        - checkend
    En cualquiera de lo casos que se percibe una alerta de los elementos.
*/
function Selection() {
    document.getElementById('mostrandoProvoncias').options[document.getElementById('mostrandoProvoncias').selectedIndex].text = provinciasOpcion;
    /* '.selectIndex' es pla propiedad de seleccion de un elemento o elementos de html llamandolo com objeto */
}