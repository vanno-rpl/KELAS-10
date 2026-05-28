<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => response()->json([
    'name' => 'Kevin Portfolio API',
    'frontend' => env('FRONTEND_URL', 'http://localhost:5173'),
]));
