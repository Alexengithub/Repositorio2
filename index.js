function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulomensaje");
    let parrafo = document.getElementById("parrafo");
    let persona = document.getElementById("persona");
    let cuadroBlanco = document.getElementsByClassName("encriptado")
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      //document.getElementById("texto").value = textoCifrado;//
      tituloMensaje.textContent = textoCifrado;
      
      parrafo.textContent = "";
      persona.style.display = "none";
     
      
    } 
    if (condition) {
      
    } else {
      
    }
    else {
     
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulomensaje");
    let parrafo = document.getElementById("parrafo");
    let persona = document.getElementById("persona");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        tituloMensaje.textContent = textoCifrado;
      persona = textoCifrado;
      parrafo.textContent = "";
      persona.style.display = "none";
        
      } else {
       
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      }

      
  }