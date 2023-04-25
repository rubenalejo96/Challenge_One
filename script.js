//variables
const encriptado = document.querySelector("#encriptar");
encriptado.onclick = encriptar;

const desencriptado = document.querySelector("#desencriptar");
desencriptado.onclick = desencriptar;

const copiado = document.querySelector("#copiar");
copiado.onclick = copiar; 

var resultado = document.getElementById("resultado");
var texto = document.getElementById("texto")
var imagen = document.getElementById("img");

//codigo para que no puedan modificar el resultado
resultado.readOnly = true;

//codigo para que aparezca una imagen si el texto esta vacio
texto.addEventListener('input', verificarVacio);

function verificarVacio(){
  if (texto.value.trim() === ""){
    imagen.style.display = "block"
    resultado.value = "";
  }else {
    imagen.style.display = "none"
  }
}

// codigo para encriptar y desencriptar 
function encriptar() {
    var texto = document.getElementById("texto").value;
    var char = texto.split("");
      for(i=0; i<char.length ; i++){
        switch(char[i]){
          case "a":
            char[i] = "ai";
            break;
  
          case "e":
            char[i] = "enter";
            break; 
  
          case "i":
            char[i] = "imes";
            break;
  
          case "o":
            char[i] = "ober";
            break;  
  
          case "u":
            char[i] = "ufat";
            break;       
        
        }
        
        texto = char.join("");
      } 
    resultado.value = texto;
}


function desencriptar() {
  var texto = document.getElementById("texto").value;
  var resultado2 = document.getElementById("texto").value;
  var char = resultado2.split("");
    for(i=0; i<char.length ; i++){
      var primero = char[i];
      var segundo = char[i+1];
      var tercero = char[i+2];
      var cuarto = char[i+3];
      var quinto = char[i+4];

      if(primero === "a" && segundo ==="i"){
        char[i] = "a"; 
        char[i+1] = "";
      }else if (primero === "e" && segundo === "n" && tercero === "t" && cuarto === "e" && quinto === "r"){
        char[i] = "e";
        char[i+1] = "";
        char[i+2] = "";
        char[i+3] = "";
        char[i+4] = "";
      }else if (primero === "i" && segundo === "m" && tercero === "e" && cuarto === "s"){
        char[i] = "i";
        char[i+1] = "";
        char[i+2] = "";
        char[i+3] = "";
      }else if (primero === "o" && segundo === "b" && tercero === "e" && cuarto === "r"){
        char[i] = "o";
        char[i+1] = "";
        char[i+2] = "";
        char[i+3] = "";
      }else if (primero === "u" && segundo === "f" && tercero === "a" && cuarto === "t"){
        char[i] = "u";
        char[i+1] = "";
        char[i+2] = "";
        char[i+3] = "";
      }

      texto = char.join("");
    }

    resultado.value = texto;
}

// codigo para copiar el resultado al portapapeles
function copiar() {
  var texto = document.getElementById ("resultado")
  texto.select();
  document.execCommand("copy");
  resultado.value = "";
}


