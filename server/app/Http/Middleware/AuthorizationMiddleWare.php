<?php

namespace App\Http\Middleware;

use Closure;

class AuthorizationMiddleWare
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $request->isLogin = false;
        $request->userData = [];
        return $next($request);
    }
}