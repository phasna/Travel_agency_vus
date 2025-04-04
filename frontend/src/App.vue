<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Navigation />
    <main>
      <router-view />
    </main>
    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">À propos</h3>
            <p class="mt-4 text-base text-gray-500">
              Votre agence de voyage de confiance pour des expériences inoubliables à travers le
              monde.
            </p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Liens utiles
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <router-link to="/destinations" class="text-base text-gray-500 hover:text-gray-900">
                  Destinations
                </router-link>
              </li>
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Contact </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul class="mt-4 space-y-4">
              <li class="text-base text-gray-500">
                <span class="block">Email:</span>
                <a href="mailto:contact@travelagency.com" class="hover:text-gray-900">
                  contact@travelagency.com
                </a>
              </li>
              <li class="text-base text-gray-500">
                <span class="block">Téléphone:</span>
                <a href="tel:+33123456789" class="hover:text-gray-900"> +33 1 23 45 67 89 </a>
              </li>
              <li class="text-base text-gray-500">
                <span class="block">Adresse:</span>
                <span class="block">
                  123 Rue du Voyage<br />
                  75001 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-8">
          <p class="text-base text-gray-400 text-center">
            &copy; 2024 TravelAgency. Tous droits réservés.
          </p>
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
