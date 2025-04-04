<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Destinations populaires</h2>

      <!-- Filtres -->
      <div class="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div class="flex-1 min-w-0">
          <div class="relative rounded-md shadow-sm">
            <input
              type="text"
              v-model="searchQuery"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Rechercher une destination..."
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-4">
          <select
            v-model="selectedContinent"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Tous les continents</option>
            <option value="europe">Europe</option>
            <option value="asia">Asie</option>
            <option value="america">Amérique</option>
            <option value="africa">Afrique</option>
            <option value="oceania">Océanie</option>
          </select>
        </div>
      </div>

      <!-- Grille de destinations -->
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="destination in filteredDestinations" :key="destination.id" class="group">
          <div
            class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
          >
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="{ name: 'booking', params: { id: destination.id } }">
                  {{ destination.name }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ destination.country }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ destination.price }}€</p>
          </div>
          <div class="mt-2">
            <div class="flex items-center">
              <svg
                v-for="star in 5"
                :key="star"
                class="h-5 w-5"
                :class="star <= destination.rating ? 'text-yellow-400' : 'text-gray-200'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="ml-2 text-sm text-gray-500">({{ destination.reviews }})</span>
            </div>
          </div>
          <div class="mt-4">
            <router-link
              :to="{ name: 'booking', params: { id: destination.id } }"
              class="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Réserver
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Destination {
  id: number
  name: string
  country: string
  continent: string
  price: number
  rating: number
  reviews: number
  image: string
}

// Données de test
const destinations = ref<Destination[]>([
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    continent: 'europe',
    price: 599,
    rating: 4.5,
    reviews: 128,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    name: 'Tokyo',
    country: 'Japon',
    continent: 'asia',
    price: 899,
    rating: 4.8,
    reviews: 256,
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    name: 'New York',
    country: 'États-Unis',
    continent: 'america',
    price: 799,
    rating: 4.6,
    reviews: 189,
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    name: 'Sydney',
    country: 'Australie',
    continent: 'oceania',
    price: 999,
    rating: 4.7,
    reviews: 145,
    image:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 5,
    name: 'Marrakech',
    country: 'Maroc',
    continent: 'africa',
    price: 499,
    rating: 4.4,
    reviews: 167,
    image:
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 6,
    name: 'Rome',
    country: 'Italie',
    continent: 'europe',
    price: 649,
    rating: 4.6,
    reviews: 234,
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
])

const searchQuery = ref('')
const selectedContinent = ref('')

const filteredDestinations = computed(() => {
  return destinations.value.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesContinent =
      !selectedContinent.value || destination.continent === selectedContinent.value
    return matchesSearch && matchesContinent
  })
})
</script>
