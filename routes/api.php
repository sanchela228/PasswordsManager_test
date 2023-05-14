<?php

use Illuminate\Http\Request;
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

Route::middleware('auth_api')->post(
    "/users/create",
    [\App\Http\Controllers\Api\Users::class, 'Create']
);

Route::middleware('auth_api')->get("/users/list", [\App\Http\Controllers\Api\Users::class, 'List']);
Route::middleware('auth_api')->get("/users/{id}", function(Request $request, $id)
{
    return response()->json(["data" => \App\User::find($id)]);
});
