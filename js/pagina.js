// nav fija

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
    const enlaces = document.querySelectorAll('.nav');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll); 
            seccion.scrollIntoView( { behavior: 'smooth'} );
        });
    });
}

// nav responsive
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navegacion');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('activado');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('activado');
};

// slider
$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});