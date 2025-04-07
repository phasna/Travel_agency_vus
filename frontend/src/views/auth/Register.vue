<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Créer un compte</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Ou
        <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
          connectez-vous à votre compte existant
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-700">
                Prénom
              </label>
              <div class="mt-1">
                <input
                  id="first-name"
                  v-model="firstName"
                  name="first-name"
                  type="text"
                  autocomplete="given-name"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  :class="{ 'border-red-300': errors.firstName }"
                />
              </div>
              <p v-if="errors.firstName" class="mt-2 text-sm text-red-600">
                {{ errors.firstName }}
              </p>
            </div>

            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-700"> Nom </label>
              <div class="mt-1">
                <input
                  id="last-name"
                  v-model="lastName"
                  name="last-name"
                  type="text"
                  autocomplete="family-name"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  :class="{ 'border-red-300': errors.lastName }"
                />
              </div>
              <p v-if="errors.lastName" class="mt-2 text-sm text-red-600">
                {{ errors.lastName }}
              </p>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                :class="{ 'border-red-300': errors.email }"
              />
            </div>
            <p v-if="errors.email" class="mt-2 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="new-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                :class="{ 'border-red-300': errors.password }"
              />
            </div>
            <p v-if="errors.password" class="mt-2 text-sm text-red-600">
              {{ errors.password }}
            </p>
          </div>

          <div>
            <label for="password-confirmation" class="block text-sm font-medium text-gray-700">
              Confirmer le mot de passe
            </label>
            <div class="mt-1">
              <input
                id="password-confirmation"
                v-model="passwordConfirmation"
                name="password-confirmation"
                type="password"
                autocomplete="new-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                :class="{ 'border-red-300': errors.passwordConfirmation }"
              />
            </div>
            <p v-if="errors.passwordConfirmation" class="mt-2 text-sm text-red-600">
              {{ errors.passwordConfirmation }}
            </p>
          </div>

          <div class="flex items-center">
            <input
              id="terms"
              v-model="acceptTerms"
              name="terms"
              type="checkbox"
              required
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              :class="{ 'border-red-300': errors.acceptTerms }"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              J'accepte les
              <a href="#" class="text-indigo-600 hover:text-indigo-500">conditions d'utilisation</a>
              et la
              <a href="#" class="text-indigo-600 hover:text-indigo-500"
                >politique de confidentialité</a
              >
            </label>
          </div>
          <p v-if="errors.acceptTerms" class="mt-2 text-sm text-red-600">
            {{ errors.acceptTerms }}
          </p>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              {{ isLoading ? 'Création du compte...' : 'Créer un compte' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const acceptTerms = ref(false)
const isLoading = ref(false)
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  acceptTerms: '',
})

const validateForm = () => {
  let isValid = true
  errors.firstName = ''
  errors.lastName = ''
  errors.email = ''
  errors.password = ''
  errors.passwordConfirmation = ''
  errors.acceptTerms = ''

  if (!firstName.value) {
    errors.firstName = 'Le prénom est requis'
    isValid = false
  }

  if (!lastName.value) {
    errors.lastName = 'Le nom est requis'
    isValid = false
  }

  if (!email.value) {
    errors.email = "L'email est requis"
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = "L'email n'est pas valide"
    isValid = false
  }

  if (!password.value) {
    errors.password = 'Le mot de passe est requis'
    isValid = false
  } else if (password.value.length < 8) {
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères'
    isValid = false
  }

  if (!passwordConfirmation.value) {
    errors.passwordConfirmation = 'La confirmation du mot de passe est requise'
    isValid = false
  } else if (password.value !== passwordConfirmation.value) {
    errors.passwordConfirmation = 'Les mots de passe ne correspondent pas'
    isValid = false
  }

  if (!acceptTerms.value) {
    errors.acceptTerms = "Vous devez accepter les conditions d'utilisation"
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
    // TODO: Implémenter la logique d'inscription avec l'API
    // Simuler un délai de réponse
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Rediriger vers la page de connexion après l'inscription réussie
    router.push('/login')
  } catch (error) {
    // Gérer les erreurs d'inscription
    if (error instanceof Error) {
      if (error.message.includes('email')) {
        errors.email = 'Cette adresse email est déjà utilisée'
      } else {
        errors.email = "Une erreur est survenue lors de l'inscription"
      }
    }
  } finally {
    isLoading.value = false
  }
}
</script>
