import { defineStore } from 'pinia'
import axios from 'axios'

interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null,
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getIsAuthenticated: (state) => state.isAuthenticated,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },

  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post('/api/login', { email, password })
        const { token, user } = response.data
        this.token = token
        this.user = user
        this.isAuthenticated = true
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return true
      } catch (error: any) {
        this.error = error.response?.data?.message || 'Une erreur est survenue lors de la connexion'
        return false
      } finally {
        this.loading = false
      }
    },

    async register(name: string, email: string, password: string, password_confirmation: string) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post('/api/register', {
          name,
          email,
          password,
          password_confirmation,
        })
        const { token, user } = response.data
        this.token = token
        this.user = user
        this.isAuthenticated = true
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return true
      } catch (error: any) {
        this.error =
          error.response?.data?.message || "Une erreur est survenue lors de l'inscription"
        return false
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        await axios.post('/api/logout')
      } catch (error) {
        console.error('Erreur lors de la déconnexion:', error)
      } finally {
        this.token = null
        this.user = null
        this.isAuthenticated = false
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
      }
    },

    async fetchUser() {
      if (!this.token) return

      this.loading = true
      this.error = null
      try {
        const response = await axios.get('/api/user')
        this.user = response.data
      } catch (error: any) {
        this.error =
          error.response?.data?.message ||
          'Une erreur est survenue lors de la récupération des informations utilisateur'
        if (error.response?.status === 401) {
          this.logout()
        }
      } finally {
        this.loading = false
      }
    },

    initializeAuth() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
        this.isAuthenticated = true
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        this.fetchUser()
      }
    },
  },
})
