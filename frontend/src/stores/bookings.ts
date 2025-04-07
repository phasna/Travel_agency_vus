import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Booking } from '@/types'
import { bookingService } from '@/services/api'

export const useBookingStore = defineStore('bookings', () => {
  const bookings = ref<Booking[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchUserBookings = async () => {
    loading.value = true
    error.value = null
    try {
      bookings.value = await bookingService.getUserBookings()
    } catch (err) {
      error.value = 'Erreur lors de la récupération des réservations'
      throw err
    } finally {
      loading.value = false
    }
  }

  const createBooking = async (bookingData: Partial<Booking>) => {
    loading.value = true
    error.value = null
    try {
      const newBooking = await bookingService.create(bookingData)
      bookings.value.push(newBooking)
      return newBooking
    } catch (err) {
      error.value = 'Erreur lors de la création de la réservation'
      throw err
    } finally {
      loading.value = false
    }
  }

  const cancelBooking = async (id: number) => {
    loading.value = true
    error.value = null
    try {
      const updatedBooking = await bookingService.cancel(id)
      const index = bookings.value.findIndex((booking) => booking.id === id)
      if (index !== -1) {
        bookings.value[index] = updatedBooking
      }
      return updatedBooking
    } catch (err) {
      error.value = "Erreur lors de l'annulation de la réservation"
      throw err
    } finally {
      loading.value = false
    }
  }

  const getBookingById = (id: number) => {
    return bookings.value.find((booking) => booking.id === id)
  }

  return {
    bookings,
    loading,
    error,
    fetchUserBookings,
    createBooking,
    cancelBooking,
    getBookingById,
  }
})
