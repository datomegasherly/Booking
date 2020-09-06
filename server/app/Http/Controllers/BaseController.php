<?php
// this controller is use to make some data for other controllers
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    public static function page($request, $name){
        $data = new \stdClass();
        $data->title = trans("home.$name.title");
        return ['data' => $data];
    }
}