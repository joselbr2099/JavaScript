"use strict";
let a=1;
let b=2;
let c=3;
let d;

/* estructura condicional

foma 1 if

if(cond){
    operaciones por verdad
}

forma 2 if-else

if(cond){
    operaciones por verdad
}else{
    operaciones por falso
}

forma 3 else if

if(cond){
    operaciones por verdad
}else if (cond){
    operaciones por falso
}else{
    operaciones por falso
}

forma 4 ?
let result= cond ? op1:  op2;
si cond es verdad retorna op1 de lo contrario op2
o tambien
let result = 3>4; //retorna false

*/

//forma 1
if (a>b){
    console.log(a+" es mayor");
}

//forma 2
if (a>b){
    console.log(a+" es mayor");
}else{
    console.log(b+" es mayor");  // 2 es mayor
}

//forma 3
if (a>b){
    console.log(a+" es mayor");
}else if (b>c){
    console.log(b+" es mayor");  
}else{
    console.log(c+" es mayor"); //3 es mayor
}

//forma 4
let result= (a>b) ? "a es mayor":  "b es mayor";
console.log("forma 4 "+result); //b es mayor

result=(a>b); //false
console.log("forma 4 opt2 "+result);

//otros tipo de comparacion
result=('Z'>'A');
console.log("cadenas1: "+result); //true

result=('Jose'>'luis');
console.log("cadenas2: "+result);

result=('Jose'>'Jo');
console.log("cadenas3: "+result);

result=('2'>1);
console.log("cadenas4: "+result);

result=('04'>4);
console.log("cadenas5: "+result);

//comparacion stricta ==
result=(0==false);
console.log("stricto1: "+result);

result=(1==true);
console.log("stricto2: "+result);

//comparacion muy stricta ===
result=(1===true); //no so n del mismo tipo
console.log("stricto3: "+result);

//operador ?? retorna el valor distinto de null o undefined
// result=(a??d)
result=a??d;
console.log("operador ??: "+result);//1

result="jose"??d; //d no esta definido
console.log("operador ??: "+result);//jose