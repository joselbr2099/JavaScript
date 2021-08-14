// ejemplos de declaracion y uso de variables en JS
"use strict";

let numero;  //tipo undefined
let nombre;  //tipo undefined

// se utiliza el operador = para "guardar" un valor en una variable al ser declarada

let a=3; //tipo number
nombre="jose"; //tipo string
let tipo= true; //tipo bool
let user = 'John', age = 25, message = 'Hello';
//tambien
/*let user = 'John', 
		age = 25, 
		message = 'Hello';
*/
const PI=3.14; //se conoce el valor, tipo num

//se obtiene en tiempo de ejecución
const today=new Date();
var dd = String(today.getDate()).padStart(2, '0'); //dia
var mm = String(today.getMonth() + 1).padStart(2, '0'); //mes
var yyyy = today.getFullYear(); //añó


//modos de imprimir en pantalla  ------------------------------------------

//  1  impresion en consola F12
console.log("año: "+yyyy);
console.log("tipo de variable:"+typeof(PI)); //muestra el tipo de variable

//se ejecuta solo cuando la pagina se cargó por completo
function load() {

	//  2  impresion en etiqueta
	document.getElementById("print").innerHTML ="su nombre es: "+nombre;
	//document.write(PI);
}
window.onload = load;

//  3  en una ventana emergente
alert("año: "+yyyy);