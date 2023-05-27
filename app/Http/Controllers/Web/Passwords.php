<?php

namespace App\Http\Controllers\Web;

use App\Group;
use App\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Passwords extends \App\Http\Controllers\Controller
{
    public function Create(Request $request)
    {

    }

    public function GetByID(Request $request, $id)
    {

    }

    public function List(Request $request)
    {
        $groupId = Auth::user()->group_id;

        $arGroups = $this->GetChildrenRecursive(
            Group::all()->toArray(),
            $groupId
        );

        $arGroupsIds = array_map( function( $group )
        {
            return $group['id'];
        }, $arGroups );

        $arGroupsIds[] = $groupId;

        return response()->json(
            ["data" => Password::select('id','name', 'link')->whereIn("group_id" , $arGroupsIds)->get()],
            200
        );
    }

    protected function GetChildrenRecursive(array $list, int $id )
    {
        $allProvide = [];

        foreach ($list as $key => $item)
        {
            if ($item['father_id'] === $id)
            {
                $allProvide[] = $item;
                if ($id !== $item["id"]) array_push($allProvide, ...$this->GetChildrenRecursive($list, $item["id"]));
            }
        }

        return $allProvide;
    }
}

