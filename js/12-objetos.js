/* 

Objetos

Son colecciones de propiedades. Una propiedad es una asociación entre nombre (clave o key) y un valor (value).

Los valores puede ser de distintos tipos de números, cadenas de texto, boleanos, arreglos, funciones...

Sintaxis:

nombreObjeto {
    // Propiedades
    clave1: valor,
    clave2: valor,
    clave3: valor
    }
    
*/

const persona = {
    nombre: "Julio",
    apellido: "Quijano",
    edad: 23,
    esInvitado: true,
    artistasFavoritos: ["Twenty One Pilots", "royal blood", "eminem"],

    saludar: function() {
        console.log("Hola mi nombre es " +nombre)
    }
}



Saludar :function(){
    console.log (`hola mi nombre es ` + this.nombre + "y me gusta" + this.artistasFavoritos[0])
}

console.log(persona)

/* 

    Acceder a las propiedades de un objeto utilizamos la notación de puntos o corchetes.

    objeto.clave 👉🏼 notación de punto
    objeto[clave] 👉🏼 notación de corchetes

*/

console.log(persona.nombre);
console.log(persona['apellido']);

console.log("Hola mi nombre es " +persona.nombre, "" +persona.apellido, "y tengo " +persona.edad, "años!"); 

console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años! 🤟🏼`);

if(persona.esInvitado == true) {
    console.log("Puede pasar y disfrutar del Halloween de Enfoco 😊");
} else {
    console.log("No puedes pasar, regresate a tu casita 😈")
}

console.log(persona.artistasFavoritos[0]);

console.log(`hola soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años! espero conocer a ${persona.artistasFavoritos[2]} en la fiesta`);


/*

Metodos de los objetos 

objetos.metodo()

*/



console.log(persona.saludar() );

persona.saludar();
