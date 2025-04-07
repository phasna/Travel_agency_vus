import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/destinations/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Destinations from '../views/destinations/Destinations.vue'
import DestinationDetails from '../views/destinations/DestinationDetails.vue'
import Booking from '../views/booking/Booking.vue'
import BookingConfirmation from '../views/booking/BookingConfirmation.vue'
import Circuits from '../views/destinations/Circuits.vue'
import CircuitDetails from '../views/destinations/CircuitDetails.vue'
import Sejours from '../views/destinations/Sejours.vue'
import Croisieres from '../views/destinations/Croisieres.vue'
import Services from '../views/common/Services.vue'
import Contact from '../views/common/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/circuits',
    name: 'Circuits',
    component: Circuits,
  },
  {
    path: '/circuits/:id',
    name: 'circuit-details',
    component: CircuitDetails,
  },
  {
    path: '/sejours',
    name: 'Sejours',
    component: Sejours,
  },
  {
    path: '/croisieres',
    name: 'Croisieres',
    component: Croisieres,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: Destinations,
  },
  {
    path: '/destinations/:id',
    name: 'destination-details',
    component: DestinationDetails,
  },
  {
    path: '/booking/:id',
    name: 'booking',
    component: Booking,
  },
  {
    path: '/booking-confirmation',
    name: 'booking-confirmation',
    component: BookingConfirmation,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Navigation guard pour vérifier l'authentification
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/destinations', '/destinations/:id']
  const authRequired = !publicPages.includes(to.path)
  const isAuthenticated = localStorage.getItem('token') // Vérifier si l'utilisateur est connecté

  if (authRequired && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
