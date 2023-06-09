var wasCreated = false;

function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isSmallScreen() {
    return window.innerWidth <= 768;
}

// Generar botones del abecedario
function generateAlphabetButtons() {
  var container = document.getElementById("container");
  container.style.visibility = "visible";
  var letters = "QWERTYUIOPASDFGHJKLdZXCVBNMe".split("");
 
  for (var i = 0; i < letters.length; i++) {
    if(letters[i] === "d"){
        var btn = document.createElement("button");
        btn.innerHTML = "←";
        btn.classList.add("btn");
        btn.setAttribute("id", "del");
        container.appendChild(btn);
    }else if(letters[i] === "e"){
        var btn = document.createElement("button");
        btn.innerHTML = "↵";
        btn.classList.add("btn");
        btn.setAttribute("id", "intro");
        container.appendChild(btn);
    }else{
        var btn = document.createElement("button");
        btn.innerHTML = letters[i];
        btn.classList.add("btn");
        container.appendChild(btn);
    }

    btn.addEventListener("click", function() {
        var letter = this.innerHTML;
        var id = this.id;
        if(comenzarJuegoBool == true){
            if (letraActual < cantLetras && id == ''){
                filas.children[lineaActual].children[letraActual].innerHTML = letter;
                palabraEscrita[letraActual] = letter;
                letraActual++;
            }
            if(id == "del" && letraActual > 0){
                filas.children[lineaActual].children[letraActual-1].innerHTML = ' ';
                palabraEscrita[letraActual-1] = '-';
                letraActual--;
            }
            if (id == "intro"){
                pasarDeLinea();
            }
        }
    });
    
    wasCreated = true;
  }
}

function removeAlphabetButtons() {
    const alphabetButtons = document.querySelectorAll(".btn");
    var container = document.getElementById("container");
    container.style.visibility = "hidden";
    for (let i = 0; i < alphabetButtons.length; i++) {
      alphabetButtons[i].remove();
    }
    wasCreated = false;
}

function GenerateBotonsBar(){
    if ((isSmallScreen() && wasCreated == false) || (isMobileOrTablet() && wasCreated == false)) {
        generateAlphabetButtons();
    }else{
        removeAlphabetButtons();
    }
}