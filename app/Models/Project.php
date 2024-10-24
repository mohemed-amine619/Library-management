<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;
    public function tasks()
    {
        return $this->hasMany(Tasks::class);
    }
    public function created_by()
    {
        return $this->belognsTo(User::class , 'created_by');
    }
    public function updated_by()
    {
        return $this->belognsTo(User::class , 'updated_by');
    }
}
