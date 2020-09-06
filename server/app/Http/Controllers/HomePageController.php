<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as Base; // use the base controller as name of Base

class HomePageController extends Controller
{
    // base home page to check if admin user is login or not . if not , just use login view , else use home view @by: @MAGIC 2020-09-06
    public function home(Request $request){
        if(!$request->isLogin){
            return $this->login($request);
        }
        return view('home', Base::page($request, 'home'));
    }

    public static function login(Request $request){
        return view('login', Base::page($request, 'login'));
    }

    public function forgot(Request $request){
        
    }
}