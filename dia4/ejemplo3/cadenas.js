"use strict";

//se declara una cadena
let cadena="curso de JavaScript";

/*
ejemplo del uso de cadenas
*/

//obtener la longitud de una cadena
let longitud=cadena.length;
console.log("longitud de cadena: "+longitud);

//acceso a caracteres
console.log("primer caracter: "+cadena[0]); //siempre se empieza desde 0
console.log("segundo caracter: "+cadena[2]); //r
console.log("ultimo caracter: "+cadena[cadena.length-1]);

//iterar sobre caracteres
for(let caracter of cadena){
  console.log("caracter: "+caracter);
}

for(let i=0;i<=caracter.length;i++){
  console.log(cadena[i]);
}

//las cadenas son inmutables
//cadena[3]='d';//error

//solo si se sobre escribe la cadena completa
cadena="nuevo "+cadena;
console.log(cadena);

//muestra en mayusculas
console.log(cadena.toUpperCase());

//muestra en miniusculas
console.log(cadena.toLowerCase());

//busqueda de un caracter
//se retorna la posicion del subcaracter
//de lo contrario retorna -1
console.log(cadena.indexOf("nuevo"));
console.log(cadena.indexOf("jose"));

//obtenemos un slice
let slice=cadena.split(""); //separa la cadena dado un "" 
console.log(slice);

//verificamos la existencia de una cadena
if(cadena.includes("de")){
  console.log("la cadena \"de\" si esta presente");
}

//mas metodos:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
//https://www.studytonight.com/javascript/javascript-string-methods