let suma_a = 0;
let n1 = prompt("Cuantos números naturales desea sumar:");
for (var j=0;j<n1;j++){
    suma_a = j + suma_a;
    document.write('contar: ',j,' suma: '+suma_a+'<br>');
}

//rambien puede ser suma_a+=j;
