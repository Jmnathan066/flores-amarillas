<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>El viaje</title>

    @vite([
        'resources/css/viaje.css',
        'resources/js/viaje.js'
    ])

</head>

<body>

    <main class="space-scene">

        <audio id="music-viaje" preload="auto" loop>
    <source
        src="/build/assets/audio/viaje-music.mp3"
        type="audio/mpeg"
    >
</audio>

<audio id="story-viaje" preload="auto">
    <source
        src="/build/assets/audio/voz-viaje.mpeg"
        type="audio/mpeg"
    >
</audio>

        <!-- ESTRELLAS -->
        <div class="stars"></div>

        <!-- NEBULOSAS -->
        <div class="nebula nebula-1"></div>
        <div class="nebula nebula-2"></div>
        <div class="nebula nebula-3"></div>

        <!-- GALAXIAS -->
        <div class="galaxy galaxy-1"></div>
        <div class="galaxy galaxy-2"></div>

        <!-- PLANETAS -->
        <div class="planet planet-1"></div>
        <div class="planet planet-2"></div>
        <div class="planet planet-3"></div>
        <div class="planet planet-ringed">
            <div class="planet-ring"></div>
        </div>

        <!-- AGUJERO NEGRO -->
        <div class="black-hole">
            <div class="black-hole-ring"></div>
        </div>

        <!-- ESTRELLA FUGAZ -->
        <div class="shooting-star"></div>

        <!-- NAVE -->
        <div class="spaceship">

            <div class="ship-body">

                <div class="cockpit">

                    <div class="astronaut">

                        <div class="helmet">
                            <div class="visor"></div>
                        </div>

                        <div class="astronaut-body"></div>

                        <div class="astronaut-arm left-arm"></div>
                        <div class="astronaut-arm right-arm"></div>

                    </div>

                </div>

                <div class="ship-wing left-wing"></div>
                <div class="ship-wing right-wing"></div>

            </div>

            <div class="engine">

                <div class="flame flame-1"></div>
                <div class="flame flame-2"></div>
                <div class="flame flame-3"></div>

            </div>

        </div>

        <!-- MENSAJE -->
      <div class="message-container" id="message-container">

    <p id="message-top" class="visible">Toca la pantalla</p>

    <p id="message-bottom"></p>

</div>

<!-- BOTÓN SIGUIENTE -->
<a href="/cafe" class="next-button" id="next-button">
    <span>→</span>
</a>

    </main>

</body>
</html>