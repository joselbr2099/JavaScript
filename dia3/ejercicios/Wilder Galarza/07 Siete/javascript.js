"use strict";


while (true) 
{

    let result = prompt("ventana", "Ingrese un nombre: ");
    
    if (result == "STOP") 
    {
        break;
    }

}

document.getElementById("resultado").innerHTML = result;