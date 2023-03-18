const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#boton-copiar");
const botonBorrar = document.querySelector("#boton-borrar");
const botonPegar = document.querySelector("#boton-pegar");
var portapapeles = "";

function encriptar(){
    var inputMensaje = document.querySelector("#mensaje");
    var mensaje = inputMensaje.value;
    if(inputMensaje.value != ""){
        var mensajeEncriptado = mensaje
        .replaceAll("e" , "enter")
        .replaceAll("i" ,  "imes")
        .replaceAll("o" ,  "ober")
        .replaceAll("a" ,    "ai")
        .replaceAll("u" ,  "ufat");
        
        var inputResultado = document.querySelector("#resultado");
    
        inputResultado.value = mensajeEncriptado;
        document.querySelector("#mensaje").value = "";
        console.log("MENSAJE = ",mensaje,"; MENSAJE ENC", mensajeEncriptado);
        mostrarTexto();
        mostrarBotonBorrar();
        mostrarBotonCopiar();
    }  
}

function desencriptar(){
    var inputMensaje = document.querySelector("#mensaje");
    var mensaje = inputMensaje.value;
    if(inputMensaje.value != ""){
        var mensajeDesencriptado = mensaje
        .replaceAll("enter" ,  "e")
        .replaceAll("imes"  ,  "i")
        .replaceAll("ober"  ,  "o")
        .replaceAll("ai"    ,  "a")
        .replaceAll("ufat"  ,  "u");
        
        var inputResultado = document.querySelector("#resultado");
    
        inputResultado.value = mensajeDesencriptado;
        document.querySelector("#mensaje").value = ""; 
        console.log("MENSAJE = ",mensaje,"; MENSAJE ENC", mensajeDesencriptado);
        mostrarTexto();
        mostrarBotonBorrar();
        mostrarBotonCopiar();
    }
}

function copiar() {
    navigator.clipboard.writeText(document.querySelector("#resultado").value);
    document.querySelector("#mensaje").focus();
    portapapeles = document.querySelector("#resultado").value;
    mostrarBotonPegar();
}

function pegar(){
    document.querySelector("#mensaje").value = portapapeles;
}

function borrar(){
    document.querySelector("#resultado").value = "";
    esconderTexto();
    esconderBotonBorrar();
    esconderBotonCopiar();
    esconderBotonPegar();
}

function mostrarTexto(){
    var mostrarTexto = document.getElementById("resultado");
    mostrarTexto.classList.add("background");
}

function esconderTexto(){
    var esconderTexto = document.getElementById("resultado");
    esconderTexto.classList.remove("background");
}

function mostrarBotonCopiar(){
    var mostrarBotonCopiar = document.getElementById("boton-copiar");
    mostrarBotonCopiar.classList.remove("esconder");
}

function esconderBotonCopiar(){
    var esconderBotonCopiar = document.getElementById("boton-copiar");
    esconderBotonCopiar.classList.add("esconder");
}

function mostrarBotonBorrar(){
    var mostrarBotonBorrar = document.getElementById("boton-borrar");
    mostrarBotonBorrar.classList.remove("esconder");
}

function esconderBotonBorrar(){
    var mostrarBotonBorrar = document.getElementById("boton-borrar");
    mostrarBotonBorrar.classList.add("esconder");
}

function mostrarBotonPegar(){
        var mostrarBotonPegar = document.getElementById("boton-pegar");
        mostrarBotonPegar.classList.remove("esconder");
}

function esconderBotonPegar(){
        var esconderBotonPegar = document.getElementById("boton-pegar");
        esconderBotonPegar.classList.add("esconder");
}

botonDesencriptar.onclick = desencriptar;

botonEncriptar.onclick = encriptar;

botonCopiar.onclick = copiar;

botonBorrar.onclick = borrar;

botonPegar.onclick = pegar;