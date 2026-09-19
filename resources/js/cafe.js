/* ========================================
   CAFÉ
======================================== */

const cup =
    document.getElementById('cup');

const storyText =
    document.getElementById('story-text');

const nextButton =
    document.getElementById('next-button');

const musicCafe =
    document.getElementById('music-cafe');

const storyCafe =
    document.getElementById('story-cafe');


// ========================================
// MÚSICA + NARRACIÓN
// ========================================

musicCafe.volume = 0.2;

musicCafe.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay:',
        error
    );
});

storyCafe.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay de la narración:',
        error
    );
});


// ========================================
// TERMINA LA NARRACIÓN
// SUBE EL INSTRUMENTAL
// ========================================

storyCafe.addEventListener('ended', () => {

    const volumenFinal = 0.8;
    const duracionFade = 3000;

    const volumenInicial =
        musicCafe.volume;

    const pasos = 60;

    const incremento =
        (volumenFinal - volumenInicial) / pasos;

    let paso = 0;

    const fadeIn = setInterval(() => {

        paso++;

        musicCafe.volume =
            volumenInicial +
            (incremento * paso);

        if (paso >= pasos) {

            musicCafe.volume =
                volumenFinal;

            clearInterval(fadeIn);
        }

    }, duracionFade / pasos);

});
/* ========================================
   NARRACIÓN
======================================== */

const narration = [

    "Después de tanto tiempo viajando, la pequeña estrella encontró algo que no había encontrado en ningún planeta.",

    "Un lugar donde no tenía que seguir buscando.",

    "Se sentó junto a la ventana, tomó una taza de café y escuchó aquella canción que parecía conocer desde siempre.",

    "Afuera, el universo continuaba moviéndose.",

    "Pero por un momento... decidió quedarse quieta."

];


let narrationIndex = 0;
let started = false;


/* ========================================
   TOCAR LA TAZA
======================================== */

cup.addEventListener('click', () => {

    if (started) return;

    started = true;


    /* Movimiento de la taza */

    cup.style.transform =
        'translateX(-50%) translateY(-8px)';


    /* Mostrar primera narración */

    setTimeout(() => {

        storyText.textContent =
            narration[narrationIndex];

        storyText.style.opacity = '1';


        /* Mostrar flecha */

        setTimeout(() => {

            nextButton.classList.add('visible');

        }, 3000);

    }, 800);

});