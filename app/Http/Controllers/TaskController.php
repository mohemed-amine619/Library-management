<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Tasks;
use App\Http\Resources\TaskResource;
use App\Http\Requests\StoreTasksRequest;
use App\Http\Requests\UpdateTasksRequest;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $sortField = request('sort_field' , 'created_at');
        $sortDirection = request('sort_direction' , 'desc');

        $query = Tasks::query();
        if(request('name')) {
            $query->where("name","like","%".request("name") ."%");
        }
        if(request('status')) {
            $query->where("status",request('status'));
        }
        $tasks = $query
                    ->orderBy($sortField , $sortDirection)
                    -> paginate(30)
                    ->onEachside(1);
            return inertia("Tasks/Index",[
                    'tasks' => TaskResource::collection($tasks),
                    'queryParams' => request() -> query() ?: null,
       ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTasksRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tasks $tasks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tasks $tasks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTasksRequest $request, Tasks $tasks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tasks $tasks)
    {
        //
    }
}
