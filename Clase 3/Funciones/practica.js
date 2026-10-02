/*function sumaDeNumeros(numero1, numero2) {
  return numero1 + numero2;
}
function restaeNumeros(numero1, numero2) {
  return numero1 - numero2;
}
function multiplicacionDeNumeros(numero1, numero2) {
  return numero1 * numero2;
}
function divisionDeNumeros(numero1, numero2) {
  return numero1 / numero2;
}

console.log(sumaDeNumeros(140,67));*/

function calcularEnvio(montoCompra) {
  if (montoCompra > 150000) {
    return "¡Envío gratis!";
  } else if (montoCompra < 150000){
    return "El envío no es gratis.";
  }

}

console.log(calcularEnvio(120000)); 
console.log(calcularEnvio(80000));  
console.log(calcularEnvio(100000)); 