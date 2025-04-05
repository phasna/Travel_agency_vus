<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $NewUsers = [
            [
                'name' => 'Phasna',
                'email' => 'phasna@example.com',
                'password' => 'Phasna123',
            ],
            [
                'name' => 'Davith',
                'email' => 'Davith@example.com',
                'password' => 'Davith123',
            ],
            [
                'name' => 'Phannith',
                'email' => 'Phannith@example.com',
                'password' => 'Phannith123',
            ],
            [
                'name' => 'Alise',
                'email' => 'Alise@example.com',
                'password' => 'Alise123',
            ],
            [
                'name' => 'Cruz',
                'email' => 'Cruz@example.com',
                'password' => 'Cruz123',
            ],
        ];

        foreach ($NewUsers as $user) {
            User::create($user);
        }
    }
}
