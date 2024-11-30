<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{

    /** @use HasFactory<\Database\Factories\TasksFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'image_path',
        'status',
        'due_date',
        'priority',
        'asseigned_user_id',
        'created_by',
        'updated_by',
        'project_id'
     ];
    public function project()
    {
        return $this->belongsTo(Project :: class);

    }
    public function asseignedUser()
    {
        return $this->belongsTo(User :: class , 'asseigned_user_id');

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
