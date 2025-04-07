<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative h-[50vh]">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Séjours"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
        ></div>
      </div>
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Séjours de rêve
          </h1>
          <p class="mt-6 text-xl text-gray-300">
            Profitez de nos séjours tout compris dans les plus belles destinations du monde.
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
              <option value="caraibes">Caraïbes</option>
              <option value="mediterranee">Méditerranée</option>
              <option value="ocean-indien">Océan Indien</option>
              <option value="pacifique">Pacifique</option>
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
            <label class="block text-sm font-medium text-gray-700">Type d'hébergement</label>
            <select
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Tous les types</option>
              <option value="hotel">Hôtel</option>
              <option value="resort">Resort</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
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

    <!-- Liste des séjours -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div
          v-for="sejour in sejours"
          :key="sejour.id"
          class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
        >
          <div class="relative h-64">
            <img :src="sejour.image" :alt="sejour.name" class="w-full h-full object-cover" />
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900"
              >
                À partir de {{ sejour.price }}€
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">
              <router-link :to="'/sejours/' + sejour.id" class="hover:text-primary-600">
                {{ sejour.name }}
              </router-link>
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ sejour.description }}</p>
            <div class="mt-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-sm text-gray-500"
                    >{{ sejour.rating }} ({{ sejour.reviews }} avis)</span
                  >
                </div>
                <span class="text-sm text-gray-500">{{ sejour.duration }} jours</span>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span class="text-sm text-gray-500">{{ sejour.hebergement }}</span>
                </div>
                <router-link
                  :to="'/sejours/' + sejour.id"
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

const sejours = ref([
  {
    id: 1,
    name: 'Maldives Paradise',
    description: 'Séjour dans un resort de luxe sur une île privée',
    price: 1999,
    duration: 7,
    rating: 4.9,
    reviews: 234,
    hebergement: 'Resort 5 étoiles',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Bali Relax',
    description: 'Détente et bien-être dans un spa de luxe',
    price: 1799,
    duration: 10,
    rating: 4.8,
    reviews: 189,
    hebergement: 'Hôtel 5 étoiles',
    image:
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Santorini Dreams',
    description: 'Villa avec vue sur la mer Égée',
    price: 1599,
    duration: 8,
    rating: 4.7,
    reviews: 156,
    hebergement: 'Villa privée',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Dubai Luxury',
    description: 'Expérience luxueuse dans la ville du futur',
    price: 2299,
    duration: 6,
    rating: 4.8,
    reviews: 145,
    hebergement: 'Hôtel 5 étoiles',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Maurice Escape',
    description: 'Séjour balnéaire dans un resort exclusif',
    price: 1899,
    duration: 9,
    rating: 4.9,
    reviews: 178,
    hebergement: 'Resort 5 étoiles',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Caraïbes Plage',
    description: "Villa de luxe les pieds dans l'eau",
    price: 2499,
    duration: 7,
    rating: 4.8,
    reviews: 167,
    hebergement: 'Villa privée',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
])
</script>
