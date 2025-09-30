/* 

Concatenación de cadenas de texto

Es el proceso de unir dos o máscadenas de texto en una sola.
Esto se hace utilizando el operador + o las plantillas literareas
(Template strings) seusan backticks `` alt + 96

*/

let miNombre = "Julio";
let miApellido = "Quijano";

//Usando el opreador +

let miNombreCompleto = miNombre + "  " + miApellido;

console.log(miNombreCompleto); 

let nombreNuevo = `Mi nombre es ${"miNombre"} ${"miApellido"} y tengo ${21} años`;

console.log(nombreNuevo);

let resultado = 5 + 10;

console.log(resultado);

let resultadoDos = "5" + 10;

console.log(resultadoDos);