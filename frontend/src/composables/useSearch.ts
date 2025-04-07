import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { SearchForm, Destination } from '@/types'

export function useSearch() {
  const router = useRouter()
  const isSearching = ref(false)
  const showSuggestions = ref(false)
  const destinationSuggestions = ref<Destination[]>([])
  const showAdvancedSearch = ref(false)

  const searchForm = ref<SearchForm>({
    type: 'package',
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: 2,
    budget: 'standard',
    tripType: 'all',
  })

  const minDate = new Date().toISOString().split('T')[0]

  const validateDates = (): boolean => {
    const departure = new Date(searchForm.value.departureDate)
    const return_ = new Date(searchForm.value.returnDate)
    if (return_ < departure) {
      alert('La date de retour doit être postérieure à la date de départ')
      return false
    }
    return true
  }

  const validateSearchForm = (): boolean => {
    if (!searchForm.value.destination) {
      alert('Veuillez sélectionner une destination')
      return false
    }
    if (!searchForm.value.departureDate || !searchForm.value.returnDate) {
      alert('Veuillez sélectionner les dates de voyage')
      return false
    }
    return validateDates()
  }

  const handleSearch = async () => {
    if (!validateSearchForm()) return
    isSearching.value = true
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      router.push({
        path: '/search',
        query: {
          type: searchForm.value.type,
          destination: searchForm.value.destination,
          departureDate: searchForm.value.departureDate,
          returnDate: searchForm.value.returnDate,
          travelers: searchForm.value.travelers.toString(),
          budget: searchForm.value.budget,
          tripType: searchForm.value.tripType,
        },
      })
    } catch (error) {
      console.error('Erreur lors de la recherche:', error)
    } finally {
      isSearching.value = false
    }
  }

  const handleDestinationInput = async (event: Event) => {
    const input = event.target as HTMLInputElement
    const value = input.value
    if (value.length < 2) {
      destinationSuggestions.value = []
      showSuggestions.value = false
      return
    }
    // Simulation de suggestions (à remplacer par un appel API)
    destinationSuggestions.value = [
      { id: 1, name: 'Paris, France' },
      { id: 2, name: 'Paris, Texas' },
      { id: 3, name: 'Paris, Ontario' },
    ].filter((dest) => dest.name.toLowerCase().includes(value.toLowerCase()))
    showSuggestions.value = true
  }

  const selectDestination = (destination: Destination) => {
    searchForm.value.destination = destination.name
    showSuggestions.value = false
  }

  const toggleAdvancedSearch = () => {
    showAdvancedSearch.value = !showAdvancedSearch.value
  }

  return {
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
  }
}
