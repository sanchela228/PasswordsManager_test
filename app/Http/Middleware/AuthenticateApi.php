<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class AuthenticateApi extends Middleware
{
    protected function Authenticate($request, array $guards)
    {
        $token = $request->bearerToken();

        if ( in_array($token, config('apitokens')) ) return;

        $this->unauthenticated($request, $guards);
    }
}
