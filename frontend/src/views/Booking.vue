<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-extrabold text-gray-900">Réserver votre voyage</h1>
        <p class="mt-4 text-lg text-gray-500">
          Remplissez le formulaire ci-dessous pour finaliser votre réservation.
        </p>

        <form @submit.prevent="handleSubmit" class="mt-12 space-y-8">
          <!-- Informations personnelles -->
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Informations personnelles</h3>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Prénom</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      v-model="form.firstName"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.firstName }"
                    />
                  </div>
                  <p v-if="errors.firstName" class="mt-2 text-sm text-red-600">
                    {{ errors.firstName }}
                  </p>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Nom</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      v-model="form.lastName"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.lastName }"
                    />
                  </div>
                  <p v-if="errors.lastName" class="mt-2 text-sm text-red-600">
                    {{ errors.lastName }}
                  </p>
                </div>

                <div class="sm:col-span-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <div class="mt-1">
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.email }"
                    />
                  </div>
                  <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
                </div>

                <div class="sm:col-span-2">
                  <label for="phone" class="block text-sm font-medium text-gray-700"
                    >Téléphone</label
                  >
                  <div class="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.phone }"
                    />
                  </div>
                  <p v-if="errors.phone" class="mt-2 text-sm text-red-600">{{ errors.phone }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Dates et nombre de personnes -->
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Dates et nombre de personnes
              </h3>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="start-date" class="block text-sm font-medium text-gray-700"
                    >Date de départ</label
                  >
                  <div class="mt-1">
                    <input
                      type="date"
                      id="start-date"
                      v-model="form.startDate"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.startDate }"
                    />
                  </div>
                  <p v-if="errors.startDate" class="mt-2 text-sm text-red-600">
                    {{ errors.startDate }}
                  </p>
                </div>

                <div class="sm:col-span-3">
                  <label for="end-date" class="block text-sm font-medium text-gray-700"
                    >Date de retour</label
                  >
                  <div class="mt-1">
                    <input
                      type="date"
                      id="end-date"
                      v-model="form.endDate"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.endDate }"
                    />
                  </div>
                  <p v-if="errors.endDate" class="mt-2 text-sm text-red-600">
                    {{ errors.endDate }}
                  </p>
                </div>

                <div class="sm:col-span-3">
                  <label for="adults" class="block text-sm font-medium text-gray-700"
                    >Nombre d'adultes</label
                  >
                  <div class="mt-1">
                    <input
                      type="number"
                      id="adults"
                      v-model="form.adults"
                      min="1"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.adults }"
                    />
                  </div>
                  <p v-if="errors.adults" class="mt-2 text-sm text-red-600">{{ errors.adults }}</p>
                </div>

                <div class="sm:col-span-3">
                  <label for="children" class="block text-sm font-medium text-gray-700"
                    >Nombre d'enfants</label
                  >
                  <div class="mt-1">
                    <input
                      type="number"
                      id="children"
                      v-model="form.children"
                      min="0"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      :class="{ 'border-red-300': errors.children }"
                    />
                  </div>
                  <p v-if="errors.children" class="mt-2 text-sm text-red-600">
                    {{ errors.children }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Options supplémentaires -->
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Options supplémentaires</h3>
              <div class="mt-6 space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="insurance"
                      v-model="form.insurance"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="insurance" class="font-medium text-gray-700"
                      >Assurance voyage</label
                    >
                    <p class="text-gray-500">
                      Protection complète pendant votre séjour (+49€/personne)
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="transfer"
                      v-model="form.transfer"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="transfer" class="font-medium text-gray-700"
                      >Transfert aéroport</label
                    >
                    <p class="text-gray-500">
                      Service de transfert privé depuis l'aéroport (+29€/trajet)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Récapitulatif et paiement -->
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Récapitulatif</h3>
              <div class="mt-6">
                <dl class="divide-y divide-gray-200">
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Destination</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {{ destination?.name }}, {{ destination?.country }}
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Prix de base</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {{ destination?.price }}€ par personne
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Options</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li
                          v-if="form.insurance"
                          class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                        >
                          <div class="w-0 flex-1 flex items-center">
                            <span class="ml-2 flex-1 w-0 truncate">Assurance voyage</span>
                          </div>
                          <div class="ml-4 flex-shrink-0">{{ insurancePrice }}€</div>
                        </li>
                        <li
                          v-if="form.transfer"
                          class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                        >
                          <div class="w-0 flex-1 flex items-center">
                            <span class="ml-2 flex-1 w-0 truncate">Transfert aéroport</span>
                          </div>
                          <div class="ml-4 flex-shrink-0">{{ transferPrice }}€</div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Total</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {{ totalPrice }}€
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button
                type="button"
                @click="$router.push('/destinations')"
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Annuler
              </button>
              <button
                type="submit"
                :disabled="isLoading"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
              >
                <svg
                  v-if="isLoading"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ isLoading ? 'Traitement en cours...' : 'Confirmer la réservation' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Destination {
  id: number
  name: string
  country: string
  price: number
}

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const destination = ref<Destination | null>(null)

const form = reactive({
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
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  startDate: '',
  endDate: '',
  adults: '',
  children: '',
})

// Prix des options
const insurancePrice = computed(() => {
  if (!form.insurance) return 0
  return 49 * (form.adults + form.children)
})

const transferPrice = computed(() => {
  if (!form.transfer) return 0
  return 29 * 2 // Aller-retour
})

const totalPrice = computed(() => {
  if (!destination.value) return 0
  const basePrice = destination.value.price * (form.adults + form.children)
  return basePrice + insurancePrice.value + transferPrice.value
})

const validateForm = () => {
  let isValid = true
  errors.firstName = ''
  errors.lastName = ''
  errors.email = ''
  errors.phone = ''
  errors.startDate = ''
  errors.endDate = ''
  errors.adults = ''
  errors.children = ''

  if (!form.firstName) {
    errors.firstName = 'Le prénom est requis'
    isValid = false
  }

  if (!form.lastName) {
    errors.lastName = 'Le nom est requis'
    isValid = false
  }

  if (!form.email) {
    errors.email = "L'email est requis"
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "L'email n'est pas valide"
    isValid = false
  }

  if (!form.phone) {
    errors.phone = 'Le numéro de téléphone est requis'
    isValid = false
  }

  if (!form.startDate) {
    errors.startDate = 'La date de départ est requise'
    isValid = false
  }

  if (!form.endDate) {
    errors.endDate = 'La date de retour est requise'
    isValid = false
  } else if (form.startDate && form.endDate && new Date(form.endDate) <= new Date(form.startDate)) {
    errors.endDate = 'La date de retour doit être postérieure à la date de départ'
    isValid = false
  }

  if (form.adults < 1) {
    errors.adults = 'Au moins un adulte est requis'
    isValid = false
  }

  if (form.children < 0) {
    errors.children = "Le nombre d'enfants ne peut pas être négatif"
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true

  try {
    // TODO: Implémenter la logique de réservation avec l'API
    // Simuler un délai de réponse
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Rediriger vers la page de confirmation
    router.push({
      name: 'booking-confirmation',
      params: { id: destination.value?.id },
    })
  } catch (error) {
    // Gérer les erreurs de réservation
    console.error('Erreur lors de la réservation:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  // TODO: Récupérer les détails de la destination depuis l'API
  // Pour l'instant, on utilise des données de test
  destination.value = {
    id: Number(route.params.id),
    name: 'Paris',
    country: 'France',
    price: 599,
  }
})
</script>
