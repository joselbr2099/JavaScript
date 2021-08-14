"use strict";
let n = 1, i = 0;
do {
    console.log("SUMAR NUMEROS NATURALES: " + n + i);
    ++i;
} while (i >= 20);

/*
  bueno es una copia con los mismos errores  
  deberia ser:

  "use strict";
  let n =0, i = 1;
  do {
      console.log("Sumar naturales: " + n + i);
      n+=i;
      ++i;
  } while (i <= 4);
  console.log(n);

 deberia hacer una suma asi: 1+2+3...n
 falta n+=i;
 la condicion deberia ser i<=4
 n=0
*/
