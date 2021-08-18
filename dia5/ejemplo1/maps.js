"use strict";

//mapas en js

//declaracion de mapas
let map1=new Map();
let map2=new Map([
    [1,'uno'],
    [2,"dos"]
    ]);
let map3=new Map(map1);//clonado de map
//let map2={};//esto es un objeto
//let map3={nombre: "jose", apellido:"ralde"};//esto es un objeto
//let map4=new Map(4); //se crea un map de 4 elementos

/*
funciones principales de un map
map.set() agregra un elemento al map
map.get() retorna el vlaor de una clave
map.has() verifica si existe un clave en el map
map.size retorna el tamaño de un map
map.delete() elimina un clave
map.clear() vacia un mapa
*/

//agrega un elemento al map
map1.set("edad",15);
map1.set(1,"uno");
map1.set(true,"verdad")
console.log("map1: ",map1);

//retorna el valor de una clave
console.log(map1.get("edad"));
console.log(map2.get(1));
console.log(map1["edad"]); //esto no funciona para maps


//verifica si existe una clave en el map
let result= map1.has("edad") ? "la clave existe": "la clave no existe";
console.log(result);

//se obtiene el tamaño de un map
console.log(map1.size);

//iteracion
//itera sobre el map i retorna llave y valor
for(const valor of map1){
    console.log("llave+valor: "+valor);
}

//itera sobre el map y retorna clave y valor por separado
for(const [clave, valor] of map1){
    console.log("clave: "+clave+" valor: "+valor);
}

//itera sobre las llaves
for(const clave of map1.keys()){
    console.log("clave: "+clave);
}

//itera sobre los valores
for(const valor of map1.values()){
    console.log("valor: "+valor);
}

//elimina una clave
map1.delete("edad");
console.log(map1);

//se vacia un map
map1.clear();
console.log(map1);
