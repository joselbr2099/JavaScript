'use strict';

/*
  pare definir un metodo o atributo privado se
  utiliza el simbolo # 
  aunque esta caractareistica aun no esta ampliamente soportada
*/

//se define el nombre de la clase
class Perro{

  //se define lo(s) atributos
  #razaPerro="generico";

  //constructor por defecto
  constructor(raza,nombre){
    this.#razaPerro=raza;
    this.nombre=nombre //puede declararse otro atributo aqui
  }
  
  //getters
  get raza(){
    return this.#razaPerro;
  }

  //setter
  //este metodo puede imitirse pare que
  //el atributo sea de solo lectura
  set raza(tip){
    this.#razaPerro=tip;
  }
}

//se crea el objeto perro
let perro=new Perro();

//esto ya no es posible
perro.#razaPerro="leonardo1";
console.log(perro.#razaPerro);

//solo deberia modificarse meediante setters o getter
perro.raza="leonardo2"; //set
console.log(perro.raza); //get
