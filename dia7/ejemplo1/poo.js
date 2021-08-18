'use strict';

//se define la clase padre
class Animal{

  //se define un atributo
  tipo="defecto";

  //esta clase no tiene constructor

  //metodos
  correr(){
    console.log("hola estoy corriendo");
  }

  saltar(){
    console.log("este -animal- esta saltando")
  }
}

//se define la clase hija
class Perro extends Animal{

  //se define los atributos
  razaPerro="generico"; 

  //constructor por defecto
  constructor(raza,nombre){

    //para la clase padre
    super(); //se llama al constructor de la clase padre
    //super.tipo="perro"; //se establece el valor por defecto del atributo base

    this.razaPerro=raza;
    this.nombre=nombre //puede declararse otro atributo aqui
  }
  
  ladrar(){
    return "waf waf";
  }

  saludo(mensaje){
    console.log("hola "+mensaje+" soy de raza "+this.razaPerro+' y me llamo '+this.nombre)
  }

  //metodo que sobreescribe al de la clase padre
  saltar(){
    console.log("hola estoy saltando de alegria");
    super.saltar(); //si es necesario llamar al metodo original
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

//acceso a atributo
console.log(perro.tipo);

//acceso a metodos
console.log("soy de raza: ",perro.razaPerro);
perro.correr(); //acceso al metodo de la clase padre
console.log(perro.ladrar());
perro.saludo("jose");
perro.saltar();

//getter and setters
perro.raza="leonardo";
console.log(perro.raza);

//otras
