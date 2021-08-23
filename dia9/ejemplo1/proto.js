"use strict";

let animal={
  comer:true
}

function Perro(nombre){
  this.nombre=nombre;
}

//se asigna al prototype
Perro.prototype=animal;

//se crea el objeto
let prro=new Perro("leo");
console.log(prro.comer)

//otra forma de uso
//funcion de objeto
function Rabbit(name) {
  this.name = name;
  alert(name);
}

//se crea el objeto
let rabbit = new Rabbit("White Rabbit");

//se crea otro bjeto en funcion al constructor 
let rabbit2 = new rabbit.constructor("Black Rabbit");
