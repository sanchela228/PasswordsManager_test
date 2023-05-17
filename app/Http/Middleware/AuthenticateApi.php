<?php
namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class AuthenticateApi extends Middleware
{
    protected function Authenticate( $request, array $guards)
    {
        if ( !Auth::user() )
        {
            $token = $request->bearerToken();
            if ( in_array($token, config('apitokens')) ) return;
        }
        else return;

        $this->unauthenticated($request, $guards);
    }
}
