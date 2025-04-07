<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Destinations populaires</h2>
      <p class="mt-4 text-lg text-gray-500">
        Découvrez nos destinations les plus appréciées par nos voyageurs
      </p>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div
        v-for="destination in featuredDestinations"
        :key="destination.id"
        class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
      >
        <div class="relative h-64">
          <img
            :src="destination.image"
            :alt="destination.name"
            class="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
            @error="handleImageError"
          />
          <div class="absolute top-4 right-4 flex flex-col space-y-2">
            <span
              v-if="destination.discount"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white"
            >
              -{{ destination.discount }}%
            </span>
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900"
            >
              À partir de {{ destination.price }}€
            </span>
          </div>
          <div class="absolute bottom-4 left-4">
            <div class="flex items-center space-x-1">
              <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="text-white font-medium">{{ destination.rating }}</span>
              <span class="text-white text-sm">({{ destination.reviews }} avis)</span>
            </div>
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">
              <router-link :to="'/destinations/' + destination.id" class="hover:text-primary-600">
                {{ destination.name }}
              </router-link>
            </h3>
            <span class="text-sm text-gray-500">{{ destination.duration }}</span>
          </div>
          <p class="mt-2 text-sm text-gray-500">{{ destination.description }}</p>
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-sm text-gray-500">{{ destination.location }}</span>
            </div>
            <router-link
              :to="'/destinations/' + destination.id"
              class="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              En savoir plus
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { featuredDestinations } from '@/data/destinationData'

const handleImageError = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://via.placeholder.com/800x600?text=Destination'
}
</script>

<style scoped>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.bg-red-500 {
  animation: pulse 2s infinite;
}
</style>
