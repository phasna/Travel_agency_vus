// Types pour les utilisateurs
export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role: 'user' | 'admin'
}

// Types pour les destinations
export interface Destination {
  id: number
  name: string
  description: string
  price: number
  discount?: number
  rating: number
  reviews: number
  duration: string
  location: string
  image: string
  type: 'beach' | 'mountain' | 'city' | 'adventure'
}

// Types pour les réservations
export interface Booking {
  id: number
  userId: number
  destinationId: number
  startDate: string
  endDate: string
  numberOfTravelers: number
  totalPrice: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

// Types pour les avis
export interface Review {
  id: number
  userId: number
  destinationId: number
  rating: number
  comment: string
  createdAt: string
}

// Types pour les offres spéciales
export interface SpecialOffer {
  id: number
  destinationId: number
  title: string
  description: string
  discount: number
  startDate: string
  endDate: string
  image: string
}

// Types pour la recherche
export interface SearchType {
  id: string
  label: string
  icon: string
}

export interface BudgetOption {
  value: string
  label: string
}

export interface TripType {
  value: string
  label: string
}

export interface SearchForm {
  type: string
  destination: string
  departureDate: string
  returnDate: string
  travelers: number
  budget: string
  tripType: string
}

// Types pour le slider
export interface Slide {
  id: number
  image: string
  title: string
}

// Types pour les destinations
export interface FeaturedDestination {
  id: number
  name: string
  description: string
  price: number
  discount?: number
  rating: number
  reviews: number
  duration: string
  location: string
  image: string
}

// Types pour les témoignages
export interface Testimonial {
  id: number
  name: string
  location: string
  content: string
  avatar: string
}

// Types pour les statistiques
export interface Stats {
  clients: string
  destinations: string
  experience: string
  tours: string
}
