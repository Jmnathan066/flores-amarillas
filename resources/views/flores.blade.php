<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Donde todo comenzó</title>

    @vite([
        'resources/css/flores.css',
        'resources/js/flores.js'
    ])

</head>

<body>

    <main class="flowers-scene" id="scene">

        <audio id="music-flores" preload="auto" loop>
    <source
        src="/audio/flores-music.mp3"
        type="audio/mpeg"
    >
</audio>


<audio id="story-flores" preload="auto">
    <source
        src="/audio/voz-flores.mpeg"
        type="audio/mpeg"
    >
</audio>
        <!-- ==================================
             CIELO
        =================================== -->

        <div class="sky">

            <div class="sky-star star-1"></div>
            <div class="sky-star star-2"></div>
            <div class="sky-star star-3"></div>
            <div class="sky-star star-4"></div>

        </div>


        <!-- ==================================
             HORIZONTE
        =================================== -->

        <div class="horizon"></div>


        <!-- ==================================
             SUELO
        =================================== -->

        <div class="ground">

            <div class="ground-glow"></div>

        </div>


        <!-- ==================================
             ESFERA
        =================================== -->

        <div
            class="seed"
            id="seed"
        ></div>


        <!-- ==================================
     ÁRBOL
=================================== -->

<div
    class="tree"
    id="tree"
>

    <div class="trunk"></div>

    <div class="branch branch-1"></div>
    <div class="branch branch-2"></div>
    <div class="branch branch-3"></div>
    <div class="branch branch-4"></div>
    <div class="branch branch-5"></div>
    <div class="branch branch-6"></div>

</div>

    <div class="flowers-container" id="flowers-container"></div>

    <div class="floating-petals" id="floating-petals"></div>

    <div class="letter" id="letter">
    <p id="letter-text"></p>
</div>

<div class="love-counter" id="love-counter">

    <span class="counter-title">
        Amandote desde que te conocí...
    </span>

    <div class="counter-time">

        <span>
            <strong id="years">0</strong>
            <small>años</small>
        </span>

        <span>
            <strong id="months">0</strong>
            <small>meses</small>
        </span>

        <span>
            <strong id="days">0</strong>
            <small>días</small>
        </span>

        <span>
            <strong id="hours">0</strong>
            <small>horas</small>
        </span>

        <span>
            <strong id="minutes">0</strong>
            <small>min</small>
        </span>

        <span>
            <strong id="seconds">0</strong>
            <small>seg</small>
        </span>

    </div>

    <span class="counter-ending">
        Y contando.
    </span>

</div>
<div
    class="seed-impact"
    id="seed-impact"
></div>

        <!-- ==================================
             VISOR DEL ASTRONAUTA
        =================================== -->

        <div class="visor-frame">

            <div class="visor-reflection"></div>

        </div>


        <!-- ==================================
             TEXTO
        =================================== -->

        <div
            class="intro-text"
            id="intro-text"
        >
            <p>
                Finalmente había llegado.
            </p>
        </div>


    </main>

</body>

</html>