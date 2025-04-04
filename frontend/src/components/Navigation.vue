<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-2xl font-bold text-indigo-600">
              TravelAgency
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{ 'border-indigo-500 text-gray-900': $route.path === '/' }"
            >
              Accueil
            </router-link>
            <router-link
              to="/destinations"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{ 'border-indigo-500 text-gray-900': $route.path === '/destinations' }"
            >
              Destinations
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <template v-if="isAuthenticated">
            <button
              @click="logout"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Déconnexion
            </button>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Connexion
            </router-link>
            <router-link
              to="/register"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Inscription
            </router-link>
          </template>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Ouvrir le menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div class="sm:hidden" :class="{ block: isOpen, hidden: !isOpen }">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[
            $route.path === '/'
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Accueil
        </router-link>
        <router-link
          to="/destinations"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[
            $route.path === '/destinations'
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Destinations
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <template v-if="isAuthenticated">
          <button
            @click="logout"
            class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            Déconnexion
          </button>
        </template>
        <template v-else>
          <router-link
            to="/login"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            Connexion
          </router-link>
          <router-link
            to="/register"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            Inscription
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const isAuthenticated = ref(false) // À remplacer par la logique d'authentification réelle

const logout = () => {
  // Implémenter la logique de déconnexion
  isAuthenticated.value = false
  router.push('/login')
}
</script>
