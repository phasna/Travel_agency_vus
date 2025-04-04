<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="text-center">
              <svg
                class="mx-auto h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Réservation confirmée !</h3>
              <p class="mt-2 text-sm text-gray-500">
                Votre réservation a été confirmée avec succès. Vous recevrez un email de
                confirmation avec tous les détails.
              </p>
            </div>

            <div class="mt-6 border-t border-gray-200">
              <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">Numéro de réservation</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ bookingNumber }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">Destination</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ booking.destination }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">Dates</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Du {{ formatDate(booking.departureDate) }} au
                    {{ formatDate(booking.returnDate) }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">Nombre de passagers</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ booking.passengers }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">Prix total</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ booking.totalPrice }}€
                  </dd>
                </div>
              </dl>
            </div>

            <div class="mt-6">
              <div class="rounded-md bg-blue-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-blue-800">Prochaines étapes</h3>
                    <div class="mt-2 text-sm text-blue-700">
                      <ul class="list-disc pl-5 space-y-1">
                        <li>Vérifiez votre email pour les détails de votre réservation</li>
                        <li>Préparez vos documents de voyage</li>
                        <li>Contactez-nous si vous avez des questions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-center space-x-4">
              <router-link
                to="/destinations"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Voir d'autres destinations
              </router-link>
              <router-link
                to="/profile"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Voir mes réservations
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bookingNumber = ref('BK' + Math.random().toString(36).substr(2, 9).toUpperCase())

const booking = ref({
  destination: 'Paris, France',
  departureDate: '2024-05-01',
  returnDate: '2024-05-07',
  passengers: 2,
  totalPrice: 1198,
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
