/*¨

Las clases Js son una forma de definir objetos, sus propiedades y metodos, creando un prototipo del cual se generaran, varios objetos. Heredando todo su comportamiento.

*/

class Persona {
constructor(nombre, edad){
this.nombre = nombre;
this.nombre = edad;
 }


saludar(){
    alert( `Hola soy ${this.nombre} y tengo ${this.edad} años`)
 }
}

const personal = new Persona1(`juanito`, 24);
const personal = new Persona2(`federico`, 23);
const personal = new Persona3(`esteban`, 24);


console.log(`El es ${Persona1.nombre} y tiene ${Persona1.edad}`)
console.log(`El es ${Persona2.nombre} y tiene ${Persona2.edad}`)
console.log(`El es ${persona3.nombre} y tiene ${Persona3.edad}`)

persona1.saludar();
persona1.saludar();
persona1.saludar();