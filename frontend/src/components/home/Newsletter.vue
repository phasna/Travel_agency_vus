<template>
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
        <form @submit.prevent="handleNewsletterSubmit" class="sm:flex">
          <label for="email-address" class="sr-only">Adresse email</label>
          <input
            id="email-address"
            v-model="newsletterEmail"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
            placeholder="Entrez votre email"
            :class="{ 'border-red-500': newsletterError }"
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
        <p v-if="newsletterError" class="mt-2 text-sm text-red-300">{{ newsletterError }}</p>
        <p v-if="newsletterSuccess" class="mt-2 text-sm text-green-300">
          {{ newsletterSuccess }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewsletter } from '@/composables/useNewsletter'

const { newsletterEmail, newsletterError, newsletterSuccess, handleNewsletterSubmit } =
  useNewsletter()
</script>
