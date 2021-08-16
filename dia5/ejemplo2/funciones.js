"use strict";

//variables globales
let numa=3;
let numb=4;

//declaracion de una funcion
function suma(a,b){
    return a+b;
}

//declaracion de un procedimiento
function resta(a,b){
    console.log("resta:",a-b);
}

//funcion de division
function division(a,b){
    let numa=0; //varibale declarada en este ambito
    numa=a/b;
    return numa;
}

//parametros con valores por defecto
function saludo(nombre="default"){
    console.log(nombre);
}

//notacion arrow
let resto=(a,b)=>b%a;
        /*
          n=>n*2;
          ()=>alert("hola");
          (a,b)=>{
            return a+b;
        }
        */
console.log("resto: ",resto(numa,numb));

//se llama a la funcion
let result=suma(numa,numb);
console.log("suma: "+result);

//se llama al procedimiento
resta(numa,numb);

//se  llama a la funcion de division
result=division(numa,numb);
console.log("division: "+result);
//console.log("variable aux: "+aux);//aux variable no definida

//se llama a la funcion por defecto
saludo();
saludo("jose");