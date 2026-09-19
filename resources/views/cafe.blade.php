<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Una pequeña pausa</title>

    @vite([
        'resources/css/cafe.css',
        'resources/js/cafe.js'
    ])
</head>

<body>

    <main class="cafe-scene">

        <audio id="music-cafe" preload="auto" loop>
    <source
        src="/audio/cafe-music.mp3"
        type="audio/mpeg"
    >
</audio>


<audio id="story-cafe" preload="auto">
    <source
        src="/audio/voz-cafe.mpeg"
        type="audio/mpeg"
    >
</audio>

        <!-- ESPACIO -->
        <div class="space-background"></div>

        <!-- VENTANA -->
        <div class="window">

            <div class="window-space">
                <div class="window-stars"></div>
            </div>

        </div>

        <!-- CAFETERÍA -->
        <div class="cafe-room">

            <!-- LÁMPARA -->
            <div class="lamp">
                <div class="lamp-light"></div>
            </div>

            <!-- MESA -->
            <div class="table">

                <!-- TAZA -->
                <div class="cup" id="cup">

                    <div class="cup-handle"></div>

                    <div class="coffee"></div>

                    <div class="steam steam-1"></div>
                    <div class="steam steam-2"></div>
                    <div class="steam steam-3"></div>

                </div>

            </div>

        </div>

        <!-- NARRACIÓN -->
        <div class="story" id="story">

            <p id="story-text"></p>

        </div>

        <!-- BOTÓN SIGUIENTE -->
        <a
            href="/universo"
            class="next-button"
            id="next-button"
        >
            →
        </a>

    </main>

</body>
</html>