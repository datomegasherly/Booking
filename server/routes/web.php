<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\homePageController;

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

//Route::get('/', );
Route::get('/', 'HomePageController@home')->middleware('auth');
Route::get('/forgot', 'HomePageController@forgot')->middleware('auth');