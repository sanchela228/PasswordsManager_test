<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [\App\Http\Controllers\AuthController::class, 'ViewLogin'])->name('login');
Route::post('/login/auth', [\App\Http\Controllers\AuthController::class, 'Login'])->name('login/auth');
Route::get('/login/logout', [\App\Http\Controllers\AuthController::class, 'Logout'])->name('login/logout');


Route::middleware('auth')->get('/passwords', [\App\Http\Controllers\PasswordsController::class, 'View'])->name('view');

# Web api
Route::get('/web/passwords/list', [\App\Http\Controllers\Web\Passwords::class, 'List']);
Route::get('/web/passwords/{id}', [\App\Http\Controllers\Web\Passwords::class, 'GetByID']);
