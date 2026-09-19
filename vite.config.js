import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/tierra.css',
                'resources/js/tierra.js',

                'resources/css/viaje.css',
                'resources/js/viaje.js',

                'resources/css/cafe.css',
                'resources/js/cafe.js',

                'resources/css/universo.css',
                'resources/js/universo.js',

                'resources/css/flores.css',
                'resources/js/flores.js',
            ],
            refresh: true,
        }),
    ],
});