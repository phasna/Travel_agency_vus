<template>
  <div class="bg-white">
    <div v-if="destination" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- En-tête de la destination -->
      <div class="relative h-96 rounded-lg overflow-hidden">
        <img
          :src="destination.image"
          :alt="destination.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white">{{ destination.name }}</h1>
          <p class="mt-2 text-xl text-gray-200">{{ destination.location }}</p>
        </div>
      </div>

      <!-- Informations principales -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold text-gray-900">À propos de cette destination</h2>
            <p class="mt-4 text-gray-600">{{ destination.description }}</p>
          </div>

          <!-- Caractéristiques -->
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-900">Caractéristiques</h3>
            <div class="mt-4 grid grid-cols-2 gap-4">
              <div class="flex items-center space-x-2">
                <svg
                  class="h-5 w-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-gray-600">Durée: {{ destination.duration }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="h-5 w-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <span class="text-gray-600">Localisation: {{ destination.location }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="h-5 w-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-gray-600">Meilleure période: {{ destination.bestTime }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="h-5 w-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="text-gray-600"
                  >Niveau de difficulté: {{ destination.difficulty }}</span
                >
              </div>
            </div>
          </div>

          <!-- Galerie d'images -->
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-900">Galerie d'images</h3>
            <div class="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in destination.gallery"
                :key="index"
                class="relative h-48 rounded-lg overflow-hidden"
              >
                <img
                  :src="image"
                  :alt="`${destination.name} - Image ${index + 1}`"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>

          <!-- Activités populaires -->
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-900">Activités populaires</h3>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="(activity, index) in destination.activities"
                :key="index"
                class="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div class="relative h-40">
                  <img
                    :src="activity.image"
                    :alt="activity.name"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  />
                  <div class="absolute top-2 right-2">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800"
                    >
                      {{ activity.duration }}
                    </span>
                  </div>
                </div>
                <div class="p-4">
                  <h4 class="text-lg font-medium text-gray-900">{{ activity.name }}</h4>
                  <p class="mt-1 text-sm text-gray-500">{{ activity.description }}</p>
                  <div class="mt-3 flex items-center justify-between">
                    <span class="text-primary-600 font-medium">{{ activity.price }}€</span>
                    <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hébergements -->
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-900">Hébergements recommandés</h3>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="(hotel, index) in destination.hotels"
                :key="index"
                class="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div class="relative h-40">
                  <img
                    :src="hotel.image"
                    :alt="hotel.name"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  />
                  <div class="absolute top-2 right-2">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800"
                    >
                      {{ hotel.category }}
                    </span>
                  </div>
                </div>
                <div class="p-4">
                  <h4 class="text-lg font-medium text-gray-900">{{ hotel.name }}</h4>
                  <p class="mt-1 text-sm text-gray-500">{{ hotel.description }}</p>
                  <div class="mt-3 flex items-center justify-between">
                    <div class="flex items-center">
                      <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <span class="ml-1 text-sm text-gray-600">{{ hotel.rating }}</span>
                    </div>
                    <span class="text-primary-600 font-medium"
                      >À partir de {{ hotel.price }}€/nuit</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Commentaires -->
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-900">Avis des voyageurs</h3>
            <div class="mt-4 space-y-6">
              <div
                v-for="(review, index) in destination.reviews"
                :key="index"
                class="bg-white rounded-lg shadow-md p-6"
              >
                <div class="flex items-center">
                  <img :src="review.avatar" :alt="review.name" class="h-10 w-10 rounded-full" />
                  <div class="ml-4">
                    <h4 class="text-lg font-medium text-gray-900">{{ review.name }}</h4>
                    <div class="flex items-center mt-1">
                      <div class="flex items-center">
                        <svg
                          v-for="i in 5"
                          :key="i"
                          class="h-4 w-4"
                          :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span class="ml-2 text-sm text-gray-500">{{ review.date }}</span>
                    </div>
                  </div>
                </div>
                <p class="mt-4 text-gray-600">{{ review.comment }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte de réservation -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-2xl font-bold text-gray-900"
              >À partir de {{ destination.price }}€</span
            >
            <span v-if="destination.discount" class="text-red-500 font-medium"
              >-{{ destination.discount }}%</span
            >
          </div>
          <div class="flex items-center space-x-2 mb-6">
            <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="text-gray-600"
              >{{ destination.rating }} ({{ destination.reviews.length }} avis)</span
            >
          </div>
          <router-link
            :to="'/booking/' + destination.id"
            class="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition duration-300 flex items-center justify-center"
          >
            Réserver maintenant
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <p class="text-gray-600">Destination non trouvée</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Activity {
  name: string
  description: string
  duration: string
  price: number
  image: string
}

interface Hotel {
  name: string
  description: string
  category: string
  rating: number
  price: number
  image: string
}

interface Review {
  name: string
  avatar: string
  rating: number
  date: string
  comment: string
}

interface Destination {
  id: string
  name: string
  description: string
  price: number
  discount?: number
  rating: number
  reviews: Review[]
  duration: string
  location: string
  image: string
  bestTime: string
  difficulty: string
  gallery: string[]
  activities: Activity[]
  hotels: Hotel[]
}

const route = useRoute()
const destination = ref<Destination | null>(null)

// Fonction pour gérer les erreurs de chargement d'image
const handleImageError = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://via.placeholder.com/800x600?text=Destination'
}

onMounted(() => {
  // Simuler le chargement des données de la destination
  // Dans un cas réel, vous feriez un appel API ici
  const mockDestinations: Destination[] = [
    {
      id: '1',
      name: 'Paris',
      description:
        "Découvrez la ville lumière, ses monuments emblématiques et son art de vivre unique. Paris est une ville qui regorge de culture, d'histoire et de gastronomie. Visitez la Tour Eiffel, le Louvre, Notre-Dame et bien d'autres sites emblématiques. Profitez des cafés parisiens, des jardins magnifiques et de l'atmosphère romantique qui fait la renommée de cette ville.",
      price: 599,
      discount: 15,
      rating: 4.8,
      reviews: [
        {
          name: 'Marie Dubois',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 5,
          date: '15 juin 2023',
          comment:
            'Un séjour incroyable à Paris ! Les visites guidées étaient excellentes et nous avons découvert des endroits magnifiques. Je recommande vivement !',
        },
        {
          name: 'Jean Martin',
          avatar:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4,
          date: '3 juillet 2023',
          comment:
            "Très belle expérience à Paris. Les hôtels étaient confortables et bien situés. Seul bémol : quelques files d'attente pour les attractions principales.",
        },
        {
          name: 'Sophie Bernard',
          avatar:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 5,
          date: '22 août 2023',
          comment:
            "Paris est toujours magique ! Ce voyage organisé nous a permis de découvrir des quartiers moins touristiques et d'apprécier la ville comme un local.",
        },
      ],
      duration: '5 jours',
      location: 'France',
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bestTime: 'Avril à octobre',
      difficulty: 'Facile',
      gallery: [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      activities: [
        {
          name: 'Visite guidée du Louvre',
          description:
            "Découvrez les chefs-d'œuvre du plus grand musée du monde avec un guide expert.",
          duration: '3h',
          price: 45,
          image:
            'https://images.unsplash.com/photo-1542980453-27d0f99536a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Croisière sur la Seine',
          description:
            "Admirez les monuments de Paris depuis la Seine lors d'une croisière commentée.",
          duration: '1h30',
          price: 25,
          image:
            'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Dégustation de vins',
          description: "Découvrez les meilleurs vins français lors d'une dégustation guidée.",
          duration: '2h',
          price: 60,
          image:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Tour de la Tour Eiffel',
          description: 'Montez au sommet de la Tour Eiffel pour une vue imprenable sur Paris.',
          duration: '2h',
          price: 35,
          image:
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      hotels: [
        {
          name: 'Hôtel Luxe Paris',
          description: 'Hôtel 5 étoiles au cœur de Paris avec vue sur la Tour Eiffel.',
          category: 'Luxe',
          rating: 4.9,
          price: 350,
          image:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Hôtel Boutique Marais',
          description: 'Charme et authenticité dans le quartier historique du Marais.',
          category: 'Boutique',
          rating: 4.7,
          price: 220,
          image:
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
    },
    {
      id: '2',
      name: 'Tokyo',
      description:
        "Plongez dans l'univers fascinant de Tokyo, entre tradition et modernité. Cette métropole vibrante offre un mélange unique de culture japonaise traditionnelle et d'innovation technologique. Explorez les temples anciens, les jardins zen, les quartiers animés et les gratte-ciel futuristes. Découvrez la cuisine japonaise raffinée, les marchés locaux et l'hospitalité légendaire des Japonais.",
      price: 899,
      rating: 4.9,
      reviews: [
        {
          name: 'Thomas Petit',
          avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 5,
          date: '10 mai 2023',
          comment:
            'Tokyo est une ville incroyable ! Le contraste entre tradition et modernité est fascinant. Les guides étaient très bien informés et nous ont fait découvrir des endroits secrets.',
        },
        {
          name: 'Claire Dubois',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 5,
          date: '28 juillet 2023',
          comment:
            "Un voyage inoubliable au Japon. L'organisation était parfaite et nous avons pu découvrir Tokyo sous tous ses aspects. Je recommande vivement !",
        },
      ],
      duration: '7 jours',
      location: 'Japon',
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bestTime: 'Mars à mai, septembre à novembre',
      difficulty: 'Modéré',
      gallery: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1502387762595-32e73a7239a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      activities: [
        {
          name: 'Visite du temple Senso-ji',
          description: 'Découvrez le plus ancien temple bouddhiste de Tokyo.',
          duration: '2h',
          price: 30,
          image:
            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Cours de cuisine japonaise',
          description: 'Apprenez à préparer des sushis et autres spécialités japonaises.',
          duration: '3h',
          price: 80,
          image:
            'https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Excursion au Mont Fuji',
          description: "Journée d'excursion au Mont Fuji avec guide et transport.",
          duration: '8h',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1502387762595-32e73a7239a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      hotels: [
        {
          name: 'Hôtel Park Hyatt Tokyo',
          description: 'Hôtel de luxe avec vue panoramique sur Tokyo.',
          category: 'Luxe',
          rating: 4.9,
          price: 450,
          image:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Ryokan traditionnel',
          description: 'Expérience authentique dans un ryokan traditionnel.',
          category: 'Traditionnel',
          rating: 4.8,
          price: 280,
          image:
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
    },
    {
      id: '3',
      name: 'New York',
      description:
        "Explorez la ville qui ne dort jamais et ses innombrables attractions. New York est une ville vibrante et cosmopolite qui offre une expérience unique. Découvrez les gratte-ciel emblématiques, les musées de renommée mondiale, les parcs verdoyants et la diversité culturelle qui fait la force de cette métropole. Profitez de la cuisine internationale, du shopping et de l'énergie incomparable de Manhattan.",
      price: 799,
      discount: 10,
      rating: 4.7,
      reviews: [
        {
          name: 'Alexandre Martin',
          avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 5,
          date: '5 avril 2023',
          comment:
            "New York est une ville incroyable ! Nous avons pu visiter tous les sites emblématiques et découvrir des quartiers moins touristiques. L'organisation du voyage était parfaite.",
        },
        {
          name: 'Julie Bernard',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4,
          date: '18 juin 2023',
          comment:
            'Très belle expérience à New York. Les hôtels étaient bien situés et confortables. Seul bémol : le temps était un peu capricieux pendant notre séjour.',
        },
      ],
      duration: '6 jours',
      location: 'États-Unis',
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bestTime: 'Avril à juin, septembre à novembre',
      difficulty: 'Modéré',
      gallery: [
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      activities: [
        {
          name: 'Visite de la Statue de la Liberté',
          description:
            "Découvrez l'emblème de New York et profitez d'une vue imprenable sur Manhattan.",
          duration: '3h',
          price: 40,
          image:
            'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Tour de Manhattan en hélicoptère',
          description: 'Survolez Manhattan et admirez la skyline de New York.',
          duration: '1h',
          price: 200,
          image:
            'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Broadway Show',
          description:
            "Assistez à un spectacle de Broadway, l'expérience théâtrale par excellence.",
          duration: '3h',
          price: 150,
          image:
            'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      hotels: [
        {
          name: 'The Plaza Hotel',
          description: 'Hôtel historique de luxe au cœur de Manhattan.',
          category: 'Luxe',
          rating: 4.9,
          price: 500,
          image:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Hôtel Boutique Soho',
          description: 'Charme et style dans le quartier artistique de Soho.',
          category: 'Boutique',
          rating: 4.7,
          price: 300,
          image:
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
    },
    {
      id: '4',
      name: 'Sydney',
      description:
        "Découvrez la plus grande ville d'Australie et ses plages magnifiques. Sydney est une ville cosmopolite qui allie culture urbaine et beauté naturelle. Explorez l'Opéra de Sydney, le Harbour Bridge, les plages de Bondi et Manly, et les nombreux parcs nationaux aux alentours. Profitez de la cuisine australienne, du café culture et de l'atmosphère décontractée qui caractérise cette ville.",
      price: 1299,
      rating: 4.8,
      reviews: [
        {
          name: 'Pierre Dubois',
          avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 5,
          date: '12 mars 2023',
          comment:
            "Sydney est une ville magnifique ! Les plages sont à couper le souffle et l'Opéra est encore plus impressionnant en vrai. Un voyage inoubliable !",
        },
        {
          name: 'Sophie Martin',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4,
          date: '30 août 2023',
          comment:
            'Très belle expérience à Sydney. Les activités proposées étaient variées et nous avons pu découvrir la ville sous différents aspects. Je recommande !',
        },
      ],
      duration: '8 jours',
      location: 'Australie',
      image:
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bestTime: 'Septembre à novembre, mars à mai',
      difficulty: 'Facile',
      gallery: [
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      activities: [
        {
          name: "Visite de l'Opéra de Sydney",
          description: "Découvrez l'architecture emblématique de l'Opéra de Sydney.",
          duration: '2h',
          price: 35,
          image:
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Excursion à Bondi Beach',
          description: 'Journée à la plage de Bondi avec cours de surf pour débutants.',
          duration: '6h',
          price: 80,
          image:
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Croisière dans le port de Sydney',
          description:
            "Admirez la skyline de Sydney depuis le port lors d'une croisière commentée.",
          duration: '2h',
          price: 60,
          image:
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      hotels: [
        {
          name: 'Four Seasons Hotel Sydney',
          description: "Hôtel de luxe avec vue sur l'Opéra et le Harbour Bridge.",
          category: 'Luxe',
          rating: 4.9,
          price: 400,
          image:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          name: 'Hôtel Boutique Darling Harbour',
          description: 'Charme et confort au cœur de Darling Harbour.',
          category: 'Boutique',
          rating: 4.7,
          price: 250,
          image:
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ],
    },
  ]

  destination.value = mockDestinations.find((d) => d.id === route.params.id) || null
})
</script>
