<template>
  <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="col-span-2">
        <label class="block text-sm font-medium text-gray-700">Rechercher</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            v-model="searchQuery"
            class="focus:ring-primary-500 focus:border-primary-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Rechercher une destination..."
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Continent</label>
        <select
          v-model="selectedContinent"
          class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
        >
          <option value="">Tous les continents</option>
          <option value="europe">Europe</option>
          <option value="asia">Asie</option>
          <option value="america">Amérique</option>
          <option value="africa">Afrique</option>
          <option value="oceania">Océanie</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Prix maximum</label>
        <select
          v-model="selectedPriceRange"
          class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
        >
          <option value="">Tous les prix</option>
          <option value="500">Moins de 500€</option>
          <option value="1000">Moins de 1000€</option>
          <option value="1500">Moins de 1500€</option>
          <option value="2000">Moins de 2000€</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue'

const emit = defineEmits(['update:filters'])

const searchQuery = ref('')
const selectedContinent = ref('')
const selectedPriceRange = ref('')

// Émettre les changements de filtres
watch([searchQuery, selectedContinent, selectedPriceRange], () => {
  emit('update:filters', {
    searchQuery: searchQuery.value,
    continent: selectedContinent.value,
    priceRange: selectedPriceRange.value,
  })
})
</script>
