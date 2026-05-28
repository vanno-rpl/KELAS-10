<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PortfolioController;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', [AuthController::class, 'login']);

Route::get('/profile', [PortfolioController::class, 'profile']);
Route::get('/skills', [PortfolioController::class, 'skills']);
Route::get('/projects', [PortfolioController::class, 'projects']);
Route::get('/projects/{slug}', [PortfolioController::class, 'project']);
Route::get('/hobbies', [PortfolioController::class, 'hobbies']);
Route::get('/experiences', [PortfolioController::class, 'experiences']);
Route::post('/contact-messages', [PortfolioController::class, 'contact']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/admin/profile', [AdminController::class, 'profile']);
    Route::put('/admin/profile', [AdminController::class, 'updateProfile']);
    Route::post('/admin/uploads', [AdminController::class, 'upload']);

    Route::get('/admin/skills', [AdminController::class, 'skills']);
    Route::post('/admin/skills', [AdminController::class, 'storeSkill']);
    Route::put('/admin/skills/{skill}', [AdminController::class, 'updateSkill']);
    Route::delete('/admin/skills/{skill}', [AdminController::class, 'destroySkill']);

    Route::get('/admin/projects', [AdminController::class, 'projects']);
    Route::post('/admin/projects', [AdminController::class, 'storeProject']);
    Route::put('/admin/projects/{project}', [AdminController::class, 'updateProject']);
    Route::delete('/admin/projects/{project}', [AdminController::class, 'destroyProject']);

    Route::get('/admin/hobbies', [AdminController::class, 'hobbies']);
    Route::post('/admin/hobbies', [AdminController::class, 'storeHobby']);
    Route::put('/admin/hobbies/{hobby}', [AdminController::class, 'updateHobby']);
    Route::delete('/admin/hobbies/{hobby}', [AdminController::class, 'destroyHobby']);

    Route::get('/admin/experiences', [AdminController::class, 'experiences']);
    Route::post('/admin/experiences', [AdminController::class, 'storeExperience']);
    Route::put('/admin/experiences/{experience}', [AdminController::class, 'updateExperience']);
    Route::delete('/admin/experiences/{experience}', [AdminController::class, 'destroyExperience']);

    Route::get('/admin/contact-messages', [AdminController::class, 'messages']);
    Route::patch('/admin/contact-messages/{contactMessage}/read', [AdminController::class, 'markMessageRead']);
    Route::delete('/admin/contact-messages/{contactMessage}', [AdminController::class, 'destroyMessage']);
});
