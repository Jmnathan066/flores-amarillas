<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Más allá de las estrellas</title>

    @vite([
        'resources/css/universo.css',
        'resources/js/universo.js'
    ])
</head>

<body>

    <main class="universe-scene">

        <audio id="music-universo" preload="auto" loop>
    <source
        src="/build/assets/audio/universo-music.mp3"
        type="audio/mpeg"
    >
</audio>

<audio id="story-universo" preload="auto">
    <source
        src="/build/assets/audio/voz-universo.mpeg"
        type="audio/mpeg"
    >
</audio>

        <!-- ESPACIO -->
        <div class="space-background"></div>

        <!-- ESTRELLAS -->
        <div class="stars"></div>

        <!-- LUZ AZUL -->
        <div class="mysterious-light"></div>

        <!-- PLANETA -->
        <div class="flower-planet">

            <div class="yellow-spot spot-1"></div>
            <div class="yellow-spot spot-2"></div>
            <div class="yellow-spot spot-3"></div>
            <div class="yellow-spot spot-4"></div>
            <div class="yellow-spot spot-5"></div>
            <div class="yellow-spot spot-6"></div>

        </div>

        <!-- NAVE -->
        <div class="spaceship">

            <div class="ship-body">

                <div class="cockpit">

                    <div class="astronaut">

                        <div class="helmet">
                            <div class="visor"></div>
                        </div>

                        <div class="astronaut-body"></div>

                    </div>

                </div>

                <div class="ship-wing left-wing"></div>
                <div class="ship-wing right-wing"></div>

            </div>

            <div class="engine">

                <div class="flame"></div>

            </div>

        </div>

        <!-- TEXTO -->
        <div class="story" id="story">

            <p id="story-text">
                Quizás aquella luz nunca quiso mostrarle un lugar.
            </p>

        </div>

        <!-- TRANSICIÓN -->
<div class="transition" id="transition"></div>

<!-- BOTÓN SIGUIENTE -->
<a
    href="/flores"
    class="next-button"
    id="next-button"
>
    →
</a>

    </main>

</body>
</html>