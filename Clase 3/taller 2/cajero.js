//Intento individual

const prompt = require('prompt-sync')();

let numero1 = prompt("Ingrese número 1: ");
console.log(numero1);
let numero2 = prompt("Ingrese número 2: ");
console.log(numero2);
let operacion = prompt("Ingrese la operación (+, -, *, /): ");
let resultado; 

if (operacion === "+"){
    resultado = Number(numero1) + Number(numero2);
} else if (operacion === "-"){
    resultado = Number(numero1) - Number(numero2);
} else if (operacion === "*" ){
    resultado = Number(numero1) * Number(numero2);
} else if(operacion === "/" ){
    resultado = Number(numero1) / Number(numero2);
} else {
    console.log("operación no valida");

}
console.log("Tu resultado es:", resultado)


