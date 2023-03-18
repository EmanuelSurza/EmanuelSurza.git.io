const filas = document.getElementById('filas');

let it = 0;
let itAux = 0;

let palabraAleatoria;
let cantLetras;
let lineaActual = 0;
let palabraEscrita = new Array(cantLetras);
let vidas = 6;
let letraActual = 0;
let palabraAux = new Array;
let arrayDiccionario = new Array;

let intervalShake;
let timeOutShake;
let comenzarJuegoBool = false;

async function leerDiccionario() {
    await fetch('https://raw.githubusercontent.com/webpwnized/byepass/master/dictionaries/top-10000-spanish-words.txt')
    .then(response => response.text())
    .then(data => {
        arrayDiccionario = data.split('\n');
    })
    .catch(error => console.log(error, " Diccionario no accedido"));
}

function reiniciarJuego(){
    if(cantLetras == null) crearCajas(cantLetras);
    filasEnBlanco();
    lineaActual = 0;
    document.querySelector(".youWin").style.visibility = "hidden";
    document.querySelector(".youLose").style.visibility = "hidden";
    botonVolverAJugar.style.display = "none";
    vidas = 6;
    comenzarJuego();
    letraActual = 0;
}

async function comenzarJuego(){
    lineaActual = 0;
    await leerDiccionario();
    borderColorBoxes();
    botonComenzarJuego.style.display = 'none';
    comenzarJuegoBool = true;
    generarPalabraAleatoria();
}

function generarPalabraAleatoria(){
    palabraFiltrada = arrayDiccionario.filter(palabra => palabra.length === cantLetras && /^[a-zA-Z0-9]+$/.test(palabra));
    palabraAleatoria = palabraFiltrada[Math.floor(Math.random() * palabraFiltrada.length)].toUpperCase();
    console.log(palabraAleatoria);
}

function filasEnBlanco(){
    for(let j=0; j<6; j++){
        for(let i=0; i<cantLetras;i++){
            filas.children[j].children[i].innerHTML = '';
            filas.children[j].children[i].style.backgroundColor = "#e7e6e9";
            filas.children[j].children[i].style.borderColor = "#31373d";
        }
    }
}

function pasarDeLinea(){
    if(comprobarDiccionario() && letraActual == cantLetras){
        correctChar();
        if(comprobarIgualdadDePalabra()){
            document.querySelector(".youWin").style.visibility = "visible";
            botonVolverAJugar.style.display = "flex";
            comenzarJuegoBool = false;
        }else{
            clearBorderColorBoxes();
            vidas -= 1;
            lineaActual++;
            borderColorBoxes();
            palabraEscrita.forEach(el => el = ' ');
            letraActual = 0;
        }
        if(!(comprobarIgualdadDePalabra()) && lineaActual==6 && vidas == 0){
            clearBorderColorBoxes();
            document.querySelector(".youLose").style.visibility = "visible";
            document.getElementById("youLoseStringJS").textContent = "LA PALABRA ERA "+palabraAleatoria;
            botonVolverAJugar.style.display = "flex";
        }
    }else{
        shakeColorBoxes();
        cajas = document.querySelector(".word__boxes__section").children[lineaActual];
        cajas.classList.toggle('shake');
        setTimeout(function(){
            cajas.classList.toggle('shake');
        }, 2000);
    }
}

function changeShakeColor(){
    if(it == 0){
        borderColorBoxes();
        it = 1;
    }else{
        borderColorBoxesRed();
        it = 0;
    }
    itAux++;
    if(itAux == 10){
        itAux=0;
        stopShakeColorBoxes();
        borderColorBoxes();
    }
}

function shakeColorBoxes(){
    if(!intervalShake){
        changeShakeColor();
        intervalShake = setInterval(changeShakeColor,150);
    }
}

function stopShakeColorBoxes() {
    clearInterval(intervalShake);
    intervalShake = null;
}

function comprobarDiccionario(){
    return !arrayDiccionario.includes(palabraEscrita.join(""));
}

//Dorado
function borderColorBoxes(){
    if(!(lineaActual == 6)){
        for(let i=0;i<cantLetras;i++){
            filas.children[lineaActual].children[i].style.borderColor = "#e7aa1e";
        }
    }
}
//Rojo
function borderColorBoxesRed(){
    if(!(lineaActual == 6)){
        for(let i=0;i<cantLetras;i++){
            filas.children[lineaActual].children[i].style.borderColor = "#E63234";
        }
    }
}

function clearBorderColorBoxes(){
    if(!(lineaActual == 6)){
        for(let i=0;i<cantLetras;i++){
            filas.children[lineaActual].children[i].style.borderColor = "#31373d";
        }
    }
}

function setCantLetras(n){
    cantLetras = n;
}

function comprobarIgualdadDePalabra(){
    return palabraAleatoria == palabraEscrita.join("");
}

function existeChar(c){
    return(palabraAleatoria.includes(c));
}

function puedePintar(c){
	return palabraAux.includes(c);
}

function quitarLetra(c){
    if(palabraAux.includes(c)){
        let  ind = palabraAux.indexOf(c);
        palabraAux.splice(ind,1);
    }
}

function correctChar(){
    let palabraBlanca = new Array;
    palabraEscrita.forEach(elem => palabraBlanca.push(elem));
    palabraAux = palabraAleatoria.split("");

    for(let i=0;i<cantLetras;i++){
        if(palabraEscrita[i] == palabraAleatoria[i]){
            palabraBlanca[i] = 'v';
            quitarLetra(palabraEscrita[i]);
        }
    }

    for(let i=0;i<cantLetras;i++){
        if(existeChar(palabraEscrita[i]) && puedePintar(palabraBlanca[i]) ){
            palabraBlanca[i] = 'a';
            quitarLetra(palabraEscrita[i]);
        }
    }

    for(let i=0;i<cantLetras;i++){
        if(palabraBlanca[i] == 'v'){
            filas.children[lineaActual].children[i].style.backgroundColor = "#78b15a";
        }else if(palabraBlanca[i] == 'a'){
            filas.children[lineaActual].children[i].style.backgroundColor = "#fdcb58";
        }else{
            filas.children[lineaActual].children[i].style.backgroundColor = "#838384";
        }
    }
    palabraAux = [];
}

window.addEventListener("keydown", (e) => {
    if(comenzarJuegoBool == true){
        if (!e.repeat && e.key >= 'a' && e.key <= 'z' && letraActual < cantLetras || e.key == 'ñ') {
            filas.children[lineaActual].children[letraActual].innerHTML = e.key.toUpperCase();
            console.log(e.key.toUpperCase());
            palabraEscrita[letraActual] = e.key.toUpperCase();
            letraActual++;
        }
        if(!e.repeat && e.code == 'Backspace' && letraActual > 0){
            filas.children[lineaActual].children[letraActual-1].innerHTML = ' ';
            palabraEscrita[letraActual-1] = '-';
            letraActual--;
        }
        if (!e.repeat && e.code == 'Enter'){
            console.log('Enter');
            pasarDeLinea();
        }
    }
});