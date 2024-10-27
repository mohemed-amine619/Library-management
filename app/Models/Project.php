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
    public function createdby()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedby()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }     
    
    
}
