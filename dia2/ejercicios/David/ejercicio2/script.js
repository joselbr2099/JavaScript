let numa=3, numb=8;

function load() {

	//  2  impresion en etiqueta
	document.getElementById("suma").innerHTML ="La suma es:"+(numa+numb);
	document.getElementById("resta").innerHTML ="La resta es:"+(numa-numb);
    document.getElementById("multiplicacion").innerHTML ="La multiplicación es:"+(numa*numb);
    document.getElementById("division").innerHTML ="La division es:"+(numa/numb);

}
window.onload = load;