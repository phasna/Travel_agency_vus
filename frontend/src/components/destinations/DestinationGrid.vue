<template>
  <div
    class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <div
      v-for="destination in destinations"
      :key="destination.id"
      class="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
    >
      <div class="relative h-64">
        <img
          :src="destination.image"
          :alt="destination.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
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
</template>

<script setup lang="ts">
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

defineProps<{
  destinations: Destination[]
}>()

// Fonction pour gérer les erreurs de chargement d'image
const handleImageError = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://via.placeholder.com/800x600?text=Destination'
}
</script>
