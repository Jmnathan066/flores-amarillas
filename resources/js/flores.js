const seed = document.getElementById('seed');
const tree = document.getElementById('tree');
const seedImpact = document.getElementById('seed-impact');
const flowersContainer = document.getElementById('flowers-container');
const floatingPetals = document.getElementById('floating-petals');

const musicFlores =
    document.getElementById('music-flores');

const storyFlores =
    document.getElementById('story-flores');


// ========================================
// MÚSICA + NARRACIÓN
// ========================================

musicFlores.volume = 0.2;

musicFlores.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay:',
        error
    );
});

storyFlores.play().catch(error => {
    console.log(
        'El navegador bloqueó el autoplay de la narración:',
        error
    );
});


// ========================================
// TERMINA LA NARRACIÓN
// SUBE EL INSTRUMENTAL
// ========================================

storyFlores.addEventListener('ended', () => {

    const volumenFinal = 0.8;
    const duracionFade = 3000;

    const volumenInicial =
        musicFlores.volume;

    const pasos = 60;

    const incremento =
        (volumenFinal - volumenInicial) / pasos;

    let paso = 0;

    const fadeIn = setInterval(() => {

        paso++;

        musicFlores.volume =
            volumenInicial +
            (incremento * paso);

        if (paso >= pasos) {

            musicFlores.volume =
                volumenFinal;

            clearInterval(fadeIn);
        }

    }, duracionFade / pasos);

});
// =========================================
// SEMILLA → ÁRBOL
// =========================================

setTimeout(() => {

    seed.classList.add('hidden');

    seedImpact.classList.add('active');

    setTimeout(() => {
        tree.classList.add('growing');
    }, 350);

}, 6300);


// =========================================
// CREAR CORAZÓN DE FLORES
// =========================================

function createFlowers() {

    const flowers = [];

    const totalFlowers = 700;

    for (let i = 0; i < totalFlowers; i++) {

        let x;
        let y;

        do {

            x = (Math.random() * 2.5) - 1.25;
            y = (Math.random() * 2.5) - 1.25;

        } while (
            Math.pow(
                Math.pow(x, 2) + Math.pow(y, 2) - 1,
                3
            )
            -
            Math.pow(x, 2) * Math.pow(y, 3)
            > 0
        );


        const flower = document.createElement('div');

        flower.classList.add('flower');


        const centerX = 50;
        const centerY = 43;

        const width = 20;
        const height = 19;


        const screenX =
            centerX + (x * width);

        const screenY =
            centerY - (y * height);


        flower.style.left = `${screenX}%`;
        flower.style.top = `${screenY}%`;


        const size =
            0.55 + Math.random() * 0.7;

        flower.style.width = `${7 * size}px`;
        flower.style.height = `${7 * size}px`;


        flowersContainer.appendChild(flower);

        flowers.push(flower);
    }


    flowers.forEach((flower, index) => {

        setTimeout(() => {

            flower.classList.add('visible');

        }, index * 12);

    });
}


setTimeout(() => {

    createFlowers();

}, 9300);


// =========================================
// PÉTALOS VOLANDO
// =========================================

function createFloatingPetal() {

    const petal = document.createElement('div');

    petal.classList.add('floating-petal');


    // Posición inicial
    petal.style.left =
        `${25 + Math.random() * 50}%`;

    petal.style.top =
        `${35 + Math.random() * 30}%`;


    // Tamaño
    const size =
        0.7 + Math.random() * 0.6;

    petal.style.width =
        `${10 * size}px`;

    petal.style.height =
        `${10 * size}px`;


// Dirección del viento
const driftX =
    Math.random() * 80 - 40;

const driftY =
    -(10 + Math.random() * 45);

const rotation =
    Math.random() * 720 - 360;

petal.style.setProperty(
    '--drift-x',
    `${driftX}vw`
);

petal.style.setProperty(
    '--drift-y',
    `${driftY}vh`
);

petal.style.setProperty(
    '--rotation',
    `${rotation}deg`
);

    // Duración
    const duration =
        8 + Math.random() * 5;

    petal.style.setProperty(
        '--duration',
        `${duration}s`
    );


    floatingPetals.appendChild(petal);


    // Eliminar cuando termina
    setTimeout(() => {

        petal.remove();

    }, duration * 1000);
}


// =========================================
// INICIAR PÉTALOS
// =========================================

setTimeout(() => {

    // Primeros pétalos
    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            createFloatingPetal();

        }, i * 400);
    }


    // Después siguen apareciendo
    setInterval(() => {

        createFloatingPetal();

    }, 1000);

}, 18000);

/* =========================================
   CARTA
========================================= */

const letter = document.getElementById('letter');
const letterText = document.getElementById('letter-text');

