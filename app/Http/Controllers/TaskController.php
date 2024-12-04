<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Tasks;
use App\Models\User;
use App\Models\Project;
use App\Http\Resources\TaskResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\UserResource;
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
                    'Tasks' => TaskResource::collection($tasks),
                    'QueryParams' => request() -> query() ?: null,
                    'success' => session("success")
       ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $project = Project::query()->orderBy('name' , 'desc')->get();
        $users = User::query()-> orderBy('name' ,'asc')->get();
        return inertia("Tasks/Create" , [
            'projects' => ProjectResource::collection($project),
            'users' => UserResource::collection($users)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTasksRequest $request)
    {
        //
        $data = $request->validated();
        /**  @var $image Illuminate\Http\\UploadedFile  */
       $image = $data['image'] ?? null ;
       $data['created_by'] = Auth::id();
       $data['updated_by'] = Auth::id();
       if($image) {
              $data['image_path'] =  $image->store("task/".Str::random() , "public");
       }
       Tasks::create($data);
       return to_route("Task.index")->with("success","Task created with success");
    }

    /**
     * Display the specified resource.
     */
    public function show(Tasks $Task)
    {
        //
        return inertia('Tasks/Show' , [
            'task' => new TaskResource($Task),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tasks $Task)
    {
        //
        $project = Project::query()->orderBy('name' , 'desc')->get();
        $users = User::query()-> orderBy('name' ,'asc')->get();
        return inertia("Tasks/Edit",[
            "task" => new TaskResource($Task),
            'projects' => ProjectResource::collection($project),
            'users' => UserResource::collection($users)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTasksRequest $request, Tasks $Task)
    {
        //

        $data = $request->validated();

        /**  @var $image Illuminate\Http\\UploadedFile  */
        $image = $data['image'] ?? null ;
        $data['updated_by'] = Auth::id();
        if($image) {
            if ($Task->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($Task->image_path));
            }
               $data['image_path'] =  $image->store("task/".Str::random() , "public");
        }

        $Task->update($data);
        return to_route("Task.index")->with('success' , "Task \" $Task->name \" was updated") ;
    }
    public function myTasks()
    {
        $user = auth() -> user();
        $query = Tasks::query()->where('asseigned_user_id' , $user->id);
        $sortField = request('sort_field' , 'created_at');
        $sortDirection = request('sort_direction' , 'desc');
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
        return inertia("Tasks/Index" , [
            "Tasks" => TaskResource::collection($tasks),
            "queryParams" => request()->query() ?: null,
            "success" => session('success')
        ]);

    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tasks $Task)
    {
        //
        $name = $Task->name;

        $Task->delete();
        if ($Task->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($Task->image_path));
        }
        return to_route('Task.index')
            ->with('success', "Task \"$name\" was deleted");
    }
}
