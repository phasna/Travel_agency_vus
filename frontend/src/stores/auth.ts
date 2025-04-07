import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types'
import { authService } from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const login = async (email: string, password: string) => {
    loading.value = true
    error.value = null
    try {
      const response = await authService.login(email, password)
      user.value = response.user
      isAuthenticated.value = true
      localStorage.setItem('token', response.token)
    } catch (err) {
      error.value = 'Erreur de connexion. Veuillez vérifier vos identifiants.'
      throw err
    } finally {
      loading.value = false
    }
  }

  const register = async (userData: Partial<User>) => {
    loading.value = true
    error.value = null
    try {
      const response = await authService.register(userData)
      user.value = response.user
      isAuthenticated.value = true
      localStorage.setItem('token', response.token)
    } catch (err) {
      error.value = "Erreur lors de l'inscription. Veuillez réessayer."
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    authService.logout()
    user.value = null
    isAuthenticated.value = false
  }

  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
      isAuthenticated.value = true
      // TODO: Vérifier le token et récupérer les informations de l'utilisateur
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    checkAuth,
  }
})
