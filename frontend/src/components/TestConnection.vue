<template>
  <div class="test-connection p-4">
    <h2 class="text-2xl font-bold mb-4">Test de connexion Backend</h2>

    <div class="space-y-4">
      <button
        @click="testConnection"
        class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Test en cours...' : 'Tester la connexion' }}
      </button>

      <div v-if="result" class="mt-4">
        <div
          :class="[
            'p-4 rounded',
            result.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700',
          ]"
        >
          <p class="font-semibold">{{ result.message }}</p>
          <p class="text-sm mt-2">Timestamp: {{ result.timestamp }}</p>
        </div>
      </div>

      <div v-if="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded">
        <p class="font-semibold">Erreur de connexion</p>
        <p class="text-sm mt-2">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const isLoading = ref(false)
const result = ref<any>(null)
const error = ref<string | null>(null)

const testConnection = async () => {
  isLoading.value = true
  error.value = null
  result.value = null

  try {
    const response = await axios.get('http://localhost:8000/api/test-connection')
    result.value = response.data
  } catch (err: any) {
    error.value = err.message
    console.error('Erreur de connexion:', err)
  } finally {
    isLoading.value = false
  }
}
</script>
