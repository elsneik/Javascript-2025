/* 


Variables

Las variables son contenedores que almacenan datos, En JS pueden declarar variables utilizando palabras clave "var", "let" o "const"

1.declaracion de variables

Var: es la forma mas antigua de declarar variables. Tiene un alcance global o funcion y puede ser declarada y actualizada

Let: introducida en es6, tiene un alcance de bloque y puede ser actualizada pero no redeclararse dentro del mismo alcance.

const: Tambien introducida en ES6, tiene un alcance de bloque y no puede ser ni redeclarada ni actualizada, se utiliza para valores que no deben cambiar.

*/


/* Declaracion con VAR */

var nombre = "julio";
console.log (nombre)//julio

nombre = "puchungis";

/* Declaracion con let */

let edad = 22;
console.log (edad)

edad =40;
console.log (edad)//actualizacion


/* Declaracion con const */

const PI = 3.1416;
console.log (PI);

PI= 4.6401
//ERROR de tipo . No se puede actualizar una constante.