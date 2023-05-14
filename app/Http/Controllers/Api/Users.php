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
            'group_id' => 'required|int|min:2|exists:groups,id',
            'password' => 'required|string|min:12'
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'group_id' => $request->group_id,
            'password' => Hash::make( $request->password )
        ]);

        $user->save();

        return response()->json(["message" => "successfully", "data" => $data], 200);
    }

    public function List(Request $request)
    {
        return response()->json(["data" => User::all()], 200);
    }
}
