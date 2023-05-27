<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function children()
    {
        return $this->hasMany('App\Group', 'father_id');
    }

//    public function parent()
//    {
//        return $this->hasOne( self::class, 'id', 'father_id' );
//    }

    protected $fillable = [
        'title', 'father_id',
    ];

}
