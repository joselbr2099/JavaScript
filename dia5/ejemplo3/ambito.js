 "use strict";

//variables globales
let numa=3;
let numb=4;

//funcion de division
function division(a,b){
    let aux=0; //varibale declarada en este ambito
    aux=a/b;
    return aux;
}

//se  llama a la funcion de division
let result=division(numa,numb);
console.log("division: "+result);
console.log("variable aux: "+aux);//aux variable no definida

if(aux>0){
    let msg="es mayor a 0";
}
console.log(msg);

