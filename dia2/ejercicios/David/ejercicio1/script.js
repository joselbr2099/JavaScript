console.log(typeof(tmp));

tmp=++b;

tmp=b--;

let result=a+b;

alert(typeof(result));
console.log(typeof(result));

function load() {
    document.getElementById("varA").innerHTML = "El tipo es:" +typea;
    document.getElementById("varNombre").innerHTML = "El tipo es:" +typeNombre;
    document.getElementById("varB").innerHTML = "El tipo es:" +typeof(b);
    document.getElementById("varTmp").innerHTML = "El tipo es:" +typeof(tmp);
    document.getElementById("varResult").innerHTML = "El tipo es:" +typeof(result);
}

window.onload = load;