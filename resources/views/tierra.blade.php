<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Un pequeño viaje</title>

    @vite([
        'resources/css/tierra.css',
        'resources/js/tierra.js'
    ])
</head>

<body>
    <main class="scene">

        <div class="stars"></div>

        <!-- Planetas del fondo -->

        <div class="planet planet-red"></div>

        <div class="planet planet-purple"></div>

        <div class="planet planet-orange"></div>

        <div class="planet planet-ringed">
            <div class="planet-ring"></div>
        </div>

        <div class="planet planet-dark"></div>
        

        <!-- Tierra -->

        <div class="earth">
            <div class="continent continent-1"></div>
            <div class="continent continent-2"></div>
            <div class="continent continent-3"></div>
            <div class="continent continent-4"></div>
        </div>


    <!-- =========================
     NAVE ESPACIAL
     ========================= -->

<div class="spaceship" id="spaceship">

    <div class="ship-body">

        <!-- Cabina -->
        <div class="cockpit">

            <!-- Astronauta -->
            <div class="astronaut">

                <div class="helmet">
                    <div class="visor"></div>
                </div>

                <div class="astronaut-body"></div>

                <div class="astronaut-arm left-arm"></div>
                <div class="astronaut-arm right-arm"></div>

            </div>

        </div>

        <!-- Cuerpo de la nave -->
        <div class="ship-wing left-wing"></div>
        <div class="ship-wing right-wing"></div>

    </div>

    <!-- Motor -->
    <div class="engine">
        <div class="flame flame-1"></div>
        <div class="flame flame-2"></div>
        <div class="flame flame-3"></div>
    </div>

</div>
        <div class="blackout" id="blackout"></div>

        <!-- ESCENA DEL CAMPO -->

<div class="field-scene" id="field-scene">

    <div class="moon"></div>

    <div class="field">

        <div class="grass"></div>

        <div class="grass grass-2"></div>
        <div class="grass grass-3"></div>

    </div>

</div>

      <section class="intro">

    <p class="intro-text">
        Un pequeño viaje
    </p>

    <button id="start-btn">
        Comenzar
    </button>

    <button id="story-btn">
        ♫ Escuchar la historia
    </button>

</section>

<audio id="music-tierra" preload="auto" loop>
    <source src="/build/assets/audio/tierra-music.mp3" type="audio/mpeg">
</audio>

<audio id="story-tierra" preload="auto">
    <source src="/build/assets/audio/voz-tierra.mpeg" type="audio/mpeg">
</audio>


    </main>

</body>
</html>