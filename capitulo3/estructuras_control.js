"use strict";
/*if-else*/
//validar si un numero es par o impar
let edad = 35;
if (edad % 2 == 0) {
    console.log(`${edad} es par`);
}
else {
    console.log(`${edad} es impar`);
}
console.log("-.-.-.-.-.-.-.-.-.-.");
/*switch*/
/*
crear una app que me diga la cantidad
de días que tiene un mes
*/
let mes = "enero";
switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
        console.log(`${mes} tiene 31 días`);
        break;
    case "abril":
    case "junio":
        console.log(`${mes} tiene 30 días`);
        break;
    case "febrero":
        console.log(`${mes} tiene 28 y cada 4 años 29`);
        break;
    default:
        console.log(`${mes} no existe!!!!`);
}
