<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\tasks>
 */
class TasksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=> fake()->sentence(),
            'description'=>fake()->realText(),
            'due_date'=>fake()->dateTimeBetween('now','+1 year'),
            'status'=> fake()->randomElement(['pending','in_progress','completed']),
            'priority'=>fake()->randomElement(['low','medium','high']),
            'image_path'=>fake()->imageUrl(),
            'asseigned_user_id'=>1,
            'created_by'=>6,
            'updated_by'=>6,
            'created_at' => time(),
            'updated_at'=>time()
        ];
    }
}
