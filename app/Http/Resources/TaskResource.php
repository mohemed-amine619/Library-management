<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Taskresource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this -> id,
            'name' => $this -> name,
            'description' => $this -> description,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'due_date' => (new Carbon($this->created_at))->format('Y-m-d'),
            'status' => $this->status,
            'priority' => $this -> priority,
            'image_path' => $this->image_path,
            'project' => new ProjectResource($this->project),
            'assignedUser' => new UserResource($this->asseignedUser),
            'created_by' => new UserResource($this->createdby),
            'updated_by' => new UserResource($this->updatedby),
        ];
    }
}
