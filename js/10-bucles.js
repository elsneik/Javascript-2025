/*
Bucles

Son estructuras que permiten repetir un bloque de codigo varias veces, hasta que se cumpla una funcion especifica.

Los mas comunes en JS son for, while y do ... while

1,Bucle for

El bucle se utiliza cuando sabemos cuantas veces queremos repetir un bloque de codigo. La sintaxis es:

for(inializacion; condición; incremento) {
// el codigo que se va a repetir su ejecución
...
}

Inialización variable con un valor inicial
condición se evalua una expresión si es true se ejexur el bucle
 incremento aunmenta el valor de la variable de en cada iteración
*/
for (let i =0; i < 10; i++) {
    console.log("Repetición  " + i +  "oye cucu papa se fue" )
}

/* 
  2.Bucle while


  El bucñe while se utiliza cuando no sabemos cuántas veces queremos repetir un bloque de codigo, pero si queremos que se repita mientras una condición es verdadera. Sintaxis:

  while (condición) {
    // código que se repita su ejecución
    incremento
  }
*/

let j = 0;

while (j < 5) {
    // código a ejecutar
    console.log("otro buclecito");
    j++; // incrementar
}

/* 

    3. Bucle do...while

    Este bucle es similar al bucle while, pero garantiza que el bloque se ejecute almenos una vez. Ya que la condición se evalúa después de la ejecución. Sintaxis

    inicializacion
    do {
    // código que se ejecuta al menos una vez
    incremento
    } while(condición);

*/



let k = 5;

do{
 console.log("HUNTRIX rules")
 k++;
} while(k < 5);


