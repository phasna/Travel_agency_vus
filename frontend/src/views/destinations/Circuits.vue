<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative h-[50vh]">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Circuits"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
        ></div>
      </div>
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Circuits organisés
          </h1>
          <p class="mt-6 text-xl text-gray-300">
            Découvrez nos circuits organisés à travers le monde, conçus pour vous offrir une
            expérience inoubliable.
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Destination</label>
            <select
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Toutes les destinations</option>
              <option value="europe">Europe</option>
              <option value="asia">Asie</option>
              <option value="america">Amérique</option>
              <option value="africa">Afrique</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Durée</label>
            <select
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Toutes les durées</option>
              <option value="1-7">1-7 jours</option>
              <option value="8-14">8-14 jours</option>
              <option value="15+">15+ jours</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prix</label>
            <select
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Tous les prix</option>
              <option value="0-1000">0-1000€</option>
              <option value="1000-2000">1000-2000€</option>
              <option value="2000+">2000€+</option>
            </select>
          </div>
          <div class="flex items-end">
            <button
              class="w-full bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition duration-300"
            >
              Filtrer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Liste des circuits -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div
          v-for="circuit in circuits"
          :key="circuit.id"
          class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
        >
          <div class="relative h-64">
            <img :src="circuit.image" :alt="circuit.name" class="w-full h-full object-cover" />
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900"
              >
                À partir de {{ circuit.price }}€
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">
              <router-link :to="'/circuits/' + circuit.id" class="hover:text-primary-600">
                {{ circuit.name }}
              </router-link>
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ circuit.description }}</p>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="ml-1 text-sm text-gray-500"
                  >{{ circuit.rating }} ({{ circuit.reviews }} avis)</span
                >
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">{{ circuit.duration }}</span>
                <router-link
                  :to="'/circuits/' + circuit.id"
                  class="text-primary-600 hover:text-primary-700 font-medium"
                >
                  En savoir plus →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const circuits = ref([
  {
    id: 1,
    name: "Tour d'Europe",
    description:
      'Un voyage inoubliable à travers les plus belles capitales européennes. De Paris à Rome, en passant par Berlin et Prague, découvrez la richesse culturelle et historique du Vieux Continent.',
    price: 2499,
    duration: '15 jours',
    rating: 4.8,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Visite de la Tour Eiffel et du Louvre à Paris',
      'Découverte de la Porte de Brandebourg à Berlin',
      'Exploration du Pont Charles à Prague',
      'Visite du Colisée et du Vatican à Rome',
      'Balade en gondole à Venise',
    ],
    itinerary: [
      "Arrivée à Paris, installation à l'hôtel et visite du quartier Montmartre",
      'Visite guidée de Paris : Tour Eiffel, Champs-Élysées, Arc de Triomphe',
      'Journée au Louvre et croisière sur la Seine',
      'Train pour Berlin, visite de la East Side Gallery',
      "Découverte de l'histoire de Berlin : Checkpoint Charlie, Reichstag",
      'Train pour Prague, visite de la vieille ville',
      'Exploration du château de Prague et du quartier juif',
      'Train pour Vienne, visite du palais de Schönbrunn',
      "Découverte de l'Opéra et du centre historique de Vienne",
      'Train pour Venise, balade en gondole',
      'Visite de la place Saint-Marc et du Palais des Doges',
      'Train pour Rome, visite du Colisée',
      'Découverte du Forum romain et du Panthéon',
      'Visite du Vatican et de la chapelle Sixtine',
      'Départ de Rome',
    ],
    includes: [
      'Vols internationaux',
      'Hébergement en hôtels 3-4 étoiles',
      'Petits-déjeuners',
      'Passes de train entre les villes',
      'Visites guidées dans chaque ville',
      'Entrées aux principaux monuments',
    ],
    excludes: [
      'Déjeuners et dîners',
      'Assurance voyage',
      'Dépenses personnelles',
      'Pourboires aux guides',
    ],
  },
  {
    id: 2,
    name: 'Route de la Soie',
    description:
      "Un voyage extraordinaire sur les traces des anciennes caravanes, à travers l'Asie centrale. De Xi'an à Samarcande, découvrez des cités millénaires et des paysages à couper le souffle.",
    price: 3299,
    duration: '21 jours',
    rating: 4.9,
    reviews: 89,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    highlights: [
      "Visite de l'armée de terre cuite à Xi'an",
      'Traversée du désert de Gobi',
      'Découverte des grottes de Mogao',
      'Exploration du bazar de Kashgar',
      'Visite de la place du Régistan à Samarcande',
    ],
    itinerary: [
      "Arrivée à Xi'an, installation et visite du quartier musulman",
      "Découverte de l'armée de terre cuite",
      "Visite de la Grande Mosquée et des remparts de Xi'an",
      'Vol pour Dunhuang, visite du marché de nuit',
      'Exploration des grottes de Mogao',
      'Randonnée dans les dunes de Mingsha',
      'Train pour Turpan, visite des ruines de Jiaohe',
      "Découverte du système d'irrigation Karez",
      'Route vers Kashgar',
      'Exploration du grand bazar de Kashgar',
      'Vol pour Tashkent, visite de la ville',
      'Train pour Samarcande',
      'Découverte de la place du Régistan',
      'Visite de la nécropole de Shah-i-Zinda',
      'Route vers Boukhara',
      'Exploration de la citadelle de Boukhara',
      'Visite du complexe Po-i-Kalyan',
      'Route vers Khiva',
      'Découverte de la ville fortifiée de Khiva',
      'Dernière journée à Khiva',
      'Départ',
    ],
    includes: [
      'Vols internationaux et domestiques',
      "Hébergement en hôtels et maisons d'hôtes",
      'Pension complète',
      'Transport en 4x4 privé',
      'Guide francophone',
      'Entrées aux sites',
    ],
    excludes: ['Visa pour certains pays', 'Assurance voyage', 'Boissons', 'Dépenses personnelles'],
  },
  {
    id: 3,
    name: 'Afrique du Sud',
    description: 'Safari et découverte de la culture locale',
    price: 2899,
    duration: 12,
    rating: 4.7,
    reviews: 124,
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Pérou Mystique',
    description: 'De Lima aux ruines de Machu Picchu',
    price: 2799,
    duration: 10,
    rating: 4.8,
    reviews: 112,
    image:
      'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Japon Traditionnel',
    description: 'Entre Tokyo et Kyoto, découvrez le Japon authentique',
    price: 3499,
    duration: 14,
    rating: 4.9,
    reviews: 178,
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Australie Aventure',
    description: 'De Sydney à la Grande Barrière de corail',
    price: 3999,
    duration: 16,
    rating: 4.8,
    reviews: 145,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
])
</script>
