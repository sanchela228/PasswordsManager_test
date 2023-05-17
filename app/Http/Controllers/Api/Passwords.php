<?php

namespace App\Http\Controllers\Api;

use App\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Passwords extends \App\Http\Controllers\Controller
{
    public function Create(Request $request)
    {
        if (Auth::user() and !$request->creator_id) $request->creator_id = Auth::user()->getAuthIdentifier();

        if (Auth::user() and !$request->group_id)
            $request->creator_id = Auth::user()->group_id;

        $data = $request->validate([
            'group_id' => 'int|required|exists:groups,id',
            'creator_id' => 'int|required|exists:users,id',
            'name' => 'string|required|max:48',
            'link' => 'string|required|max:256',
            'login' => 'string|required|max:48',
            'password' => 'string|required|max:256',
            'comment' => 'string|max:256',
        ]);

        $password = new Password([
            'group_id' => $request->group_id,
            'creator_id' => $request->creator_id,
            'name' => $request->name,
            'link' => $request->link,
            'login' => $request->login,
            'password' => \Crypt::encryptString($request->password),
            'comment' => $request->comment,
        ]);

        $password->save();

        return response()->json(["message" => "successfully", "data" => $data], 200);
    }

    public function GetByID(Request $request, $id)
    {
        $password = \App\Password::find($id);
        $password->password = \Crypt::decryptString($password->password);

        return response()->json(["data" => $password], 200);
    }

    public function List(Request $request)
    {
        return response()->json(
            ["data" => Password::select('id','name', 'link')->get()],
            200
        );
    }
}
