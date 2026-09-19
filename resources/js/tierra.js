const scene = document.querySelector('.scene');
const starsContainer = document.querySelector('.stars');
const startButton = document.getElementById('start-btn');

const STAR_COUNT = 150;

const storyButton =
    document.getElementById('story-btn');

const musicTierra =
    document.getElementById('music-tierra');

const storyTierra =
    document.getElementById('story-tierra');
// ========================================
// ESTRELLAS
// ========================================

for (let i = 0; i < STAR_COUNT; i++) {

    const star = document.createElement('div');

    star.classList.add('star');

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    const size = 0.5 + Math.random() * 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const opacity = 0.25 + Math.random() * 0.75;

    star.style.setProperty('--star-opacity', opacity);

    const duration = 2 + Math.random() * 5;

    const delay = Math.random() * 5;

    star.style.setProperty(
        '--twinkle-duration',
        `${duration}s`
    );

    star.style.setProperty(
        '--twinkle-delay',
        `${delay}s`
    );

    starsContainer.appendChild(star);
}


// ========================================
// ESTRELLAS FUGACES
// ========================================

function createShootingStar() {

    const star = document.createElement('div');

    star.classList.add('shooting-star');

    const startX =
        Math.random() * window.innerWidth;

    const startY =
        Math.random() *
        window.innerHeight *
        0.75;

    const length =
        70 + Math.random() * 180;

    const duration =
        500 + Math.random() * 1200;

    const angle =
        15 + Math.random() * 30;

    star.style.left = `${startX}px`;

    star.style.top = `${startY}px`;

    star.style.width = `${length}px`;

    star.style.animationDuration =
        `${duration}ms`;

    star.style.transform =
        `rotate(${angle}deg)`;

    scene.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration + 100);
}


const shootingStarsInterval =
    setInterval(() => {

        createShootingStar();

        if (Math.random() < 0.25) {
            createShootingStar();
        }

    }, 250);


// ========================================
// ESTRELLA ESPECIAL
// ========================================

function createSpecialStar() {

    const star =
        document.createElement('div');

    star.classList.add('special-star');

    star.style.left =
        `${Math.random() * 90 + 5}%`;

    star.style.top =
        `${Math.random() * 65 + 5}%`;

    scene.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);
}


const specialStarInterval =
    setInterval(() => {

        createSpecialStar();

    }, 5000);


// ========================================
// COMENZAR VIAJE
// ========================================
// ========================================
// INICIAR HISTORIA
// ========================================

storyButton.addEventListener('click', () => {

    storyButton.disabled = true;
    storyButton.style.pointerEvents = 'none';

    // Instrumental empieza bajito
    musicTierra.volume = 0.2;

    musicTierra.play().catch(error => {
        console.error('Error al reproducir la música:', error);
    });

    // Inicia la narración
    storyTierra.play().catch(error => {
        console.error('Error al reproducir la narración:', error);
    });

});


// ========================================
// TERMINA LA NARRACIÓN
// SUBE EL INSTRUMENTAL
// ========================================

storyTierra.addEventListener('ended', () => {

    const volumenFinal = 0.8;
    const duracionFade = 3000;

    const volumenInicial = musicTierra.volume;
    const pasos = 60;
    const incremento =
        (volumenFinal - volumenInicial) / pasos;

    let paso = 0;

    const fadeIn = setInterval(() => {

        paso++;

        musicTierra.volume =
            volumenInicial + (incremento * paso);

        if (paso >= pasos) {

            musicTierra.volume = volumenFinal;

            clearInterval(fadeIn);
        }

    }, duracionFade / pasos);

});

startButton.addEventListener('click', () => {

    // Evitar doble clic
    startButton.disabled = true;
    startButton.style.pointerEvents = 'none';


    // Detener nuevas estrellas fugaces
    clearInterval(shootingStarsInterval);
    clearInterval(specialStarInterval);


    // ====================================
    // 0s
    // ZOOM HACIA LA TIERRA
    // ====================================

    scene.classList.add('zoom-earth');


    // ====================================
    // 2.5s
    // PANTALLA NEGRA
    // ====================================

    setTimeout(() => {

        scene.classList.add('black-screen');

    }, 2500);


    // ====================================
    // 3.5s
    // PREPARAMOS EL CAMPO
    // MIENTRAS TODO SIGUE NEGRO
    // ====================================

    setTimeout(() => {

        scene.classList.remove('zoom-earth');

        scene.classList.add('field-mode');

    }, 3500);


    // ====================================
    // 4.5s
    // QUITAMOS EL NEGRO
    // APARECE EL CAMPO
    // ====================================

    setTimeout(() => {

        scene.classList.remove('black-screen');

    }, 4500);


    // ====================================
    // 5.8s
    // APARECE LA NAVE
    // ====================================

    setTimeout(() => {

        scene.classList.add('launch');

    }, 5800);


    // ====================================
    // 10s
    // IR A LA SIGUIENTE PÁGINA
    // ====================================

    setTimeout(() => {

        window.location.href = '/viaje';

    }, 10000);

});