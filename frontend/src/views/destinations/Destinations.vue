<template>
  <div class="bg-gray-50 min-h-screen">
    <Hero />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Filters @update:filters="updateFilters" />
      <Stats :destinations-count="destinations.length" />
      <DestinationGrid :destinations="filteredDestinations" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Hero from '@/components/destinations/Hero.vue'
import Filters from '@/components/destinations/Filters.vue'
import Stats from '@/components/destinations/Stats.vue'
import DestinationGrid from '@/components/destinations/DestinationGrid.vue'

interface Destination {
  id: number
  name: string
  country: string
  continent: string
  price: number
  rating: number
  reviews: number
  image: string
}

// Fonction pour gérer les erreurs de chargement d'image
const handleImageError = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://via.placeholder.com/800x600?text=Destination'
}

// Données de test
const destinations = ref<Destination[]>([
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    continent: 'europe',
    price: 599,
    rating: 4.5,
    reviews: 128,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    name: 'Tokyo',
    country: 'Japon',
    continent: 'asia',
    price: 899,
    rating: 4.8,
    reviews: 256,
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    name: 'New York',
    country: 'États-Unis',
    continent: 'america',
    price: 799,
    rating: 4.6,
    reviews: 189,
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    name: 'Sydney',
    country: 'Australie',
    continent: 'oceania',
    price: 999,
    rating: 4.7,
    reviews: 145,
    image:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 5,
    name: 'Marrakech',
    country: 'Maroc',
    continent: 'africa',
    price: 499,
    rating: 4.4,
    reviews: 167,
    image:
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 6,
    name: 'Rome',
    country: 'Italie',
    continent: 'europe',
    price: 649,
    rating: 4.6,
    reviews: 234,
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 7,
    name: 'Bali',
    country: 'Indonésie',
    continent: 'asia',
    price: 799,
    rating: 4.9,
    reviews: 312,
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 8,
    name: 'Barcelona',
    country: 'Espagne',
    continent: 'europe',
    price: 549,
    rating: 4.7,
    reviews: 198,
    image:
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
])

// État des filtres
const filters = ref({
  searchQuery: '',
  continent: '',
  priceRange: '',
})

// Mise à jour des filtres
const updateFilters = (newFilters: typeof filters.value) => {
  filters.value = newFilters
}

// Filtrage des destinations
const filteredDestinations = computed(() => {
  return destinations.value.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(filters.value.searchQuery.toLowerCase()) ||
      destination.country.toLowerCase().includes(filters.value.searchQuery.toLowerCase())
    const matchesContinent =
      !filters.value.continent || destination.continent === filters.value.continent
    const matchesPrice =
      !filters.value.priceRange || destination.price <= parseInt(filters.value.priceRange)
    return matchesSearch && matchesContinent && matchesPrice
  })
})
</script>
