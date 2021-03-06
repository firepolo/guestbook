<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('post')->group(function() {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/{id}', [PostController::class, 'show']);
});

Route::prefix('admin')->group(function() {
    Route::post('/login', [LoginController::class, 'login']);

    Route::middleware('auth')->group(function() {
        Route::post('/logout', [LoginController::class, 'logout']);

        Route::prefix('post')->group(function() {
            Route::post('/create', [PostController::class, 'create']);
            Route::put('/edit/{id}', [PostController::class, 'edit']);
            Route::delete('/delete/{id}', [PostController::class, 'delete']);
        });
    });
});
