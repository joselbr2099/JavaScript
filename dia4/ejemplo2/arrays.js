"use strict";

//declaracion de array
let arr1=new Array();
let arr2=[];
let arr3=[1,"2",true];
let arr4=new Array(4); //se crea un array vacion de 4 elementos

//ver el contenido de un array
console.log(arr3);

//acceso a los elementos de un array
console.log(arr3[1]); //"2"

//los arrays son mutables
arr3[2]="3";

//se pueden agregar elemento
arr3[3]='4';

//retorna el total de elementos
console.log(arr3.length);


//funciones de pila (stack)------------------------------

//pop elimina y retorna el ultimo elemento de  un array
let stack=[1,2,3,4,5,6,7,8,9,0];//se define una pila

let lastElement=stack.pop();
console.log("elemento: "+lastElement);
console.log("array: "+stack);

//push agrega un elemento al final de la pila
stack.push(11);
console.log("array: "+stack);

//shift elimina y retorna el primer elemento de una pila
let firstElement=stack.shift();
console.log("elemento: "+firstElement);
console.log("array: "+stack);

//unshift agrega un elemento al principio de la pila
stack.unshift(-1);
console.log("array: "+stack);

//iteracion
//forma1
for(let i=0;i<=stack.length;i++){
  console.log("element form1: "+stack[i]);
}

//forma2 solo retorna los elementos no los indices
for(let element of stack){
  console.log("element form1: "+element);
}

//forma3 solo retorna los indices
for(let index in stack){
  console.log("element form3: "+stack[index]);
}

//forma4
stack.forEach((item, index, array)=>{
  console.log("element form4: "+array[index]);
})

//borrar un elemento de un array
delete  stack[3];
console.log("array: "+stack);

//esto puede dar error
let auc=[];
auc[45]=56;
console.log(auc.length);

let result=0;