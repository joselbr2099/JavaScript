"use strict";
let numero=34;
let cadena="2247";
let booleano=true;

//conversion de numero a cadena
let cadenaDeNumero=String(numero);
console.log(typeof(cadenaDeNumero));

//conversion de cadena a numero
let numeroDeCadena=Number(cadena);
console.log(typeof(numeroDeCadena));

//conversion de bool a  cadena
let cadenaDeBool=String(booleano);
console.log(typeof(cadenaDeNumero));

let result=numeroDeCadena+numero;
