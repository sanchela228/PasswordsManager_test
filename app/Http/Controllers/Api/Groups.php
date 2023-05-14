<?php

namespace App\Http\Controllers\Api;

use App\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Groups extends \App\Http\Controllers\Controller
{
    public function Create(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|unique:groups',
            'father_id' => 'required|int|exists:groups,id',
        ]);

        $group = new Group([
            'title' => $request->title,
            'father_id' => $request->father_id,
        ]);

        $group->save();

        return response()->json(["message" => "successfully", "data" => $data], 200);
    }

    public function List(Request $request)
    {
        return response()->json(["data" => Group::all()], 200);
    }
}
