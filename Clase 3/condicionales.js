//! sintaxis básica
//! if (condición){
//*     el bloque de codigo a ejecutar, si la condición es true
//* }

const saldo = 50000;
const monto = 80000;
//& If Simple
if (monto > saldo){
    console.log("Ey! el monto supera el saldo");
}

//if--else
if (monto <= saldo){
    console.log("Transferencia aceptada");
} else {
    console.log ("Saldo insuficiente");

}

//if-else if- else
const saldoAhorro = 250000;

if(saldoAhorro >= 200000){
    console.log("Cliente VIP");
} else if (saldoAhorro >= 100000){
    console.log("Buen ahorro");
} else {
    console.log("Le toca ahorrar");
}
