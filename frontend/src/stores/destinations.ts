import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Destination, SearchForm } from '@/types'
import { destinationService } from '@/services/api'

export const useDestinationStore = defineStore('destinations', () => {
  const destinations = ref<Destination[]>([])
  const featuredDestinations = ref<Destination[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const searchResults = ref<Destination[]>([])

  const fetchAllDestinations = async () => {
    loading.value = true
    error.value = null
    try {
      destinations.value = await destinationService.getAll()
    } catch (err) {
      error.value = 'Erreur lors de la récupération des destinations'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchFeaturedDestinations = async () => {
    loading.value = true
    error.value = null
    try {
      // TODO: Implémenter l'API pour les destinations mises en avant
      featuredDestinations.value = destinations.value.slice(0, 4)
    } catch (err) {
      error.value = 'Erreur lors de la récupération des destinations mises en avant'
      throw err
    } finally {
      loading.value = false
    }
  }

  const searchDestinations = async (searchForm: SearchForm) => {
    loading.value = true
    error.value = null
    try {
      searchResults.value = await destinationService.search(searchForm)
    } catch (err) {
      error.value = 'Erreur lors de la recherche des destinations'
      throw err
    } finally {
      loading.value = false
    }
  }

  const getDestinationById = async (id: number) => {
    loading.value = true
    error.value = null
    try {
      return await destinationService.getById(id)
    } catch (err) {
      error.value = 'Erreur lors de la récupération de la destination'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    destinations,
    featuredDestinations,
    loading,
    error,
    searchResults,
    fetchAllDestinations,
    fetchFeaturedDestinations,
    searchDestinations,
    getDestinationById,
  }
})
