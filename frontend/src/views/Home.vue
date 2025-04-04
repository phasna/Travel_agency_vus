<template>
  <div class="bg-white">
    <!-- Hero section avec slider -->
    <div class="relative h-[80vh]">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Nature"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
        ></div>
      </div>
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Découvrez le monde avec nous
          </h1>
          <p class="mt-6 text-xl text-gray-300">
            Explorez des destinations incroyables, créez des souvenirs inoubliables et laissez-nous
            vous guider dans vos aventures.
          </p>
          <div class="mt-10 flex space-x-4">
            <router-link
              to="/destinations"
              class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
            >
              Explorer les destinations
            </router-link>
            <router-link
              to="/booking"
              class="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Réserver maintenant
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Barre de recherche -->
    <div class="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-xl p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Destination</label>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Où voulez-vous aller ?"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Date de départ</label>
            <input
              type="date"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Date de retour</label>
            <input
              type="date"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div class="flex items-end">
            <button
              class="w-full bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition duration-300"
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Destinations populaires -->
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
            <h3 class="text-lg font-medium text-gray-900">
              <router-link :to="'/destinations/' + destination.id" class="hover:text-primary-600">
                {{ destination.name }}
              </router-link>
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ destination.description }}</p>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="ml-1 text-sm text-gray-500">4.8 (120 avis)</span>
              </div>
              <router-link
                :to="'/destinations/' + destination.id"
                class="text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Services -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nos Services</h2>
          <p class="mt-4 text-lg text-gray-500">
            Une expérience de voyage complète et personnalisée
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg
                class="w-6 h-6 text-primary-600"
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
            <h3 class="mt-4 text-lg font-medium text-gray-900">Voyages sur mesure</h3>
            <p class="mt-2 text-gray-500">
              Créez votre voyage idéal avec l'aide de nos experts en voyage personnalisé.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Assistance 24/7</h3>
            <p class="mt-2 text-gray-500">
              Notre équipe est disponible à tout moment pour vous accompagner pendant votre voyage.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Voyages sécurisés</h3>
            <p class="mt-2 text-gray-500">
              Profitez de nos voyages en toute sécurité avec une assurance voyage complète.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Témoignages -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ce que disent nos voyageurs
        </h2>
        <p class="mt-4 text-lg text-gray-500">
          Découvrez les expériences de nos clients satisfaits
        </p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-lg shadow-lg p-6"
        >
          <div class="flex items-center">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full" />
            <div class="ml-4">
              <h4 class="text-lg font-medium text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-gray-500">{{ testimonial.location }}</p>
            </div>
          </div>
          <p class="mt-4 text-gray-500">{{ testimonial.content }}</p>
          <div class="mt-4 flex items-center">
            <div class="flex items-center">
              <svg
                v-for="i in 5"
                :key="i"
                class="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Newsletter -->
    <div class="bg-primary-600">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Restez informé de nos offres
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-primary-100">
            Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et actualités.
          </p>
        </div>
        <div class="mt-8 lg:mt-0 lg:ml-8">
          <form class="sm:flex">
            <label for="email-address" class="sr-only">Adresse email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Entrez votre email"
            />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
              >
                S'inscrire
              </button>
            </div>
          </form>
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

const testimonials = ref([
  {
    id: 1,
    name: 'Marie Dubois',
    location: 'Paris, France',
    content:
      "Une expérience incroyable ! L'équipe a été très professionnelle et nous a permis de vivre un voyage inoubliable au Japon.",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Jean Martin',
    location: 'Lyon, France',
    content:
      'Service client exceptionnel et organisation parfaite. Je recommande vivement pour vos prochains voyages !',
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    location: 'Bordeaux, France',
    content:
      'Un voyage sur mesure parfaitement organisé. Les guides étaient excellents et les activités proposées étaient variées.',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
])
</script>
