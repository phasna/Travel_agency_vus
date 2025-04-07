<template>
  <div class="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow-xl p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex space-x-4">
          <button
            v-for="type in searchTypes"
            :key="type.id"
            @click="searchForm.type = type.id"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            :class="
              searchForm.type === type.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            "
          >
            <span class="flex items-center">
              <component :is="type.icon" class="w-4 h-4 mr-2" />
              {{ type.label }}
            </span>
          </button>
        </div>
        <button
          @click="toggleAdvancedSearch"
          class="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
        >
          <span>Options avancées</span>
          <svg
            class="w-4 h-4 ml-1 transform transition-transform"
            :class="{ 'rotate-180': showAdvancedSearch }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <form @submit.prevent="handleSearch" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Destination</label>
            <div class="mt-1 relative">
              <input
                v-model="searchForm.destination"
                type="text"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10"
                placeholder="Où voulez-vous aller ?"
                required
                @input="handleDestinationInput"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <!-- Suggestions de destination -->
              <div
                v-if="destinationSuggestions.length > 0 && showSuggestions"
                class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
              >
                <ul
                  class="max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm"
                >
                  <li
                    v-for="suggestion in destinationSuggestions"
                    :key="suggestion.id"
                    @click="selectDestination(suggestion)"
                    class="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary-50"
                  >
                    <div class="flex items-center">
                      <span class="ml-3 block truncate">{{ suggestion.name }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Date de départ</label>
            <div class="mt-1 relative">
              <input
                v-model="searchForm.departureDate"
                type="date"
                :min="minDate"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10"
                required
                @change="validateDates"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Date de retour</label>
            <div class="mt-1 relative">
              <input
                v-model="searchForm.returnDate"
                type="date"
                :min="searchForm.departureDate || minDate"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10"
                required
                @change="validateDates"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex items-end">
            <button
              type="submit"
              class="w-full bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition duration-300 flex items-center justify-center"
              :disabled="isSearching"
            >
              <svg
                v-if="isSearching"
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
              <svg
                v-else
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {{ isSearching ? 'Recherche en cours...' : 'Rechercher' }}
            </button>
          </div>
        </div>

        <!-- Options avancées -->
        <div v-if="showAdvancedSearch" class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nombre de voyageurs</label>
            <div class="mt-1 relative">
              <select
                v-model="searchForm.travelers"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10"
              >
                <option v-for="n in 10" :key="n" :value="n">
                  {{ n }} {{ n === 1 ? 'personne' : 'personnes' }}
                </option>
              </select>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Budget</label>
            <div class="mt-1 relative">
              <select
                v-model="searchForm.budget"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10"
              >
                <option v-for="budget in budgetOptions" :key="budget.value" :value="budget.value">
                  {{ budget.label }}
                </option>
              </select>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Type de voyage</label>
            <div class="mt-1 relative">
              <select
                v-model="searchForm.tripType"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10"
              >
                <option v-for="type in tripTypes" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '@/composables/useSearch'
import { searchTypes, budgetOptions, tripTypes } from '@/data/searchData'

const {
  searchForm,
  isSearching,
  showSuggestions,
  destinationSuggestions,
  showAdvancedSearch,
  minDate,
  handleSearch,
  handleDestinationInput,
  selectDestination,
  toggleAdvancedSearch,
  validateDates,
} = useSearch()
</script>

<style scoped>
.suggestions-enter-active,
.suggestions-leave-active {
  transition: opacity 0.2s ease;
}

.suggestions-enter-from,
.suggestions-leave-to {
  opacity: 0;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
