<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <Navigation />

    <!-- Contenu principal -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- À propos -->
          <div>
            <h3 class="text-lg font-semibold mb-4">À propos</h3>
            <p class="text-gray-300">
              Votre agence de voyage de confiance pour des expériences inoubliables à travers le
              monde.
            </p>
          </div>

          <!-- Liens utiles -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </router-link>
              </li>
              <li>
                <router-link
                  to="/destinations"
                  class="text-gray-300 hover:text-white transition-colors"
                >
                  Destinations
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-white transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@travelagency.com
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                +33 1 23 45 67 89
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                123 Rue du Voyage, 75001 Paris
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Travel Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
