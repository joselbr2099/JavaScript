'use strict';

//se define el nombre de la clase
class Perro{

  //se define lo(s) atributos
  razaPerro="generico";
  tamaño;
  nombre;
  //constructor por defecto
  constructor(raza,nombre){
    this.razaPerro=raza;
    this.nombre=nombre //puede declararse otro atributo aqui
  }
  
  //metodos
  correr(){
    console.log("hola estoy corriendo");
  }

  ladrar(){
    return "waf waf";
  }

  saludo(mensaje){
    console.log("hola "+mensaje+" soy de raza "+this.razaPerro+' y me llamo '+this.nombre)
  }

  //getters
  get raza(){
    return this.razaPerro;
  }

  //setters
  set raza(tip){
    this.razaPerro=tip;
  }
}

//se crea una instancia de la clase Perro
let perro=new Perro("mezcla","mayor");

//acceso a un atributo
console.log(perro.razaPerro);

//llamar a metodos
perro.correr();
console.log(perro.ladrar());
perro.saludo("jose");

//getter and setters
perro.raza="leonardo";
console.log(perro.raza);

