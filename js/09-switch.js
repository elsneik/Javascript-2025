/*

Switch
es una sentencia que se utiliza para realizar diferentes acciones segun distintas condiciones.
se suele usar como forma alternativa a multiples sentencias if-else
switch (expresion) {
// Casos segun se comparan

case valor1;
// el codigo a ejecutar

case valor2;
// El codigo a ejecutar

case valor3;
// El codigo a ejecutar
break;
default;
//Este es el codigo que se ejecuta si la expresion no coincide con ningun caso.
break; //Esto es opcional
    */
// variable a evaluar//television, diseño,consultoria
let licenciatura= prompt("escribe cual de nuestras licenciaturas te interesa");

switch (licenciatura){
    case "television":
        console.log("Haz elegido la licenciatura de Television que mal x ti");
        case "diseño":
        console.log("Haz elegido la licenciatura de Diseño que bien x ti");
        case "Consultoria":
            console.log("y la licenciatura?");
            break;
            default:
            console.log("estas loquito")
}
