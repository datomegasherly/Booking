<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $attributes = [
        'level' => 1,
        'active' => 1
    ];
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'level',
        'active'
    ];
}