/*
Piedra,papel,tijera

Crear un juego interactivo donde el usuario puede juegar encontra de la computadora

Reglas:

-piedra vence a tijera
-Tijera vence papel
-papel vence a piedra
-si ambos escogen lo mismo es empate

Pasos para implementar:

-Definir las opciones del jugador
-Generar una opcion aleatoria para la computadora
-Comparar estas opciones y determinar el ganador.

Estructuras a utilizar:

-Variables
-Condicionales
-.Generacion de un numero random
-Operadores logicos
-concatenacion de cadenas
-Plantillas literales
-Comentarios

*/


console.log("Estamos conectados y listos para programar")

//1. variables - opciones del jugador
const opcionJugador= prompt("para jugar escribe:piedra, papel o tijera");// piedra, papel o tijera
// 2.opcion de la computadora
const numeroAleatorio= Math.random (); // genera un numero aleatorio entre 0 y 1 

console.log(numeroAleatorio);

let opcionComputadora;
//3. Condicional - asignamos opcion segun el numero aleatorio.
if (numeroAleatorio < 0.33) {
    opcionComputadora= "piedra"
} else if(numeroAleatorio < 0.66) { opcionComputadora="papel"
} else {
    opcionComputadora= "tijera";
}

console.log(opcionComputadora)

//4.Mostrar las elecciones
console.log("Piedra,Papel y Tijera");
console.log("tu eleccion es : " + opcionJugador);
console.log("La compu elegio: " + opcionComputadora);
console.log("-----------------------------------------------------");


let resultado;

if (opcionJugador === opcionComputadora) {
    resultado = `Empate ambos escogieron ${opcionJugador}`;
}
    else if (opcionJugador === "piedra" && opcionComputadora==="tijera")
    {resultado= `🎇Ganaste piedra vence a tijera;`}
    else if (opcionJugador === "papel"&& opcionComputadora === "piedra"){
        resultado=`🎇Ganaste papel vence a piedra;`
    } else if (opcionJugador=== "tijera" && opcionComputadora === "papel"){
        resultado=`🎇Ganaste tijera vence a papel;`
    } else {
        resultado= "Perdiste la compu te gano";
    }

    //6.Mostramos el resultado
    console.log(resultado)