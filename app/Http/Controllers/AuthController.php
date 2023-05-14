<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function ViewLogin()
    {
        return view('auth.login');
    }

    public function Login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required|string'
        ]);

        if (auth("web")->attempt($data)) return redirect( "/");
        else
        {
            return redirect( route("login"))->withErrors(["error" => "errorw"]);
        }
    }

    public function Logout(Request $request)
    {
        if (Auth::user()->getAuthIdentifier() > 0) Auth::logout();

        return redirect( route("login"));
    }
}
