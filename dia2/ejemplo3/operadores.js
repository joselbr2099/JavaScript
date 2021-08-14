"use strict";
let a=2;
let b=3;

//operadores unarios
a=-a; 
console.log("unario: "+a);//-2

//operador binario
console.log("binario: "+(a+b)); //1

//suma
console.log("suma: " +(a+b));//1

//resta
console.log("resta: "+(a-b));//-5

//multiplicacion
console.log("multiplicación: "+(a*b));//-6

//division
console.log("division: "+(a/b));//-0.666

//resto
console.log("resto: "+(a%b));//-2

//exponente
console.log("exponente: "+(a**b))//-8

//concatenacion
console.log("hola"+"mundo");
console.log("valor de a "+a)
console.log("1"+b); //13
console.log(+"1"+a); //-1

//modificar actualizar una variable
a=a+1 //-1
a+=1  //0
a-=1 //-1
a*=2 //-2
console.log("actualizar:"+a);

//incremento de variable en una unidad
//b=3
//postFix 
let tmp;
tmp=b++; //4 es igual a  b=b+1 o b+=1
console.log("postFix1: "+b); //4
console.log("postFIx2: "+tmp); //3
//prefix
tmp=++b;
console.log("preFix1: "+b); //5
console.log("preFIx2: "+tmp); //5

//decremento
//postFix 
tmp=b--; //
console.log("postFix1: "+b); //4
console.log("postFIx2: "+tmp); //5
//prefix
tmp=--b;
console.log("preFix1: "+b); //3
console.log("preFIx2: "+tmp); //3

let result=a+b;//1