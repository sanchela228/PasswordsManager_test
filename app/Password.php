<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    public function children()
    {
        return $this->hasMany(self::class, 'father_id');
    }

    protected $fillable = [
        'group_id', 'creator_id', 'name', 'link', 'login', 'password', 'comment'
    ];

}
