<template>
  <div class="my-bookings-page">
    <!-- Hero Section -->
    <div class="bg-primary text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Mes réservations</h1>
        <p class="text-xl opacity-90">Consultez et gérez vos réservations en cours</p>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="container mx-auto px-4 py-12">
      <!-- État de chargement -->
      <div v-if="bookingStore.isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>

      <!-- Message d'erreur -->
      <div
        v-else-if="bookingStore.error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
      >
        <strong class="font-bold">Erreur !</strong>
        <span class="block sm:inline">{{ bookingStore.error }}</span>
      </div>

      <!-- Liste des réservations -->
      <div v-else-if="bookingStore.bookings.length > 0" class="space-y-6">
        <div
          v-for="booking in bookingStore.bookings"
          :key="booking.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="md:flex">
            <!-- Image de la destination -->
            <div class="md:w-1/3">
              <img
                :src="booking.destination?.image_url"
                :alt="booking.destination?.name"
                class="w-full h-48 md:h-full object-cover"
              />
            </div>

            <!-- Détails de la réservation -->
            <div class="p-6 md:w-2/3">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">{{ booking.destination?.name }}</h3>
                  <p class="text-gray-600">{{ booking.destination?.country }}</p>
                </div>
                <span
                  :class="[
                    getStatusColor(booking.status),
                    'px-3 py-1 rounded-full text-sm font-semibold',
                  ]"
                >
                  {{ booking.status }}
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p class="text-sm text-gray-600">Date de départ</p>
                  <p class="font-medium">{{ formatDate(booking.additional_info.startDate) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Date de retour</p>
                  <p class="font-medium">{{ formatDate(booking.additional_info.endDate) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Nombre de voyageurs</p>
                  <p class="font-medium">
                    {{ booking.additional_info.adults }} adulte(s) et
                    {{ booking.additional_info.children }} enfant(s)
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Prix total</p>
                  <p class="font-medium">{{ formatPrice(booking.total_price) }}</p>
                </div>
              </div>

              <!-- Options supplémentaires -->
              <div v-if="booking.additional_info" class="mb-4">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Options supplémentaires</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-if="booking.additional_info.insurance"
                    class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    Assurance voyage
                  </span>
                  <span
                    v-if="booking.additional_info.transfer"
                    class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    Transfert aéroport
                  </span>
                  <span
                    v-if="booking.additional_info.guide"
                    class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    Guide local
                  </span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex justify-end space-x-4">
                <button
                  @click="downloadVoucher(booking.id)"
                  class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Télécharger le voucher
                </button>
                <button
                  v-if="booking.status === 'pending'"
                  @click="cancelBooking(booking.id)"
                  class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Annuler la réservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Message si aucune réservation -->
      <div v-else class="text-center py-12">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">Aucune réservation</h3>
        <p class="mt-1 text-sm text-gray-500">Vous n'avez pas encore de réservation en cours.</p>
        <div class="mt-6">
          <router-link
            to="/destinations"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Découvrir nos destinations
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useBookingStore } from '@/stores/booking'
import { useAuthStore } from '@/stores/auth'

const bookingStore = useBookingStore()
const authStore = useAuthStore()

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await bookingStore.fetchUserBookings()
  }
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'confirmed':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const downloadVoucher = (bookingId: number) => {
  // TODO: Implémenter le téléchargement du voucher
  console.log('Téléchargement du voucher pour la réservation:', bookingId)
}

const cancelBooking = async (bookingId: number) => {
  // TODO: Implémenter l'annulation de la réservation
  console.log('Annulation de la réservation:', bookingId)
}
</script>

<style scoped>
.my-bookings-page {
  min-height: 100vh;
  background-color: #f9fafb;
}
</style>
