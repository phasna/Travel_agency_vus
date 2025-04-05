<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DestinationSeeder extends Seeder
{
    public function run(): void
    {
        $destinations = [
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
                'name' => 'New York, USA',
                'description' => 'Explorez la ville qui ne dort jamais, ses gratte-ciels impressionnants et son énergie unique.',
                'price' => 899.99,
                'image_url' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
                'available_seats' => 40,
                'departure_date' => '2024-08-01',
                'return_date' => '2024-08-08',
            ],
            [
                'name' => 'Sydney, Australie',
                'description' => 'Découvrez la plus grande ville d\'Australie, entre plages paradisiaques et culture urbaine.',
                'price' => 1499.99,
                'image_url' => 'https://images.unsplash.com/photo-1506973035872-a4ecdc16dc17',
                'available_seats' => 25,
                'departure_date' => '2024-09-10',
                'return_date' => '2024-09-17',
            ],
            [
                'name' => 'Rome, Italie',
                'description' => 'Voyagez dans le temps à travers l\'histoire millénaire de la ville éternelle.',
                'price' => 799.99,
                'image_url' => 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
                'available_seats' => 35,
                'departure_date' => '2024-10-05',
                'return_date' => '2024-10-12',
            ],
            [
                'name' => 'Bali, Indonésie',
                'description' => 'Évadez-vous dans le paradis tropical de Bali, entre temples ancestraux et plages de rêve.',
                'price' => 1199.99,
                'image_url' => 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
                'available_seats' => 45,
                'departure_date' => '2024-11-15',
                'return_date' => '2024-11-22',
            ],
            [
                'name' => 'Dubai, Émirats Arabes Unis',
                'description' => 'Découvrez le luxe et la modernité de Dubai, entre désert et architecture futuriste.',
                'price' => 999.99,
                'image_url' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
                'available_seats' => 30,
                'departure_date' => '2024-12-01',
                'return_date' => '2024-12-08',
            ],
            [
                'name' => 'Barcelone, Espagne',
                'description' => 'Explorez la capitale catalane, entre architecture Gaudí et plages méditerranéennes.',
                'price' => 699.99,
                'image_url' => 'https://images.unsplash.com/photo-1583422409516-2895a77efded',
                'available_seats' => 40,
                'departure_date' => '2025-01-10',
                'return_date' => '2025-01-17',
            ],
        ];

        foreach ($destinations as $destination) {
            DB::table('destinations')->insert($destination);
        }
    }
}
