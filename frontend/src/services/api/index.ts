import axios from 'axios'
import type { User, Destination, Booking, Review, SpecialOffer, SearchForm } from '@/types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Services d'authentification
export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password })
    return response.data
  },
  register: async (userData: Partial<User>) => {
    const response = await api.post('/auth/register', userData)
    return response.data
  },
  logout: () => {
    localStorage.removeItem('token')
  },
}

// Services des destinations
export const destinationService = {
  getAll: async () => {
    const response = await api.get<Destination[]>('/destinations')
    return response.data
  },
  getById: async (id: number) => {
    const response = await api.get<Destination>(`/destinations/${id}`)
    return response.data
  },
  search: async (searchForm: SearchForm) => {
    const response = await api.post<Destination[]>('/destinations/search', searchForm)
    return response.data
  },
}

// Services des réservations
export const bookingService = {
  create: async (bookingData: Partial<Booking>) => {
    const response = await api.post<Booking>('/bookings', bookingData)
    return response.data
  },
  getUserBookings: async () => {
    const response = await api.get<Booking[]>('/bookings/user')
    return response.data
  },
  cancel: async (id: number) => {
    const response = await api.put<Booking>(`/bookings/${id}/cancel`)
    return response.data
  },
}

// Services des avis
export const reviewService = {
  create: async (reviewData: Partial<Review>) => {
    const response = await api.post<Review>('/reviews', reviewData)
    return response.data
  },
  getDestinationReviews: async (destinationId: number) => {
    const response = await api.get<Review[]>(`/reviews/destination/${destinationId}`)
    return response.data
  },
}

// Services des offres spéciales
export const specialOfferService = {
  getAll: async () => {
    const response = await api.get<SpecialOffer[]>('/special-offers')
    return response.data
  },
  getActive: async () => {
    const response = await api.get<SpecialOffer[]>('/special-offers/active')
    return response.data
  },
}

// Services du profil utilisateur
export const userService = {
  getProfile: async () => {
    const response = await api.get<User>('/users/profile')
    return response.data
  },
  updateProfile: async (userData: Partial<User>) => {
    const response = await api.put<User>('/users/profile', userData)
    return response.data
  },
}
