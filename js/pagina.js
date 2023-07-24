document.addEventListener('DOMContentLoaded', function() {
    iniciarApp(); 
});

function iniciarApp() {
    navegacionFija();
    scrollNav();
}

function navegacionFija () {
    const barra = document.querySelector('.barra');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() { // cuando se haga el evento de scroll en la ventana de windows se va a ejecutar la funcion
        if (header.getBoundingClientRect().bottom < 1 ) { // .getBoundingClientRect()método devuelve un DOMRect, objeto que proporciona información sobre el tamaño de un elemento y su posición relativa a la ventana gráfica .
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.enlace-navegacion');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll); 
            seccion.scrollIntoView( { behavior: 'smooth'} );
        });
    });
}