//! for convencional
//! for(inicio, condición, actualizacion){
//!        bloque de osigo que se ejeuta si pasa la condición
//!}

for(let contador = 1; contador <= 5; contador++){
    console.log(contador);
}

//* Recorrer arrays

const clientes =["name1", "name2", "name3"];
for (const cliente of clientes){
    console.log("Bienvenido", cliente);
}

const movimientos = [35000, 120000, 8000, 45000, 60000]
for (const valor of movimientos){
    if(valor > 100000){
        console.log(valor);
    }
}


//!while
let contador = 1;
while (contador <= 5){
    console.log(contador);
    contador++;
}

const meta = 1000000;
const ahorroMensual = 150000;
let ahorrado = 0;
let meses = 0;

while (ahorrado < meta){
    ahorrado += ahorroMensual;
    meses++;
}
console.log("Meta alcanzada en", meses , "meses");
console.log("Total ahorrado", ahorrado);