const botonCantidad4Letras = document.getElementById('boton__cantidad__letras4');
const botonCantidad5Letras = document.getElementById('boton__cantidad__letras5');
const botonCantidad6Letras = document.getElementById('boton__cantidad__letras6');
const botonesCantidad = document.styleSheets;
const botonRendirse = document.getElementById('boton__rendirse');
const botonComenzarJuego = document.getElementById('boton__empezar__jugar');
const botonVolverAJugar = document.getElementById('boton__volver__jugar');
const botonVolverPag = document.getElementById('boton__pagina__principal');
const botonVolverAtras = document.getElementById('boton__volver__atras');

const sectionFilas = document.getElementById('filas');


botonCantidad4Letras.addEventListener('click', () => {
    crearCajas(4);
    comenzarJuego;
});

botonCantidad5Letras.addEventListener('click', () => {
    crearCajas(5);
    comenzarJuego;
});

botonCantidad6Letras.addEventListener('click', () => {
    crearCajas(6);
    comenzarJuego;
});

botonVolverPag.addEventListener('click', () =>{
    window.location.href = "../index.html#boton-demo-ahorcado";
});

botonVolverAtras.addEventListener('click', () =>{
    if(cantLetras != null){
        document.styleSheets[9].cssRules[0].style.display = 'none';
        document.styleSheets[11].cssRules[0].style.display = 'flex';
        document.styleSheets[10].cssRules[0].style.display = 'flex';
        borrarCajas();
        cantLetras = null;
        document.querySelector(".boton__volver__atras").style.visibility = "hidden";
        GenerateBotonsBar();
    }else{
        
    }
});

function crearCajas(n){
    setCantLetras(n);
    let i = 0 ;
    while(i<6){
        let primerDiv = sectionFilas.appendChild(document.createElement('div'));
        primerDiv.className = 'word__boxes__box';
        let j = 0;
        while(j < cantLetras){
            let segundoDiv = primerDiv.appendChild(document.createElement('div',{'class':'word__boxes__letter'}));
            segundoDiv.className = 'word__boxes__letter';
            j++;
        }
        i++;
    }
    comenzarJuego();
    document.querySelector(".boton__volver__atras").style.visibility = "visible";
    document.styleSheets[11].cssRules[0].style.display = 'none';
    document.styleSheets[10].cssRules[0].style.display = 'none';
    document.styleSheets[9].cssRules[0].style.display = 'flex';
}

function crearCajasInicio(n){
    setCantLetras(n);
    let i = 0 ;
    while(i<6){
        let primerDiv = sectionFilas.appendChild(document.createElement('div'));
        primerDiv.className = 'word__boxes__box';
        let j = 0;
        while(j < cantLetras){
            let segundoDiv = primerDiv.appendChild(document.createElement('div',{'class':'word__boxes__letter'}));
            segundoDiv.className = 'word__boxes__letter';
            j++;
        }
        i++;
    }
    document.getElementById("filas").style.opacity = .35;
    document.getElementById("filas").style.position = 'absolute';
    document.getElementById("filas").style.width = '50%';
    document.getElementById("filas").style.height = '10%';
    document.getElementById("filas").style.transform = 'translate(50%, -50%)';
}

botonRendirse.addEventListener('click', (e) => {
    GenerateBotonsBar();
    removeAlphabetButtons();
    document.querySelector(".youLose").style.visibility = "visible";
    document.getElementById("youLoseStringJS").textContent = palabraAleatoria;

    botonVolverAJugar.style.display = "flex";
});

function borrarCajas(){
    while(sectionFilas.firstChild){
        sectionFilas.removeChild(sectionFilas.firstChild);
    }
}

function elegirModoDeJuego(){
    borrarCajas();
    document.getElementById("filas").style.opacity = 'inherit';
    document.getElementById("filas").style.position = 'inherit';
    document.getElementById("filas").style.width = 'inherit';
    document.getElementById("filas").style.height = 'inherit';
    document.getElementById("filas").style.transform = 'inherit';
    document.styleSheets[11].cssRules[0].style.display = 'flex';
    document.styleSheets[10].cssRules[0].style.display = 'flex';
    document.styleSheets[7].cssRules[0].style.display = 'none';
}

botonVolverAJugar.onclick = reiniciarJuego;
botonComenzarJuego.onclick = elegirModoDeJuego;