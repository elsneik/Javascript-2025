/* 

Funciones

Las funciones son bloques de codigo reutilizables que realizan una tarea especifica.

1.- Funcion declarada 

Es la forma mas comun de definir funciones. Se puede llamar a la funcion antes de su definicion antes de su definicio debido al hoisting, es decri que se "elevan" en el contexto de ejecucion.

Sintaxis 

funcion nombreFuncion() {
// Cuerpo de la funcion
}

Llamada:

nombreFuncion();
*/

function saludar() {
    console.log("Hola my nigga!");
}

saludar();

/* 

2. Funcion expresada (Anonimas)

Este tipo de funciones se asignan a una varible.
No puede ser llamada antes de su definicion.

Sintaxis:

const nombreConstante = function (){
// cuerpo de la funcion
---
} 

Llamada:

nombreConstante();

*/

const despedir = function () {
    console.log("Adios te voy extrañar")
}

despedir();

/*
3.funciones flecha

Tienen una sintaxis mas consisa, son utiles para ajecuciones cortas. generalmente se asignan a una variable.

sintaxis:

const nombreConstante= () => {
    //cuerpo de la funcion
    ---
    }
*/

const mensaje = () => {
    console.log("sos ayuda traigo hambre");
}

mensaje();


function sumar(num1, num2){
 console.log (`El resultado de la suma es: ${num1+ num2}`)
}

sumar(2,3);
sumar(245,523);
// asi sucesivamente e infinitamente


function saludo(nombre){
    console.log (`Hola ${nombre}!`)
}

saludo (`juan`)
saludo(`fede`)
saludo(`rosa`)
saludo(`jorge`)


/*
Paranetros por defecto

En las funciones podemos tener valores por defecto si no se proporcionan argumentos al llamar a la funcion.

sintaxis: 
Function nombreFuncion (parametro1= valorDefault) {

//Cuerpo de la funcion
}

Llamada :

nombreFunction(); //usa los valores por defecto
nombtreFunction(argumento1)// usa el valor del argumento

*/

const multiplicar = function(num1, num2 = 2) {
    console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`);
}

multiplicar();
multiplicar(8,5);
multiplicar(10,46);
multiplicar();




const bienvenida = (usuario = "Invitado") => {
    if(usuario == "Invitado") {
        console.log("Registrate o continúa como invitado 🧐");
    } else {
        console.log(`Bienvenido ${usuario}!`);
    }
}

bienvenida();
bienvenida(`julio`)


/*

valor de Retorno

Las funciones pueden devolver un valor utilizando la palabra "return"

sintaxis:

function nombreFunction(){
//Cuerpo de la funcion
---
return valor;

}

llamada: 
const nombreConstante = nombtreFuncion();

*/

function despedida(){
    return `adios mundo cruel`
}
function despedida(nombre = "tu") {
    return Adios ${nombre}! ✋🏼
}

const resultado = despedida();

console.log(resultado);


/* 

    Return Implicito

    Las funciones flecha no necesita la palabra return, en su estructura más simple (una sola línea)

    Sintaxis:

    const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;