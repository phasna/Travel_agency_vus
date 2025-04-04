<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Nature"
        />
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Découvrez le monde
        </h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl">
          Explorez des destinations incroyables, créez des souvenirs inoubliables et laissez-nous
          vous guider dans vos aventures.
        </p>
        <div class="mt-10">
          <router-link
            to="/destinations"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Voir les destinations
          </router-link>
        </div>
      </div>
    </div>

    <!-- Featured destinations -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-extrabold text-gray-900">Destinations populaires</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div
          v-for="destination in featuredDestinations"
          :key="destination.id"
          class="group relative"
        >
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75"
          >
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="'/destinations/' + destination.id">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ destination.name }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ destination.description }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ destination.price }}€</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features section -->
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900">Pourquoi nous choisir ?</h2>
            <p class="mt-4 text-lg text-gray-500">
              Nous vous offrons une expérience de voyage exceptionnelle avec des services
              personnalisés et un accompagnement de qualité.
            </p>
          </div>
          <div class="mt-12 lg:mt-0 lg:col-span-2">
            <dl class="space-y-12">
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">Meilleurs prix garantis</dt>
                <dd class="mt-2 text-base text-gray-500">
                  Nous négocions les meilleurs tarifs avec nos partenaires pour vous offrir des
                  voyages de qualité à prix compétitifs.
                </dd>
              </div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">Service personnalisé</dt>
                <dd class="mt-2 text-base text-gray-500">
                  Notre équipe d'experts vous accompagne dans l'organisation de votre voyage selon
                  vos envies et vos besoins.
                </dd>
              </div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">Assistance 24/7</dt>
                <dd class="mt-2 text-base text-gray-500">
                  Notre service client est disponible 24h/24 et 7j/7 pour répondre à vos questions
                  et vous accompagner pendant votre voyage.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const featuredDestinations = ref([
  {
    id: 1,
    name: 'Paris, France',
    description: "La ville de l'amour et de la culture",
    price: 599,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Tokyo, Japon',
    description: 'Entre tradition et modernité',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'New York, USA',
    description: 'La ville qui ne dort jamais',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Sydney, Australie',
    description: 'Entre mer et ville',
    price: 1499,
    image:
      'https://images.unsplash.com/photo-1506973035872-a4ecdc16dc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
])
</script>
