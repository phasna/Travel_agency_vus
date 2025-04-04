<template>
  <div class="booking-page">
    <!-- Hero Section -->
    <div
      class="hero-section"
      :style="{
        backgroundImage: `url(${currentDestination?.image || '/images/default-hero.jpg'})`,
      }"
    >
      <div class="hero-overlay">
        <div class="container mx-auto px-4 py-16">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Réserver votre voyage à {{ currentDestination?.name }}
          </h1>
          <p class="text-xl text-white opacity-90">
            {{ currentDestination?.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="container mx-auto px-4 py-8">
      <div class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-4 py-8">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Erreur!</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>
    </div>

    <!-- Booking Form -->
    <div v-else class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Form Section -->
        <div class="lg:col-span-2">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Personal Information -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-semibold mb-4">Informations personnelles</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.firstName }"
                  />
                  <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
                    {{ errors.firstName }}
                  </p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.lastName }"
                  />
                  <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                    {{ errors.lastName }}
                  </p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.phone }"
                  />
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
                </div>
              </div>
            </div>

            <!-- Travel Dates -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-semibold mb-4">Dates de voyage</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Date de départ</label>
                  <input
                    v-model="form.startDate"
                    type="date"
                    required
                    :min="minDate"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.startDate }"
                  />
                  <p v-if="errors.startDate" class="mt-1 text-sm text-red-600">
                    {{ errors.startDate }}
                  </p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Date de retour</label>
                  <input
                    v-model="form.endDate"
                    type="date"
                    required
                    :min="form.startDate"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.endDate }"
                  />
                  <p v-if="errors.endDate" class="mt-1 text-sm text-red-600">
                    {{ errors.endDate }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Number of Travelers -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-semibold mb-4">Nombre de voyageurs</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Adultes</label>
                  <input
                    v-model.number="form.adults"
                    type="number"
                    min="1"
                    max="10"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.adults }"
                  />
                  <p v-if="errors.adults" class="mt-1 text-sm text-red-600">{{ errors.adults }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Enfants</label>
                  <input
                    v-model.number="form.children"
                    type="number"
                    min="0"
                    max="10"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.children }"
                  />
                  <p v-if="errors.children" class="mt-1 text-sm text-red-600">
                    {{ errors.children }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Additional Options -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-semibold mb-4">Options supplémentaires</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      v-model="form.insurance"
                      type="checkbox"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3">
                    <label class="text-sm font-medium text-gray-700">Assurance voyage</label>
                    <p class="text-sm text-gray-500">
                      49€ par personne - Couverture complète pendant votre séjour
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      v-model="form.transfer"
                      type="checkbox"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3">
                    <label class="text-sm font-medium text-gray-700">Transfert aéroport</label>
                    <p class="text-sm text-gray-500">29€ par trajet - Service de navette privée</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      v-model="form.guide"
                      type="checkbox"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3">
                    <label class="text-sm font-medium text-gray-700">Guide touristique</label>
                    <p class="text-sm text-gray-500">99€ par jour - Guide francophone privé</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Traitement en cours...</span>
                <span v-else>Confirmer la réservation</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Summary Section -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 class="text-2xl font-semibold mb-4">Récapitulatif</h2>

            <!-- Destination Info -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-gray-900">
                {{ currentDestination?.name }}, {{ currentDestination?.country }}
              </h3>
              <div class="mt-2 flex items-center">
                <div class="flex items-center">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="h-5 w-5"
                    :class="
                      i <= Math.floor(currentDestination?.rating || 0)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="ml-2 text-sm text-gray-500"
                  >({{ currentDestination?.reviews }} avis)</span
                >
              </div>
            </div>

            <!-- Price Breakdown -->
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Prix de base</span>
                <span class="font-medium">{{ basePrice }}€</span>
              </div>
              <div v-if="form.insurance" class="flex justify-between">
                <span class="text-gray-600">Assurance voyage</span>
                <span class="font-medium">{{ insurancePrice }}€</span>
              </div>
              <div v-if="form.transfer" class="flex justify-between">
                <span class="text-gray-600">Transfert aéroport</span>
                <span class="font-medium">{{ transferPrice }}€</span>
              </div>
              <div v-if="form.guide" class="flex justify-between">
                <span class="text-gray-600">Guide touristique</span>
                <span class="font-medium">{{ guidePrice }}€</span>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <div class="flex justify-between">
                  <span class="text-lg font-semibold">Total</span>
                  <span class="text-lg font-semibold text-primary">{{ totalPrice }}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookingStore, type BookingForm } from '@/stores/booking'

const route = useRoute()
const router = useRouter()
const bookingStore = useBookingStore()

// Form state
const form = ref<BookingForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  startDate: '',
  endDate: '',
  adults: 1,
  children: 0,
  insurance: false,
  transfer: false,
  guide: false,
  destinationId: Number(route.params.id) || 0,
})

// Form validation
const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)

// Computed properties
const currentDestination = computed(() => bookingStore.currentDestination)
const isLoading = computed(() => bookingStore.isLoading)
const error = computed(() => bookingStore.error)

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const basePrice = computed(() => {
  if (!currentDestination.value) return 0
  return currentDestination.value.price * (form.value.adults + form.value.children)
})

const insurancePrice = computed(() => {
  return form.value.insurance ? 49 * (form.value.adults + form.value.children) : 0
})

const transferPrice = computed(() => {
  return form.value.transfer ? 29 * 2 : 0 // Aller-retour
})

const guidePrice = computed(() => {
  return form.value.guide ? 99 : 0
})

const totalPrice = computed(() => {
  return basePrice.value + insurancePrice.value + transferPrice.value + guidePrice.value
})

// Methods
const validateForm = () => {
  errors.value = {}

  if (!form.value.firstName) {
    errors.value.firstName = 'Le prénom est requis'
  }

  if (!form.value.lastName) {
    errors.value.lastName = 'Le nom est requis'
  }

  if (!form.value.email) {
    errors.value.email = "L'email est requis"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = "L'email n'est pas valide"
  }

  if (!form.value.phone) {
    errors.value.phone = 'Le numéro de téléphone est requis'
  }

  if (!form.value.startDate) {
    errors.value.startDate = 'La date de départ est requise'
  }

  if (!form.value.endDate) {
    errors.value.endDate = 'La date de retour est requise'
  } else if (form.value.startDate && form.value.endDate < form.value.startDate) {
    errors.value.endDate = 'La date de retour doit être postérieure à la date de départ'
  }

  if (!form.value.adults || form.value.adults < 1) {
    errors.value.adults = 'Au moins un adulte est requis'
  }

  if (form.value.children < 0) {
    errors.value.children = "Le nombre d'enfants ne peut pas être négatif"
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    const response = await bookingStore.submitBooking(form.value)
    if (response) {
      router.push({
        name: 'booking-confirmation',
        params: { id: response.id },
      })
    }
  } catch (err) {
    console.error('Erreur lors de la soumission du formulaire:', err)
  } finally {
    isSubmitting.value = false
  }
}

// Lifecycle hooks
onMounted(async () => {
  if (form.value.destinationId) {
    await bookingStore.fetchDestinationById(form.value.destinationId)
  }
})
</script>

<style scoped>
.booking-page {
  min-height: 100vh;
  background-color: #f3f4f6;
}

.hero-section {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
