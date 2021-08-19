"use strict";

//otras formas de creacion de objetos

let obj1=new Object(); //constructor
let obj2={}; //objeto literal
let obj3={
  nombre:"Jose",
  ap:"Ralde",
  edad:15
}//objeto con propiedades

let obj4=new Object({
  4:"nuevo",
  true:"de fabrica",
  saludo:function(){
    console.log("hola desde objeto")
  },
  saludo2:function(name){
    console.log("hola "+name)
  }
})//objeto con diferentes tipos de clave

//acceso a las propiedades
console.log(obj3.nombre);
//console.log(obj4.4);//error
console.log(obj4.true);//si funciona
obj4.saludo();
obj4.saludo2("jose");

console.log("------------------")
console.log(obj3['nombre']);
console.log(obj4['4']);
console.log(obj4['true']);
obj4['saludo'];//no funciona

//metodos de los objetos
//para borrar una propiedad
delete obj4['true'];
delete obj3.edad;
console.log(obj4);
console.log(obj3);

//para agregar una propiedad
obj2.test=5;
console.log(obj2);

//verificar si una propiedad existe
let result=("test2" in obj2)? "existe":"no existe";
console.log(result);
result=(obj2.test2===undefined)? "no existe":"existe";
console.log(result);

//iteracion
for(let clave in obj4){
  console.log("--> "+clave)
}

//los objetos son una referencia
let copyObj=obj3;
copyObj.nombre="JoseJose";
console.log("copia: ",copyObj);
console.log("original: ",obj3);

//para crear una copia debe declararse otro objeto
let objAux={}
Object.assign(objAux, obj3); //realiza la copia
objAux.nombre="Mojo";
console.log("copia: ",objAux);
console.log("original: ",obj3);
