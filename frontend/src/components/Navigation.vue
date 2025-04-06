<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center">
              <span class="ml-2 text-2xl font-bold text-primary-600">TravelAgency</span>
            </router-link>
          </div>
          <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/' }"
            >
              Accueil
            </router-link>
            <router-link
              to="/destinations"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/destinations' }"
            >
              Destinations
            </router-link>
            <router-link
              to="/circuits"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/circuits' }"
            >
              Circuits
            </router-link>
            <router-link
              to="/sejours"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/sejours' }"
            >
              Séjours
            </router-link>
            <router-link
              to="/croisieres"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/croisieres' }"
            >
              Croisières
            </router-link>
            <router-link
              to="/services"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/services' }"
            >
              Services
            </router-link>
            <router-link
              to="/contact"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out"
              :class="{ 'border-primary-500 text-gray-900': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
          <div class="relative">
            <button
              @click="isSearchOpen = !isSearchOpen"
              class="p-2 text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div
              v-if="isSearchOpen"
              class="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg p-4"
            >
              <input
                type="text"
                placeholder="Rechercher..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <template v-if="isAuthenticated">
            <div class="relative">
              <button
                @click="isProfileOpen = !isProfileOpen"
                class="flex items-center space-x-2 text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <img :src="userAvatar" alt="Profile" class="h-8 w-8 rounded-full object-cover" />
                <span class="text-sm font-medium">{{ userName }}</span>
              </button>
              <div
                v-if="isProfileOpen"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              >
                <router-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mon Profil
                </router-link>
                <router-link
                  to="/reservations"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mes Réservations
                </router-link>
                <button
                  @click="logout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Déconnexion
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Connexion
            </router-link>
            <router-link
              to="/register"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
            >
              Inscription
            </router-link>
          </template>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Accueil
        </router-link>
        <router-link
          to="/destinations"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/destinations'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Destinations
        </router-link>
        <router-link
          to="/circuits"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/circuits'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Circuits
        </router-link>
        <router-link
          to="/sejours"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/sejours'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Séjours
        </router-link>
        <router-link
          to="/croisieres"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/croisieres'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Croisières
        </router-link>
        <router-link
          to="/services"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/services'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Services
        </router-link>
        <router-link
          to="/contact"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
          :class="[
            $route.path === '/contact'
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
        >
          Contact
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <template v-if="isAuthenticated">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img :src="userAvatar" alt="Profile" class="h-10 w-10 rounded-full" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ userName }}</div>
              <div class="text-sm font-medium text-gray-500">{{ userEmail }}</div>
            </div>
          </div>
          <div class="mt-3 space-y-1">
            <router-link
              to="/profile"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Mon Profil
            </router-link>
            <router-link
              to="/reservations"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Mes Réservations
            </router-link>
            <button
              @click="logout"
              class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Déconnexion
            </button>
          </div>
        </template>
        <template v-else>
          <div class="mt-3 space-y-1">
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
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const isSearchOpen = ref(false)
const isProfileOpen = ref(false)
const isAuthenticated = ref(false) // À remplacer par la logique d'authentification réelle

// Données utilisateur (à remplacer par les données réelles)
const userName = ref('John Doe')
const userEmail = ref('john.doe@example.com')
const userAvatar = ref(
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
)

const logout = () => {
  // Implémenter la logique de déconnexion
  isAuthenticated.value = false
  router.push('/login')
}

// Fermer les menus déroulants lors du clic en dehors
const closeDropdowns = () => {
  isSearchOpen.value = false
  isProfileOpen.value = false
}

// Ajouter un écouteur d'événements pour fermer les menus déroulants
onMounted(() => {
  document.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdowns)
})
</script>

<style scoped>
.router-link-active {
  @apply border-primary-500 text-gray-900;
}
</style>