const letterParts = [

    `Hay personas que llegan a nuestra vida...

y, sin siquiera proponérselo,

hacen que los días más normales
parezcan tener un poco más de luz.`,

    `Tú eres una de esas personas, hermosa.`,

    `Por eso quise que al llegar aquí
te encontraras con todo un árbol de flores amarillas,
hecho para ti.`,

    `Porque no quería simplemente regalarte flores...

quería regalarte un pequeño pedacito de belleza,
un lugar que pudiera decirte, sin necesidad de palabras,

que mereces cosas bonitas.`,

    `Mereces que te quieran bonito.
Que te cuiden.
Que te hagan sonreír
incluso cuando no lo estés esperando.`,

    `Mereces sentirte especial,
incluso en aquellos días
en los que tú misma puedas olvidarlo.`,

    `Y sí, reina preciosa...

también mereces que alguien se detenga,
aunque sea por un instante,
a recordarte lo hermosa que eres.`,

    `Y no hablo solamente de tus ojitos,
de tu sonrisa,
ni de esa forma tan tuya
de hacerte querer.`,

    `Hablo de la mujer que eres.

De tu manera de sentir.
De tu manera de soñar.
De la forma en que sigues adelante.
De todo aquello que te hace ser tú.`,

    `Y quizá por eso existen estas flores.`,

    `Porque si pudiera transformar en flores
cada cosa bonita que encuentro en ti...

si pudiera convertir cada sonrisa,
cada recuerdo,
cada pequeño detalle
en una de ellas...

creo que este planeta
no tendría espacio suficiente.`,

    `Te amo.`,

    `Y aunque esas dos palabras
parezcan tan pequeñas...

hay sentimientos que simplemente
no caben dentro de ellas.`,

    `Porque a veces te amo
es lo único que encuentro para decir
cuando quiero explicarte
lo mucho que significas para mí.`,

    `Así que quédate con todas estas flores, linda.

Son para ti.`,

    `No porque puedan decir todo lo que mereces...

sino porque quiero que,
cada vez que las mires,
recuerdes que en algún lugar de este universo

hay alguien que piensa
que eres extraordinariamente especial.`,

    `Y que, por más flores que existan...

ninguna alcanzaría para hacerte justicia.`
];

let letterPartIndex = 0;

function typeLetterPart() {

    letterText.textContent = "";

    const currentPart = letterParts[letterPartIndex];

    let characterIndex = 0;

    letter.classList.add('visible');

    const writer = setInterval(() => {

        letterText.textContent += currentPart[characterIndex];

        characterIndex++;

        if (characterIndex >= currentPart.length) {

            clearInterval(writer);

            // Tiempo que permanece cada fragmento
            let pauseTime = 3500;

            // "Te amo." tiene una pausa más corta
            if (currentPart === "Te amo.") {
                pauseTime = 2500;
            }

            setTimeout(() => {

                letter.classList.remove('visible');

                setTimeout(() => {

                    letterPartIndex++;

                    if (letterPartIndex < letterParts.length) {

                        typeLetterPart();

                    } else {

                        // La carta terminó
                        setTimeout(() => {
                            loveCounter.classList.add('visible');
                        }, 1500);

                    }

                }, 1200);

            }, pauseTime);
        }

    }, 35);
}

setTimeout(() => {

    typeLetterPart();

}, 19000);

// =========================================
// CONTADOR
// =========================================
// =========================================
// CONTADOR
// =========================================

const loveCounter = document.getElementById('love-counter');

const yearsElement = document.getElementById('years');
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Fecha aproximada desde que nos conocimos
const loveStartDate = new Date('2023-04-10T00:00:00');

function updateLoveCounter() {

    const now = new Date();

    let years = now.getFullYear() - loveStartDate.getFullYear();

    let anniversary = new Date(
        loveStartDate.getFullYear() + years,
        loveStartDate.getMonth(),
        loveStartDate.getDate(),
        loveStartDate.getHours(),
        loveStartDate.getMinutes(),
        loveStartDate.getSeconds()
    );

    if (anniversary > now) {
        years--;
        anniversary = new Date(
            loveStartDate.getFullYear() + years,
            loveStartDate.getMonth(),
            loveStartDate.getDate(),
            loveStartDate.getHours(),
            loveStartDate.getMinutes(),
            loveStartDate.getSeconds()
        );
    }

    let months =
        now.getMonth() - anniversary.getMonth();

    if (months < 0) {
        months += 12;
    }

    let monthStart = new Date(anniversary);

    monthStart.setMonth(
        monthStart.getMonth() + months
    );

    if (monthStart > now) {
        months--;

        monthStart = new Date(anniversary);

        monthStart.setMonth(
            monthStart.getMonth() + months
        );
    }

    const difference =
        now - monthStart;

    const totalSeconds =
        Math.floor(difference / 1000);

    const seconds =
        totalSeconds % 60;

    const totalMinutes =
        Math.floor(totalSeconds / 60);

    const minutes =
        totalMinutes % 60;

    const totalHours =
        Math.floor(totalMinutes / 60);

    const hours =
        totalHours % 24;

    const days =
        Math.floor(totalHours / 24);

    yearsElement.textContent = years;
    monthsElement.textContent = months;
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}


// Primera actualización
updateLoveCounter();

// Actualizar cada segundo
setInterval(updateLoveCounter, 1000);


// Mostrar cuando termine la carta
setTimeout(() => {

    loveCounter.classList.add('visible');

}, 1500);