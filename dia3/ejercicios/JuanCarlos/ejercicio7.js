let result;

    while(true){

        //permitimos datos de entrada  
        result = prompt("ventana", "");//"ventana" mensaje que se vera en el prompt "default" valor por defecto para la variable result
        if(result=="STOP"){
            break;
        }
    }

    document.getElementById("resultado").innerHTML=result;