<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DestinationPlusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $newDestinations = [
            [
                'name' => 'Paris, France',
                'description' => 'Découvrez la ville de l\'amour avec ses monuments emblématiques, sa culture riche et son art de vivre unique.',
                'price' => 599.99,
                'image_url' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
                'available_seats' => 50,
                'departure_date' => '2024-06-01',
                'return_date' => '2024-06-07',
            ],
            [
                'name' => 'Tokyo, Japon',
                'description' => 'Plongez dans l\'univers fascinant du Japon, entre tradition millénaire et modernité ultime.',
                'price' => 1299.99,
                'image_url' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
                'available_seats' => 30,
                'departure_date' => '2024-07-15',
                'return_date' => '2024-07-22',
            ],
            [
                'name' => 'Rome, Italie',
                'description' => 'Explorez la ville éternelle de Rome, avec ses trésors historiques et sa cuisine italienne.',
                'price' => 899.99,
                'image_url' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
                'available_seats' => 40,
                'departure_date' => '2024-08-05',
                'return_date' => '2024-08-12',
            ],

        ];


        foreach ($newDestinations as $destination) {
            DB::table('destinations')->insert($destination);
        }


    }
}
