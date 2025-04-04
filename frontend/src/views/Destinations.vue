<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero section -->
    <div class="relative bg-gray-900">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Destinations"
        />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Explorez le monde
        </h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl">
          Découvrez nos destinations exceptionnelles et commencez à planifier votre prochaine
          aventure.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Filtres améliorés -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700">Rechercher</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                v-model="searchQuery"
                class="focus:ring-primary-500 focus:border-primary-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
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
          <div>
            <label class="block text-sm font-medium text-gray-700">Continent</label>
            <select
              v-model="selectedContinent"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option value="">Tous les continents</option>
              <option value="europe">Europe</option>
              <option value="asia">Asie</option>
              <option value="america">Amérique</option>
              <option value="africa">Afrique</option>
              <option value="oceania">Océanie</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prix maximum</label>
            <select
              v-model="selectedPriceRange"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option value="">Tous les prix</option>
              <option value="500">Moins de 500€</option>
              <option value="1000">Moins de 1000€</option>
              <option value="1500">Moins de 1500€</option>
              <option value="2000">Moins de 2000€</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Statistiques -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Destinations disponibles
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">
                      {{ destinations.length }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Voyageurs satisfaits</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">2,500+</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Note moyenne</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">4.8/5</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Prix moyen</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">750€</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grille de destinations -->
      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="destination in filteredDestinations"
          :key="destination.id"
          class="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
        >
          <div class="relative h-64">
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900"
              >
                À partir de {{ destination.price }}€
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">
                  <router-link
                    :to="{ name: 'booking', params: { id: destination.id } }"
                    class="hover:text-primary-600"
                  >
                    {{ destination.name }}
                  </router-link>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ destination.country }}</p>
              </div>
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
                class="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
              >
                Réserver maintenant
              </router-link>
            </div>
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
  {
    id: 7,
    name: 'Bali',
    country: 'Indonésie',
    continent: 'asia',
    price: 799,
    rating: 4.9,
    reviews: 312,
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 8,
    name: 'Barcelona',
    country: 'Espagne',
    continent: 'europe',
    price: 549,
    rating: 4.7,
    reviews: 198,
    image:
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
])

const searchQuery = ref('')
const selectedContinent = ref('')
const selectedPriceRange = ref('')

const filteredDestinations = computed(() => {
  return destinations.value.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesContinent =
      !selectedContinent.value || destination.continent === selectedContinent.value
    const matchesPrice =
      !selectedPriceRange.value || destination.price <= parseInt(selectedPriceRange.value)
    return matchesSearch && matchesContinent && matchesPrice
  })
})
</script>
