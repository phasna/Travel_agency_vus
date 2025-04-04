import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Destinations from '../views/Destinations.vue'
import Booking from '../views/Booking.vue'
import BookingConfirmation from '../views/BookingConfirmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      path: '/booking/:id',
      name: 'booking',
      component: Booking,
    },
    {
      path: '/booking-confirmation',
      name: 'booking-confirmation',
      component: BookingConfirmation,
    },
  ],
})

// Navigation guard pour vérifier l'authentification
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/destinations']
  const authRequired = !publicPages.includes(to.path)
  const isAuthenticated = localStorage.getItem('token') // Vérifier si l'utilisateur est connecté

  if (authRequired && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
