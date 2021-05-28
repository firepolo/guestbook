<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'email' => 'admin@test.test',
            'password' => Hash::make('1234'),
        ]);
        
        for ($i = 0; $i < 256; ++$i)
        {
            \App\Models\Post::create([
                'title' => Str::random(16),
                'image' => '0.png',
                'content' => Str::random(1024)
            ]);
        }
    }
}
