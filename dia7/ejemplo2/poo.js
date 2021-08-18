'use strict';

/*
  en javascriopt se tienen dos metodos de acceso 
  public
  private
  por defecto el acceso es public

  se utiliza el prefijo _ para indicar que esa propiedad es privada y no deben ser 
  accedidos desde el exterior
*/

//se define el nombre de la clase
class Perro{

  //se define lo(s) atributos
  _razaPerro="generico";

  //constructor por defecto
  constructor(raza,nombre){
    this.razaPerro=raza;
    this.nombre=nombre //puede declararse otro atributo aqui
  }
  
  //getters
  get raza(){
    return this._razaPerro;
  }

  //setter
  //este metodo puede imitirse pare que
  //el atributo sea de solo lectura
  set raza(tip){
    this.razaPerro=tip;
  }
}

//se crea el objeto perro
let perro=new Perro();

//esto no deberia hacerse ya que se especifico la propiedea como privada
perro._razaPerro="leonardo";
console.log(perro._razaPerro);

//solo deberia modificarse meediante setters o getter
perro.raza="leonardo"; //set
console.log(perro.raza); //get
