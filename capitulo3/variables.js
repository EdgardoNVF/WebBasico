"use strict";
/*
Variables:
    mutables: cambian de valor
    immutables: no cambian de valor (constantes)
*/
//mutable
let nombre = "Edgardo";
nombre = "Nuevo nombre";
//immutable
const PI = 3.1416;
//PI=2.66; no se puede
//any
let valor = true;
//interpolación de cadenas
let mensaje = `Hola ${nombre}, PI ${PI}`;
console.log(mensaje);
