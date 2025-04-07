<template>
  <div class="about-page">
    <!-- Hero Section -->
    <div class="bg-primary text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ pageContent?.title || 'À propos de nous' }}
        </h1>
        <p class="text-xl opacity-90">
          {{ pageContent?.subtitle || 'Votre agence de voyage de confiance depuis plus de 20 ans' }}
        </p>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="container mx-auto px-4 py-12">
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>

      <div
        v-else-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Erreur!</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>

      <div v-else-if="parsedContent" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Notre histoire -->
        <div>
          <h2 class="text-3xl font-bold mb-6">
            {{ parsedContent.history?.title || 'Notre histoire' }}
          </h2>
          <p class="text-gray-700 mb-4">
            {{
              parsedContent.history?.content ||
              "Fondée en 2003, notre agence de voyage s'est construite sur des valeurs fortes : l'excellence du service, la satisfaction client et l'innovation dans l'organisation de voyages."
            }}
          </p>
        </div>

        <!-- Notre mission -->
        <div>
          <h2 class="text-3xl font-bold mb-6">
            {{ parsedContent.mission?.title || 'Notre mission' }}
          </h2>
          <p class="text-gray-700 mb-4">
            {{
              parsedContent.mission?.content ||
              'Notre mission est de rendre vos voyages inoubliables en vous offrant :'
            }}
          </p>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in parsedContent.mission?.items || defaultMissionItems"
              :key="index"
              class="flex items-start"
            >
              <svg
                class="h-6 w-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Nos valeurs -->
        <div class="md:col-span-2">
          <h2 class="text-3xl font-bold mb-6">
            {{ parsedContent.values?.title || 'Nos valeurs' }}
          </h2>
          <p class="text-gray-700 mb-4">
            {{
              parsedContent.values?.content ||
              'Nos valeurs sont au cœur de tout ce que nous faisons :'
            }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(item, index) in parsedContent.values?.items || defaultValuesItems"
              :key="index"
              class="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 class="text-xl font-semibold mb-2">{{ item.split(':')[0] }}</h3>
              <p class="text-gray-600">{{ item.split(':')[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePageContentStore } from '@/stores/pageContent'

const pageContentStore = usePageContentStore()
const loading = computed(() => pageContentStore.getLoading)
const error = computed(() => pageContentStore.getError)
const pageContent = computed(() => pageContentStore.getPageContent('about'))
const parsedContent = computed(() => pageContentStore.getPageContentParsed('about'))

// Valeurs par défaut au cas où les données du backend ne seraient pas disponibles
const defaultMissionItems = [
  'Des destinations soigneusement sélectionnées pour leur authenticité et leur beauté',
  'Un service personnalisé adapté à vos besoins et préférences',
  'Des guides expérimentés pour vous faire découvrir les secrets de chaque destination',
  'Une assistance 24/7 pendant toute la durée de votre voyage',
  'Des tarifs compétitifs sans compromis sur la qualité',
]

const defaultValuesItems = [
  "Excellence : Nous visons l'excellence dans tous nos services",
  'Intégrité : Nous agissons avec honnêteté et transparence',
  'Passion : Notre passion pour le voyage nous motive chaque jour',
  'Innovation : Nous cherchons constamment à améliorer nos services',
  'Durabilité : Nous nous engageons à promouvoir un tourisme responsable',
]

onMounted(async () => {
  await pageContentStore.fetchPageContent('about')
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}
</style>
