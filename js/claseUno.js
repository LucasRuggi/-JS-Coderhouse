/*
var
let
const

*/

let num1;
let num2;
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;

num1 = Number(prompt("Ingrese el primer numero:"));
num2 = Number(prompt("Ingrese el segundo numero:"));

suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;

alert("La suma es: " + suma);
alert("La resta es: " + resta);
alert("La multiplicacion es: " + multiplicacion);
alert("La division es: " + division);
console.log("Suma: " + suma, "Resta: " + resta, "Multiplicacion: " + multiplicacion, "Division: " + division);