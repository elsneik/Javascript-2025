/* 

    Tipos de Datos

    Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación.

    En JS, esxisten varios tipos que se pueden agrupar en dos categorias principales: primitivos y complejos u objetos.

    Cada tipo de dato tiene sus propias caracteristicas y usos especificos en la programación.

    1. Primitivos

    Datos básicos que no se consideran "objetos" y no tienen "metadatos".

    👉🏼 Number o Número

    Representan valores numéricos ya sean enteros o decimales (punto flotante).

    👉🏼 String o Cadenas de Caracteres

    Representan texto. El texto se coloca entre comillas dobles o comillas simples: "text" o 'text'. Se valen las dos, pero hay que ser consistentes.

    👉🏼 Booleans o Boleanos

    Representan un valor lógico que puede ser '"true" o "false". 

    👉🏼 Undefined o Indefinido

    Es el valor que se asigna a una variable que ha sido declarada pero no inicializada.

    👉🏼 Null o nulo

    Representa la ausencia intencional de cualquier valor u objeto. Es un valor indica que una variable no tienen ningún valor asignado.

*/

/* 
Numbers
 */

let miNumero = 5;
let miNumeroDecimal = 7.7;

console.log (miNumero);
console.log (miNumeroDecimal)

/* strings */

let miNombre = "Julio"
let miApellido = "Quijano"

console.log(miNombre)
console.log(miApellido)

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log (esEstudiante)
console.log (tieneTrabajo)

/*  Undefined */

let aprobareDesarrolloAps;// Inicializar una variable

console.log (aprobareDesarrolloAps)

/* Null */

let meQuiere = null;
console.log (meQuiere)

/* 

2: Complejos o de Objetos

  array o arreglos 
     Es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes y separados por comas 

  object
     Es un conjunto de multiples datos en pares  "clave" - "valor"
     Se escriben entre {} o , 
  funciones
     Es un tipo de dato que puede ser "invocado". se declaran con la palabra reservada "function" y el codigo que se ejecuta va entre {"codigo"}


*/

/* array */

let misSeries =[ "the office" , "breaking bad" , "the boys"];

let misNumeros = [5,10,7,11,420];

let tutifruti = ["puchunguito",183,true];

console.log (misSeries[2]);
console.log(misNumeros[1]);
console.log (tutifruti[3])

/* Object */

let perro = {
nombre: "firulais",
edad: 5,
ladra: true,
muerde:false,
}

console.log (perro.nombre)
console.log (perro.edad)
console.log (perro.muerde)
console.log (perro.ladra)


/*Function */

function saludar () {
    //codigo a ejecutar
    console.log("hola mama, estoy aprendiendo javascript");
}

//Llamamos a la funcion
Saludar ();
