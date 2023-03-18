const botonDemoWordleGame = document.getElementById('boton-demo-wordlegame');
const botonDemoAhorcado = document.getElementById('boton-demo-ahorcado');
const botonDemoEncriptar = document.getElementById('boton-demo-encriptar');
const botonMenu = document.getElementById('boton-menu');
const menu = document.querySelector('.menu');
const menuLista = document.querySelector('.menu__lista');

botonDemoWordleGame.onclick = function (){
  window.location.href = "../indexWordleGame.html";
}

botonDemoEncriptar.onclick = function (){
  window.location.href = "../indexEncriptador.html";
}

botonDemoAhorcado.onclick = function (){
  window.location.href = "../indexAhorcado.html"
}

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.style.opacity = '0.95';
  } else {
    menu.style.opacity = '1';
  }
});

const menuItems = document.querySelectorAll('.menu__item');

botonMenu.addEventListener('click', function() {
  menuLista.classList.toggle('menu__lista--active');
});

botonMenu.addEventListener('click', function() {
    const menuItems = document.querySelectorAll('.menu__item');
    menuItems.forEach(item => {
        if (item.style.display === "block") item.style.display = "none";
        else item.style.display = "block";
    });
});

window.addEventListener('resize', function() {
    const menuItems = document.querySelectorAll('.menu__item');
    if (window.innerWidth > 768) {
        menuItems.forEach(item => {
            if (item.style.display === "none") item.style.display = "block";
        });
    }

    if (window.innerWidth <= 768) {
        menuItems.forEach(item => {
            if (item.style.display === "block") item.style.display = "none";
        });
    }
});

// Agregar evento de clic a los elementos con la clase .menu__item
document.querySelectorAll('.menu__item').forEach(function(item) {
    item.addEventListener('click', function() {
      // Obtener el valor del atributo data-target
      var target = this.getAttribute('data-target');
      // Verificar si existe el elemento con el id especificado en el data-target
      var element = document.querySelector(target);
      if (element) {
        // Obtener la posición del elemento en la página
        var offsetTop = element.offsetTop;
        // Hacer el desplazamiento suave
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            const menuItems = document.querySelectorAll('.menu__item');
            menuItems.forEach(item => {
                if (item.style.display === "block") item.style.display = "none";
                else item.style.display = "block";
            });
        }
      } else {
        // Si el elemento no existe, redireccionar a la URL especificada en el href
        window.location.href = this.querySelector('.menu__link').getAttribute('href');
      }
    });
});