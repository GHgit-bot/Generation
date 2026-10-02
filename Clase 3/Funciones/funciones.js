//Funciones

//!Funcion base
/*function saludar(){
    console.log("Hola, gracias por visitarnos");
} 

saludar();*/ 

//!Funcion con pararmtros
/*
function saludar(nombre){
    console.log(`¡Hola, ${nombre}! Gracias por visitar la tienda` );
}

saludar("Laura");
saludar("Camilo")*/

function calcularDescuento(precio){
    const descuento = precio * 0.2;
    const precioFinal = precio -descuento;
    console.log(`Precio total $${precioFinal}`);
}

calcularDescuento(500000000)
calcularDescuento(600000000)