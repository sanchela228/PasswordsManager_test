<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    protected $fillable = [
        'group_id', 'creator_id', 'name', 'link', 'login', 'password', 'comment'
    ];

}
