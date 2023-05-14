<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Users extends \App\Http\Controllers\Controller
{
    public function Create(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:12'
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make( $request->password )
        ]);

        $user->save();

        return response()->json(["message" => "user registered", "data" => $data], 200);
    }

    public function List(Request $request)
    {
        return response()->json(["data" => User::all()], 200);
    }
}
