//conversión de string a number
/*const puntos = "100";
const bonus = 10;

console.log(`Tipo de puntos: ${typeof puntos}`);
console.log(`Tipo de bonus: ${typeof bonus}`);

const total = Number(puntos) + bonus;
console.log(`Puntaje: ${total}`);*/ 

//Usar Arrays
/*const inventario = ["Espada", "Poción", "Mapa"];

console.log(inventario);
console.log(inventario[0]);
console.log(inventario[2]);
console.log(inventario.length);

inventario.push("Llave"); //agrega un elemento al final del array
console.log(inventario);

inventario.pop();//elimina el último elemento del array
console.log(inventario);

inventario[1] = "Escudo";//modifica un elemento del array a esa posición
console.log(inventario);

console.log(inventario[10]);*/ //accede a un elemento que no existe, devuelve undefined

//Objetos

const jugador= {
    nombre: "kira",
    nivel: 3,
    vidas: 2,
    tieneLlave: false,
    compañero: null,
    inventario: ["Espada", "Poción",],
};

console.log(jugador.nombre);
console.log(jugador.nivel);

jugador.tieneLlave= true; //modifica el valor de la propiedad tieneLlave
jugador.vidas= jugador.vidas - 1; //modifica el valor de la propiedad vidas
jugador.monedas = 50; //agrega una nueva propiedad al objeto jugador
console.log(jugador);

console.log(jugador.inventario[0]); //accede al primer elemento del array inventario dentro del objeto jugador
jugador.inventario.push("Mapa"); //agrega un elemento al array inventario dentro del objeto jugador
console.log(`${jugador.nombre} tiene ${jugador.inventario.length} objetos`);//accede a la propiedad inventario y obtiene su longitud

console.log(jugador.puntos); //accede a la propiedad puntos que no existe, devuelve undefined
console.log(jugador.compañero); //accede a la propiedad compañero que tiene un valor null
