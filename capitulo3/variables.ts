/*
Variables:
    mutables: cambian de valor
    immutables: no cambian de valor (constantes)
*/

//mutable
let nombre:string="Edgardo";
nombre="Nuevo nombre";

//immutable
const PI:number=3.1416;
//PI=2.66; no se puede

//any
let valor:any=true;

//interpolación de cadenas
let mensaje:string = `Hola ${nombre}, PI ${PI}`;
console.log(mensaje);