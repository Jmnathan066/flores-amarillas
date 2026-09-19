const starsContainer =
    document.querySelector('.stars');


const musicViaje =
    document.getElementById('music-viaje');

const storyViaje =
    document.getElementById('story-viaje');


// ========================================
// MÚSICA + NARRACIÓN
// ========================================

musicViaje.volume = 0.2;

musicViaje.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay:',
        error
    );
});

storyViaje.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay de la narración:',
        error
    );
});


// ========================================
// TERMINA LA NARRACIÓN
// SUBE EL INSTRUMENTAL
// ========================================

storyViaje.addEventListener('ended', () => {

    const volumenFinal = 0.8;
    const duracionFade = 3000;

    const volumenInicial =
        musicViaje.volume;

    const pasos = 60;

    const incremento =
        (volumenFinal - volumenInicial) / pasos;

    let paso = 0;

    const fadeIn = setInterval(() => {

        paso++;

        musicViaje.volume =
            volumenInicial +
            (incremento * paso);

        if (paso >= pasos) {

            musicViaje.volume =
                volumenFinal;

            clearInterval(fadeIn);
        }

    }, duracionFade / pasos);

});

/* ========================================
   CAMPO DE ESTRELLAS CON PROFUNDIDAD
======================================== */

const STAR_COUNT = 260;

for (let i = 0; i < STAR_COUNT; i++) {

    const star =
        document.createElement('div');

    star.classList.add('star');


    // Profundidad aleatoria
    const depth =
        Math.random();


    // Posición
    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;


    // Tamaño según profundidad
    let size;

    if (depth < 0.55) {

        // Estrellas lejanas
        size =
            0.4 + Math.random() * 0.8;

    } else if (depth < 0.88) {

        // Estrellas medias
        size =
            0.8 + Math.random() * 1.3;

    } else {

        // Estrellas cercanas
        size =
            1.5 + Math.random() * 2;

    }

    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;


    // Brillo según profundidad
    let opacity;

    if (depth < 0.55) {

        opacity =
            0.15 + Math.random() * 0.3;

    } else if (depth < 0.88) {

        opacity =
            0.35 + Math.random() * 0.45;

    } else {

        opacity =
            0.65 + Math.random() * 0.35;

    }

    star.style.setProperty(
        '--opacity',
        opacity
    );


    // Velocidad del parpadeo
    const duration =
        depth > 0.88
            ? 1.5 + Math.random() * 3
            : 2.5 + Math.random() * 5;

    const delay =
        Math.random() * 5;

    star.style.setProperty(
        '--duration',
        `${duration}s`
    );

    star.style.setProperty(
        '--delay',
        `${delay}s`
    );


    // Guardamos la profundidad
    star.dataset.depth =
        depth;


    starsContainer.appendChild(star);
}




/* ========================================
   ESTRELLAS FUGACES
======================================== */

function createShootingStar() {

    const star =
        document.createElement('div');

    star.classList.add('shooting-star');


    // Posición inicial aleatoria
    const startX =
        Math.random() * window.innerWidth;

    const startY =
        Math.random() *
        window.innerHeight *
        0.75;


    // Tamaño aleatorio
    const length =
        80 + Math.random() * 180;

    star.style.width =
        `${length}px`;


    // Dirección
    const angle =
        15 + Math.random() * 30;

    star.style.setProperty(
        '--angle',
        `${angle}deg`
    );


    // Distancia
    const distance =
        250 + Math.random() * 350;

    star.style.setProperty(
        '--distance-x',
        `-${distance}px`
    );

    star.style.setProperty(
        '--distance-y',
        `${distance}px`
    );


    // Velocidad
    const duration =
        700 + Math.random() * 1000;

    star.style.animation =
        `shootingStar ${duration}ms linear forwards`;


    star.style.left =
        `${startX}px`;

    star.style.top =
        `${startY}px`;


    document
        .querySelector('.space-scene')
        .appendChild(star);


    // Eliminar cuando termine
    setTimeout(() => {

        star.remove();

    }, duration + 100);
}


/* ========================================
   APARICIÓN ALEATORIA
======================================== */

function scheduleShootingStar() {

    const delay =
        2500 + Math.random() * 5000;


    setTimeout(() => {

        createShootingStar();

        scheduleShootingStar();

    }, delay);
}

/* ========================================
   FRASES DEL VIAJE
======================================== */

const messageTop =
    document.getElementById('message-top');

const messageBottom =
    document.getElementById('message-bottom');


/* ========================================
   PARES DE FRASES
======================================== */

const messages = [
    {
        top: "Y entre tantas posibilidades...",
        bottom: "sigues siendo mi coincidencia favorita."
    },

    {
        top: "Tal vez el destino no escriba historias.",
        bottom: "Tal vez solo nos deja encontrarnos."
    },

    {
        top: "Si el universo es infinito...",
        bottom: "q suerte la mía haber coincidido contigo."
    },

    {
        top: "Dicen que somos polvo de estrellas.",
        bottom: "Supongo q por eso tú brillas tanto."
    },

    {
        top: "El universo tardó millones de años en existir.",
        bottom: "Y a mí me bastó conocerte para entender la belleza."
    },

    {
        top: "Si todo en el universo está hecho de materia...",
        bottom: "¿de q estará hecho eso que me haces sentir?"
    },

    {
        top: "Hay infinitos q pueden medirse.",
        bottom: "Y otros q simplemente se sienten."
    }
];


let messageIndex = 0;
let firstTouch = true;


const nextButton =
    document.getElementById('next-button');

/* ========================================
   CAMBIAR FRASES
======================================== */
function changeMessage() {

    /* ========================================
       PRIMER TOQUE
    ======================================== */

    if (firstTouch) {

        firstTouch = false;

        // Desaparece "Toca la pantalla"
        messageTop.classList.remove('visible');

        setTimeout(() => {

            // Primera frase
            messageTop.textContent =
                messages[messageIndex].top;

            messageBottom.textContent =
                messages[messageIndex].bottom;

            // Aparecen las dos
            messageTop.classList.add('visible');
            messageBottom.classList.add('visible');

            messageIndex++;

        }, 900);

        return;
    }


    /* ========================================
       SIGUIENTES TOQUES
    ======================================== */

    messageTop.classList.remove('visible');
    messageBottom.classList.remove('visible');


    setTimeout(() => {

        messageTop.textContent =
            messages[messageIndex].top;

        messageBottom.textContent =
            messages[messageIndex].bottom;

        messageTop.classList.add('visible');
        messageBottom.classList.add('visible');

        messageIndex++;


        /* ========================================
           TERMINÓ LA HISTORIA
        ======================================== */

        if (messageIndex >= messages.length) {

            messageIndex = 0;

            setTimeout(() => {

                nextButton.classList.add('visible');

            }, 2000);
        }

    }, 900);
}

/* ========================================
   TOCAR LA PANTALLA
======================================== */

document
    .querySelector('.space-scene')
    .addEventListener(
        'click',
        changeMessage
    );


    