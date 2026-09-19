/* ========================================
   UNIVERSO
======================================== */

const scene =
    document.querySelector('.universe-scene');

const light =
    document.querySelector('.mysterious-light');

const planet =
    document.querySelector('.flower-planet');

const spaceship =
    document.querySelector('.spaceship');

const storyText =
    document.getElementById('story-text');

const transition =
    document.getElementById('transition');

const nextButton =
    document.getElementById('next-button');


const musicUniverso =
    document.getElementById('music-universo');

const storyUniverso =
    document.getElementById('story-universo');


// ========================================
// MÚSICA + NARRACIÓN
// ========================================

musicUniverso.volume = 0.2;

musicUniverso.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay:',
        error
    );
});

storyUniverso.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay de la narración:',
        error
    );
});


// ========================================
// TERMINA LA NARRACIÓN
// SUBE EL INSTRUMENTAL
// ========================================

storyUniverso.addEventListener('ended', () => {

    const volumenFinal = 0.8;
    const duracionFade = 3000;

    const volumenInicial =
        musicUniverso.volume;

    const pasos = 60;

    const incremento =
        (volumenFinal - volumenInicial) / pasos;

    let paso = 0;

    const fadeIn = setInterval(() => {

        paso++;

        musicUniverso.volume =
            volumenInicial +
            (incremento * paso);

        if (paso >= pasos) {

            musicUniverso.volume =
                volumenFinal;

            clearInterval(fadeIn);
        }

    }, duracionFade / pasos);

});
let started = false;


/* ========================================
   INICIO
======================================== */

scene.addEventListener('click', () => {

    if (started) return;

    started = true;


    /* La luz comienza a brillar */

    light.style.animation =
        'lightPulse 1.5s ease-in-out infinite';


    /* La nave se acerca */

    spaceship.style.animation =
        'approachPlanet 6s ease-in-out forwards';


    /* Ocultar historia */

    storyText.style.opacity = '0';


    /*
     * Esperamos a que la nave
     * termine de acercarse.
     */

    setTimeout(() => {

        /* La luz se hace más intensa */

        light.style.transform =
            'translate(-50%, -50%) scale(2.5)';

        light.style.opacity = '1';


        /*
         * Después hacemos el
         * destello hacia negro.
         */

        setTimeout(() => {

            transition.classList.add('visible');

        }, 1200);


        /*
         * Cuando la pantalla ya está negra,
         * preparamos el descubrimiento.
         */

        setTimeout(() => {

            light.style.display = 'none';

            spaceship.style.display = 'none';

            planet.style.opacity = '1';

            planet.style.transform =
                'translate(-50%, -50%) scale(1.15)';

        }, 3300);


        /*
         * Dejamos respirar la escena
         * y mostramos la flecha.
         */

        setTimeout(() => {

            transition.classList.remove('visible');

        }, 4200);


        setTimeout(() => {

            nextButton.classList.add('visible');

        }, 6000);

    }, 6000);

});

/* ========================================
   IR A FLORES
======================================== */

nextButton.addEventListener('click', (event) => {

    event.preventDefault();

    /* Ocultar la flecha */

    nextButton.classList.remove('visible');


    /* Zoom al planeta */

    planet.style.transition =
        'transform 2.5s cubic-bezier(.22, 1, .36, 1)';

    planet.style.transform =
        'translate(-50%, -50%) scale(4)';


    /* Después del zoom comienza el negro */

    setTimeout(() => {

        transition.classList.add('visible');

    }, 1800);


    /* Finalmente vamos a /flores */

    setTimeout(() => {

        window.location.href = '/flores';

    }, 3500);

});