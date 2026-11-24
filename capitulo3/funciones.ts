/*
Funciones:
    - Que retornan valor
    - Que no retornan valor
*/

//no retorna valor
//5!=5*4*3*2*1

//declarar un método
function factorial(dato:number):void{
    let resultado=1;

    for(let i=dato;i>0;i--){
        resultado=resultado*i;
    }

    console.log(`${dato}!= ${resultado}`);

}

//invocar método
factorial(5);
factorial(4);
factorial(3);

/*-.-.-.-.-.-.-.-.-.-.-.-. */

function suma(numeros:number[]):number{
   let resultado:number=0;
   for(let i of numeros){
      resultado=resultado+i;
   }

   return resultado;
}

let operacion1:number=suma([3,4,5]);
let operacion2:number=suma([4,5,8]);

console.log(`operacion1: ${operacion1}`);
console.log(`operacion2: ${operacion2}`);
console.log(`operacion1+operacion2: ${operacion1+operacion2}`);
