"use strict";

//otras formas de creacion de objetos

//clase estudiante
let estudiante={
  nombre:"jose",
  edad:15,
  saludar:function(){
    console.log("hola compañeros")
  },
  saludar2:function(nombre){
    console.log("hola "+nombre)
  },
  getEdad:function(){
    console.log("mi edad es: "+this.edad)
  }
}

console.log(estudiante.nombre);
estudiante.saludar();
estudiante.getEdad();

console.log("-------------------------");
//como funcion--------------------------------------
function estudianteObj(saludo){
  let estudiante={
    _nombre:"",
    edad:15,
    saludar:function(){
      console.log("hola compañeros")
    },
    saludar2:function(nombre){
      console.log("hola "+saludo)
    },
    getEdad:function(){
      console.log("mi edad es: "+this.edad)
    },
    set nombre(x){
      this._nombre=x
    },
    get nombre(){
      return this._nombre;
    }
  
  }
  return estudiante;
}

let estu=estudianteObj("mojo");
estu.nombre="jose";
console.log(estu.nombre);
estu.saludar2();
estu.getEdad();


console.log("-------------------------");
//opt2-----------------------------------------------
function EstudianteObj2(){
  this.nombreStu,
  this.edad=15,
  this.saludar=function(){
    console.log("hola compañeros");
  },
  this.saludar2=function(saludo){
    console.log("hola "+saludo);
  },
  this.getEdad=function(){ 
    console.log("mi edad es: "+this.edad);
  }
}

let estu2=new EstudianteObj2();
console.log(estu2.nombre);
estu2.saludar2('mojo');
estu2.getEdad();
