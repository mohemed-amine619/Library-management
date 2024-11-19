<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\TaskResource;
class ProjectController extends Controller
{
    /*
     * Display a listing of the resource.
     */
    public function index()
    {
        $sortField = request('sort_field' , 'created_at');
        $sortDirection = request('sort_direction' , 'desc');

        $query = Project::query();
        if(request('name')) {
            $query->where("name","like","%".request("name") ."%");
        }
        if(request('status')) {
            $query->where("status",request('status'));
        }
        $projects = $query
                    ->orderBy($sortField , $sortDirection)
                    -> paginate(10)
                    ->onEachside(1);
            return inertia("Projects/Index",[
                    'projects' => ProjectResource::collection($projects),
                    'queryParams' => request() -> query() ?: null,
                    'success' => session("success")
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia("Projects/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
        $data = $request->validated();
        $data["created_by"] = Auth::id();
        $data['updated_by'] = Auth::id();
        Project::create($data);
        return to_route("Project.index")->with("success","projet created with success");

    }

    /**
     * Display the specified resource.
     */
    public function show(Project $Project)
    {
        //
        $sortField = request('sort_field' , 'created_at');
        $sortDirection = request('sort_direction' , 'desc');

        $query = $Project -> tasks();
        if(request('name')) {
            $query->where("name","like","%".request("name") ."%");
        }
        if(request('status')) {
            $query->where("status",request('status'));
        }
        $Tasks = $query
                    ->orderBy($sortField , $sortDirection)
                    -> paginate(10)
                    ->onEachside(1);
        return inertia('Projects/Show' , [
            'project' => new ProjectResource($Project),
            'Tasks' => TaskResource::collection($Tasks),
            'QueryParams' => request() -> query() ?: null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
