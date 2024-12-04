<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Tasks;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $totalPendingTasks = Tasks::query()
            ->where('status', 'pending')
            ->count();
        $myPendingTasks = Tasks::query()
            ->where('status', 'pending')
            ->where('asseigned_user_id', $user->id)
            ->count();


        $totalProgressTasks = Tasks::query()
            ->where('status', 'in_progress')
            ->count();
        $myProgressTasks = Tasks::query()
            ->where('status', 'in_progress')
            ->where('asseigned_user_id', $user->id)
            ->count();


        $totalCompletedTasks = Tasks::query()
            ->where('status', 'completed')
            ->count();
        $myCompletedTasks = Tasks::query()
            ->where('status', 'completed')
            ->where('asseigned_user_id', $user->id)
            ->count();

        $activeTasks = Tasks::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('asseigned_user_id', $user->id)
            ->limit(10)
            ->get();
        $activeTasks = TaskResource::collection($activeTasks);
        return inertia(
            'Dashboard',
            compact(
                'totalPendingTasks',
                'myPendingTasks',
                'totalProgressTasks',
                'myProgressTasks',
                'totalCompletedTasks',
                'myCompletedTasks',
                'activeTasks'
            )
        );
    }
}