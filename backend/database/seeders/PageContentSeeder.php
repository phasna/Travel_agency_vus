<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PageContent;

class PageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'page_name' => 'about',
                'title' => 'À propos de nous',
                'subtitle' => 'Découvrez notre histoire et notre mission',
                'content' => json_encode([
                    'history' => [
                        'title' => 'Notre Histoire',
                        'content' => 'Fondée en 2010, notre agence de voyage s\'est construite sur des valeurs fortes : l\'excellence du service, l\'authenticité des expériences et le respect des cultures locales.'
                    ],
                    'mission' => [
                        'title' => 'Notre Mission',
                        'content' => 'Nous nous engageons à offrir des voyages uniques et mémorables, en alliant confort, découverte et respect de l\'environnement.'
                    ],
                    'values' => [
                        'title' => 'Nos Valeurs',
                        'items' => [
                            [
                                'title' => 'Excellence',
                                'description' => 'Nous visons l\'excellence dans chaque aspect de nos services.'
                            ],
                            [
                                'title' => 'Durabilité',
                                'description' => 'Nous nous engageons pour un tourisme responsable et durable.'
                            ],
                            [
                                'title' => 'Innovation',
                                'description' => 'Nous innovons constamment pour améliorer l\'expérience de voyage.'
                            ]
                        ]
                    ]
                ]),
                'meta_data' => [
                    'image' => 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                ]
            ],
            [
                'page_name' => 'contact',
                'title' => 'Contactez-nous',
                'subtitle' => 'Notre équipe est à votre disposition pour répondre à toutes vos questions',
                'content' => json_encode([
                    'address' => [
                        'title' => 'Adresse',
                        'content' => "123 Avenue des Voyages\n75001 Paris, France"
                    ],
                    'phone' => [
                        'title' => 'Téléphone',
                        'content' => '+33 1 23 45 67 89'
                    ],
                    'email' => [
                        'title' => 'Email',
                        'content' => 'contact@travelagency.com'
                    ],
                    'hours' => [
                        'title' => 'Horaires d\'ouverture',
                        'content' => "Lundi - Vendredi : 9h00 - 18h00\nSamedi : 10h00 - 16h00\nDimanche : Fermé"
                    ],
                    'form' => [
                        'title' => 'Envoyez-nous un message',
                        'description' => 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'
                    ]
                ]),
                'meta_data' => [
                    'image' => 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                ]
            ],
            [
                'page_name' => 'home',
                'title' => 'Découvrez le monde',
                'subtitle' => 'Des voyages inoubliables vous attendent',
                'content' => json_encode([
                    'hero' => [
                        'image' => '/images/hero-bg.jpg',
                        'cta_destinations' => 'Voir nos destinations',
                        'cta_contact' => 'Nous contacter'
                    ],
                    'features' => [
                        'title' => 'Pourquoi nous choisir',
                        'items' => [
                            [
                                'icon' => 'fas fa-globe',
                                'title' => 'Destinations uniques',
                                'description' => 'Découvrez des lieux exceptionnels sélectionnés avec soin.'
                            ],
                            [
                                'icon' => 'fas fa-hand-holding-usd',
                                'title' => 'Meilleurs prix',
                                'description' => 'Profitez des meilleures offres et tarifs garantis.'
                            ],
                            [
                                'icon' => 'fas fa-headset',
                                'title' => 'Service 24/7',
                                'description' => 'Une équipe à votre écoute à tout moment.'
                            ]
                        ]
                    ],
                    'destinations' => [
                        'title' => 'Destinations populaires',
                        'items' => [
                            [
                                'title' => 'Paris, France',
                                'description' => 'La ville de l\'amour et de la culture',
                                'image' => '/images/destinations/paris.jpg'
                            ],
                            [
                                'title' => 'Tokyo, Japon',
                                'description' => 'Entre tradition et modernité',
                                'image' => '/images/destinations/tokyo.jpg'
                            ],
                            [
                                'title' => 'New York, USA',
                                'description' => 'La ville qui ne dort jamais',
                                'image' => '/images/destinations/new-york.jpg'
                            ]
                        ]
                    ],
                    'cta' => [
                        'title' => 'Prêt à partir en voyage ?',
                        'description' => 'Contactez-nous dès maintenant pour planifier votre prochain voyage',
                        'button_text' => 'Nous contacter'
                    ]
                ]),
                'meta_data' => [
                    'featured_destinations' => [1, 2, 3]
                ]
            ]
        ];

        foreach ($pages as $page) {
            PageContent::create($page);
        }
    }
}
