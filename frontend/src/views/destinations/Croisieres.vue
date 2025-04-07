<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative h-[50vh]">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Croisières"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
        ></div>
      </div>
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Croisières de luxe
          </h1>
          <p class="mt-6 text-xl text-gray-300">
            Embarquez pour des voyages inoubliables à bord de nos navires de luxe.
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
              <option value="mediterranee">Méditerranée</option>
              <option value="caraibes">Caraïbes</option>
              <option value="norvege">Norvège</option>
              <option value="grece">Grèce</option>
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
            <label class="block text-sm font-medium text-gray-700">Compagnie</label>
            <select
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Toutes les compagnies</option>
              <option value="msc">MSC Croisières</option>
              <option value="costa">Costa Croisières</option>
              <option value="royal">Royal Caribbean</option>
              <option value="norwegian">Norwegian Cruise Line</option>
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

    <!-- Liste des croisières -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div
          v-for="croisiere in croisieres"
          :key="croisiere.id"
          class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
        >
          <div class="relative h-64">
            <img :src="croisiere.image" :alt="croisiere.name" class="w-full h-full object-cover" />
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900"
              >
                À partir de {{ croisiere.price }}€
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">
              <router-link :to="'/croisieres/' + croisiere.id" class="hover:text-primary-600">
                {{ croisiere.name }}
              </router-link>
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ croisiere.description }}</p>
            <div class="mt-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-sm text-gray-500"
                    >{{ croisiere.rating }} ({{ croisiere.reviews }} avis)</span
                  >
                </div>
                <span class="text-sm text-gray-500">{{ croisiere.duration }} jours</span>
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
                  <span class="text-sm text-gray-500">{{ croisiere.compagnie }}</span>
                </div>
                <router-link
                  :to="'/croisieres/' + croisiere.id"
                  class="text-primary-600 hover:text-primary-700 font-medium"
                >
                  En savoir plus →
                </router-link>
              </div>
              <div class="mt-4">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(port, index) in croisiere.ports"
                    :key="index"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {{ port }}
                  </span>
                </div>
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

const croisieres = ref([
  {
    id: 1,
    name: 'Méditerranée Enchantée',
    description: 'Découvrez les plus belles îles de la Méditerranée',
    price: 899,
    duration: 7,
    rating: 4.8,
    reviews: 245,
    compagnie: 'MSC Croisières',
    ports: ['Barcelone', 'Palerme', 'Malte', 'Ibiza', 'Marseille'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Caraïbes Paradise',
    description: 'Plages de sable blanc et eaux turquoise',
    price: 1299,
    duration: 10,
    rating: 4.9,
    reviews: 189,
    compagnie: 'Royal Caribbean',
    ports: ['Miami', 'Jamaïque', 'Haïti', 'Mexique', 'Bahamas'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Norvège Fjords',
    description: 'Paysages spectaculaires des fjords norvégiens',
    price: 1499,
    duration: 8,
    rating: 4.7,
    reviews: 167,
    compagnie: 'Norwegian Cruise Line',
    ports: ['Oslo', 'Bergen', 'Geiranger', 'Stavanger', 'Kristiansand'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Grèce Antique',
    description: "Voyage dans l'histoire de la Grèce antique",
    price: 999,
    duration: 7,
    rating: 4.8,
    reviews: 156,
    compagnie: 'Costa Croisières',
    ports: ['Athènes', 'Santorini', 'Mykonos', 'Rhodes', 'Corfou'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Adriatique Splendeur',
    description: 'Croisière le long des côtes adriatiques',
    price: 799,
    duration: 6,
    rating: 4.7,
    reviews: 134,
    compagnie: 'MSC Croisières',
    ports: ['Venise', 'Split', 'Dubrovnik', 'Kotor', 'Trieste'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Baltique Royale',
    description: 'Découverte des capitales de la Baltique',
    price: 1199,
    duration: 9,
    rating: 4.8,
    reviews: 178,
    compagnie: 'Royal Caribbean',
    ports: ['Copenhague', 'Stockholm', 'Helsinki', 'Tallinn', 'Saint-Pétersbourg'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
])
</script>
