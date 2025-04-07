<template>
  <div class="circuit-details">
    <div v-if="circuit" class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="relative h-96 mb-8 rounded-lg overflow-hidden">
        <img :src="circuit.image" :alt="circuit.name" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-white">{{ circuit.name }}</h1>
        </div>
      </div>

      <!-- Circuit Info -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="col-span-2">
          <h2 class="text-2xl font-semibold mb-4">Description</h2>
          <p class="text-gray-700 mb-6">{{ circuit.description }}</p>

          <h2 class="text-2xl font-semibold mb-4">Points forts</h2>
          <ul class="list-disc list-inside text-gray-700 mb-6">
            <li v-for="(point, index) in circuit.highlights" :key="index">{{ point }}</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Prix</h3>
            <p class="text-3xl font-bold text-primary">{{ circuit.price }}€</p>
            <p class="text-sm text-gray-500">par personne</p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Durée</h3>
            <p class="text-lg">{{ circuit.duration }}</p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Note</h3>
            <div class="flex items-center">
              <div class="flex text-yellow-400">
                <span v-for="n in 5" :key="n" class="text-xl"> ★ </span>
              </div>
              <span class="ml-2 text-gray-600">({{ circuit.reviews }} avis)</span>
            </div>
          </div>

          <button
            @click="goToBooking"
            class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Réserver maintenant
          </button>
        </div>
      </div>

      <!-- Itinéraire -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Itinéraire détaillé</h2>
        <div class="space-y-6">
          <div
            v-for="(day, index) in circuit.itinerary"
            :key="index"
            class="bg-white p-6 rounded-lg shadow"
          >
            <h3 class="text-xl font-semibold mb-2">Jour {{ index + 1 }}</h3>
            <p class="text-gray-700">{{ day }}</p>
          </div>
        </div>
      </div>

      <!-- Informations pratiques -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Informations pratiques</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Ce qui est inclus</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li v-for="(item, index) in circuit.includes" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Ce qui n'est pas inclus</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li v-for="(item, index) in circuit.excludes" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Circuit {
  id: number
  name: string
  description: string
  price: number
  duration: string
  rating: number
  reviews: number
  image: string
  highlights: string[]
  itinerary: string[]
  includes: string[]
  excludes: string[]
}

const route = useRoute()
const router = useRouter()
const circuit = ref<Circuit | null>(null)

// Données de démonstration
const circuitsData: Circuit[] = [
  {
    id: 1,
    name: 'Découverte du Japon',
    description:
      'Un voyage inoubliable à travers les plus beaux sites du Japon, de Tokyo à Kyoto en passant par le Mont Fuji.',
    price: 2499,
    duration: '10 jours',
    rating: 4.8,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    highlights: [
      'Visite de Tokyo et ses quartiers traditionnels',
      'Excursion au Mont Fuji',
      'Découverte de Kyoto et ses temples',
      'Expérience dans un ryokan traditionnel',
      'Balade dans les jardins japonais',
    ],
    itinerary: [
      "Arrivée à Tokyo, transfert à l'hôtel et soirée libre",
      "Visite de Tokyo : quartier d'Asakusa, temple Senso-ji, traversée de Shibuya",
      "Excursion d'une journée au Mont Fuji",
      'Train pour Kyoto, visite du temple Kinkaku-ji',
      'Découverte des temples de Kyoto et du quartier de Gion',
      'Journée libre à Kyoto',
      'Visite de Nara et son grand Bouddha',
      "Retour à Tokyo, shopping dans le quartier d'Akihabara",
      'Dernière journée à Tokyo',
      'Départ',
    ],
    includes: [
      'Vols internationaux',
      'Hébergement en hôtels 3-4 étoiles',
      'Petit-déjeuner quotidien',
      'Guide francophone',
      'Transport sur place',
      'Entrées aux sites visités',
    ],
    excludes: ['Déjeuners et dîners', 'Assurance voyage', 'Pourboires', 'Dépenses personnelles'],
  },
  // Ajoutez d'autres circuits ici
]

onMounted(() => {
  const circuitId = parseInt(route.params.id as string)
  circuit.value = circuitsData.find((c) => c.id === circuitId) || null
})

const goToBooking = () => {
  if (circuit.value) {
    router.push(`/booking/${circuit.value.id}`)
  }
}
</script>

<style scoped>
.circuit-details {
  min-height: 100vh;
  background-color: #f8f9fa;
}
</style>
