<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('tierra');
});

Route::get('/viaje', function () {
    return view('viaje');
});

Route::get('/cafe', function () {
    return view('cafe');
});

Route::get('/universo', function () {
    return view('universo');
});

Route::get('/flores', function () {
    return view('flores');
});