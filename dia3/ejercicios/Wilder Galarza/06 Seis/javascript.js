"use strict";

let naturales = 0;
let contador = 10;

for (let i=0; i<contador; i++)
{
    naturales = i + naturales; //tambien puede ser naturales+=i;
    console.log('POsicion: '+ ' '+i)
    console.log('Numeros Naturales: '+ ' '+naturales)
}

