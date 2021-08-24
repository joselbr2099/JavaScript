"use strict";

//muetra la url 
alert(location.href);

if(confirm("¿Ir a youtube?")){
  location.href="https://youtube.com";
}

function informacionSistema(){
  console.log("appCodeName:", window.navigator.appCodeName);
  console.log("appName:", window.navigator.appName);
  console.log("appVersion:", window.navigator.appVersion);
  console.log("platform:", window.navigator.platform);
  console.log("product:", window.navigator.product);
  console.log("userAgent:", window.navigator.userAgent);
  console.log("javaEnabled:", window.navigator.javaEnabled());
  console.log("language (used):", window.navigator.language);
  console.log("language (support):", window.navigator.languages);
  console.log("conectado a internet?", window.navigator.onLine);
  console.log("mimeTypes:",window.navigator.mimeTypes);
  console.log("Plugins:", navigator.plugins);

  navigator.getBattery().then(function(bateria){
    console.log("Batería cargando?", bateria.charging)
    if(bateria.charging){
      console.log("Tiempo de carga:", bateria.chargingTime)
    }
    console.log("Batería %:", bateria.level*100)
    console.log("Tiempo restante:", conversorTiempo(bateria.dischargingTime))
  });
}

window.onload=informacionSistema();
