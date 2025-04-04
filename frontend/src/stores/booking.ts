import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export interface Destination {
  id: number
  name: string
  country: string
  description: string
  price: number
  image: string
  continent: string
  rating: number
  reviews: number
}

export interface BookingForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  startDate: string
  endDate: string
  adults: number
  children: number
  insurance: boolean
  transfer: boolean
  guide: boolean
  destinationId: number
}

export interface BookingResponse {
  id: number
  status: string
  totalPrice: number
  createdAt: string
}

export const useBookingStore = defineStore('booking', () => {
  const destinations = ref<Destination[]>([])
  const currentDestination = ref<Destination | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const bookingResponse = ref<BookingResponse | null>(null)

  // Récupérer toutes les destinations
  const fetchDestinations = async () => {
    isLoading.value = true
    error.value = null

    try {
      // En attendant que le backend soit prêt, on utilise des données de test
      // const response = await axios.get('/api/destinations')
      // destinations.value = response.data

      // Données de test
      destinations.value = [
        {
          id: 1,
          name: 'Paris',
          country: 'France',
          description:
            'Découvrez la ville lumière, ses monuments emblématiques, sa culture riche et son art de vivre unique.',
          price: 599,
          image:
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'europe',
          rating: 4.5,
          reviews: 128,
        },
        {
          id: 2,
          name: 'Tokyo',
          country: 'Japon',
          description:
            "Entre tradition et modernité, Tokyo vous offre une expérience unique au cœur de l'Asie.",
          price: 1299,
          image:
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'asia',
          rating: 4.8,
          reviews: 256,
        },
        {
          id: 3,
          name: 'New York',
          country: 'États-Unis',
          description:
            'La ville qui ne dort jamais vous attend pour une aventure urbaine inoubliable.',
          price: 899,
          image:
            'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'america',
          rating: 4.6,
          reviews: 189,
        },
        {
          id: 4,
          name: 'Sydney',
          country: 'Australie',
          description: "Entre mer et ville, découvrez l'une des plus belles baies du monde.",
          price: 1499,
          image:
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'oceania',
          rating: 4.7,
          reviews: 145,
        },
        {
          id: 5,
          name: 'Marrakech',
          country: 'Maroc',
          description: "Plongez dans l'exotisme et la culture marocaine au cœur de la médina.",
          price: 499,
          image:
            'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'africa',
          rating: 4.4,
          reviews: 167,
        },
        {
          id: 6,
          name: 'Rome',
          country: 'Italie',
          description:
            "Explorez l'histoire millénaire de la ville éternelle et sa gastronomie exceptionnelle.",
          price: 649,
          image:
            'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'europe',
          rating: 4.6,
          reviews: 234,
        },
        {
          id: 7,
          name: 'Bali',
          country: 'Indonésie',
          description:
            'Détendez-vous sur les plages paradisiaques et découvrez la culture balinaise.',
          price: 799,
          image:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'asia',
          rating: 4.9,
          reviews: 312,
        },
        {
          id: 8,
          name: 'Barcelona',
          country: 'Espagne',
          description: "Profitez du soleil méditerranéen et de l'architecture unique de Gaudí.",
          price: 549,
          image:
            'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          continent: 'europe',
          rating: 4.7,
          reviews: 198,
        },
      ]
    } catch (err) {
      error.value = 'Erreur lors de la récupération des destinations'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  // Récupérer une destination par son ID
  const fetchDestinationById = async (id: number) => {
    isLoading.value = true
    error.value = null

    try {
      // En attendant que le backend soit prêt, on utilise des données de test
      // const response = await axios.get(`/api/destinations/${id}`)
      // currentDestination.value = response.data

      // Données de test
      const destination = destinations.value.find((d) => d.id === id)
      if (destination) {
        currentDestination.value = destination
      } else {
        // Si la destination n'est pas trouvée dans le store, on la récupère
        await fetchDestinations()
        currentDestination.value = destinations.value.find((d) => d.id === id) || null
      }

      if (!currentDestination.value) {
        error.value = 'Destination non trouvée'
      }
    } catch (err) {
      error.value = 'Erreur lors de la récupération de la destination'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  // Soumettre une réservation
  const submitBooking = async (form: BookingForm) => {
    isLoading.value = true
    error.value = null

    try {
      // En attendant que le backend soit prêt, on simule une réponse
      // const response = await axios.post('/api/bookings', form)
      // bookingResponse.value = response.data

      // Simulation de réponse
      await new Promise((resolve) => setTimeout(resolve, 1000))
      bookingResponse.value = {
        id: Math.floor(Math.random() * 10000),
        status: 'confirmed',
        totalPrice: calculateTotalPrice(form),
        createdAt: new Date().toISOString(),
      }

      return bookingResponse.value
    } catch (err) {
      error.value = 'Erreur lors de la soumission de la réservation'
      console.error(err)
      return null
    } finally {
      isLoading.value = false
    }
  }

  // Calculer le prix total d'une réservation
  const calculateTotalPrice = (form: BookingForm) => {
    const destination =
      destinations.value.find((d) => d.id === form.destinationId) || currentDestination.value
    if (!destination) return 0

    const basePrice = destination.price * (form.adults + form.children)
    const insurancePrice = form.insurance ? 49 * (form.adults + form.children) : 0
    const transferPrice = form.transfer ? 29 * 2 : 0 // Aller-retour
    const guidePrice = form.guide ? 99 : 0

    return basePrice + insurancePrice + transferPrice + guidePrice
  }

  return {
    destinations,
    currentDestination,
    isLoading,
    error,
    bookingResponse,
    fetchDestinations,
    fetchDestinationById,
    submitBooking,
    calculateTotalPrice,
  }
})
