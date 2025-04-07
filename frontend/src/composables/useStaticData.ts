import { ref } from 'vue'

interface SearchType {
  id: string
  label: string
  icon: string
}

interface BudgetOption {
  value: string
  label: string
}

interface TripType {
  value: string
  label: string
}

interface FeaturedDestination {
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

interface Testimonial {
  id: number
  name: string
  location: string
  content: string
  avatar: string
}

export function useStaticData() {
  const searchTypes = ref<SearchType[]>([
    {
      id: 'flight',
      label: 'Vol',
      icon: 'svg-flight',
    },
    {
      id: 'hotel',
      label: 'Hôtel',
      icon: 'svg-hotel',
    },
    {
      id: 'package',
      label: 'Forfait',
      icon: 'svg-package',
    },
    {
      id: 'activity',
      label: 'Activité',
      icon: 'svg-activity',
    },
  ])

  const budgetOptions = ref<BudgetOption[]>([
    { value: 'economy', label: 'Économique' },
    { value: 'standard', label: 'Standard' },
    { value: 'luxury', label: 'Luxe' },
  ])

  const tripTypes = ref<TripType[]>([
    { value: 'all', label: 'Tous les types' },
    { value: 'beach', label: 'Plage' },
    { value: 'mountain', label: 'Montagne' },
    { value: 'city', label: 'Ville' },
    { value: 'adventure', label: 'Aventure' },
  ])

  const stats = ref({
    clients: '10,000+',
    destinations: '150',
    experience: '25',
    tours: '500',
  })

  const featuredDestinations = ref<FeaturedDestination[]>([
    {
      id: 1,
      name: 'Paris, France',
      description: "La ville de l'amour et de la culture",
      price: 599,
      discount: 15,
      rating: 4.8,
      reviews: 120,
      duration: '7 jours',
      location: 'Île-de-France',
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Tokyo, Japon',
      description: 'Entre tradition et modernité',
      price: 1299,
      discount: 10,
      rating: 4.9,
      reviews: 85,
      duration: '10 jours',
      location: 'Kanto',
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'New York, USA',
      description: 'La ville qui ne dort jamais',
      price: 899,
      rating: 4.7,
      reviews: 95,
      duration: '8 jours',
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Sydney, Australie',
      description: 'Entre mer et ville',
      price: 1499,
      discount: 20,
      rating: 4.9,
      reviews: 75,
      duration: '12 jours',
      location: 'Nouvelle-Galles du Sud',
      image:
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ])

  const testimonials = ref<Testimonial[]>([
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Paris, France',
      content:
        "Une expérience incroyable ! L'équipe a été très professionnelle et nous a permis de vivre un voyage inoubliable au Japon.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Jean Martin',
      location: 'Lyon, France',
      content:
        'Service client exceptionnel et organisation parfaite. Je recommande vivement pour vos prochains voyages !',
      avatar:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Sophie Bernard',
      location: 'Bordeaux, France',
      content:
        'Un voyage sur mesure parfaitement organisé. Les guides étaient excellents et les activités proposées étaient variées.',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ])

  return {
    searchTypes,
    budgetOptions,
    tripTypes,
    stats,
    featuredDestinations,
    testimonials,
  }
}
