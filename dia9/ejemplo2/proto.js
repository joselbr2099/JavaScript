//ejemplo de herencia

//clase padre
function Persona(){
  this.nombre;
  this.carnet;
}

//clase hija
function Alumno(){
  this.curso;
  this.institucion;
}

//se establece la herencia
Alumno.prototype=Persona

//se crea el objeto
let alu=new Alumno();
alu.nombre="jose";
alu.carnet=123;
alu.curso="1ro";
alu.institucion="eduComser";
console.log(alu);