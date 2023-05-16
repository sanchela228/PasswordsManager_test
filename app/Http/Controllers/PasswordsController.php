<?php

namespace App\Http\Controllers;

use App\Group;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class PasswordsController extends Controller
{
    public function View()
    {
        $group = Group::find( Auth::user()->group_id );

        return view('passwords', ['group' => $group]);
    }
}
