let numa=4, numb=6;

function load() {

	//  2  impresion en etiqueta
	document.getElementById("suma").innerHTML =" el resultado de la suma es:"+(numa+numb);
	document.getElementById("resta").innerHTML =" el resultado de la resta es:"+(numa-numb);
    document.getElementById("multiplicacion").innerHTML =" el resultado de la multiplicación es:"+(numa*numb);
    document.getElementById("promedio").innerHTML =" el resultado del promedio es:"+(4+6+7+numa+numb)/5;
    document.getElementById("nombre").innerHTML =" la concatenacion de los nombres es:"+"jose"+" "+"blas";
    document.getElementById("salario").innerHTML ="el salario es "+(30*24)+" bs";
    document.getElementById("division").innerHTML =" el resultado de la division es:"+(numa/numb);

}
window.onload = load;
